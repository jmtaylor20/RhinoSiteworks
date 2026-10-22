/**
 * Generates derived media and the blur placeholder map.
 *
 *   npm i --no-save sharp && npm run media
 *
 * Two outputs:
 *
 * 1. public/media/hero/<name>.webp
 *    Hero backgrounds render at 25 to 40 percent opacity behind a gradient, so
 *    they never need the full-detail original. A slight blur removes the
 *    foliage detail that dominates the file size and is invisible at that
 *    opacity: 155KB becomes 55KB. These are the LCP element on every landing
 *    page, so this is the difference between a fast page and a slow one.
 *
 * 2. data/mediaBlur.ts
 *    Tiny base64 placeholders so an image is never a blank grey frame.
 *
 * sharp is not a project dependency: the output is committed, so no build
 * needs it, and keeping it out avoids lockfile churn.
 */
import fs from 'node:fs';
import path from 'node:path';

let sharp;
try {
  ({ default: sharp } = await import('sharp'));
} catch {
  console.error('sharp is not installed. Run: npm i --no-save sharp');
  process.exit(1);
}

const HERO_DIR = 'public/media/hero';
const HERO_WIDTH = 1440;
const HERO_BLUR = 1.4;
const HERO_QUALITY = 35;

fs.mkdirSync(HERO_DIR, { recursive: true });

for (const file of fs.readdirSync('public/media').filter((f) => f.endsWith('.webp'))) {
  const out = path.join(HERO_DIR, file);
  await sharp(path.join('public/media', file))
    .resize({ width: HERO_WIDTH, withoutEnlargement: true })
    .blur(HERO_BLUR)
    .webp({ quality: HERO_QUALITY, effort: 6 })
    .toFile(out);
  const before = fs.statSync(path.join('public/media', file)).size;
  const after = fs.statSync(out).size;
  console.log(`hero/${file.padEnd(38)} ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}

const placeholders = {};
for (const [dir, prefix] of [['public/media', '/media'], ['public/media/hero', '/media/hero'], ['public/brand', '/brand']]) {
  for (const file of fs.readdirSync(dir).filter((f) => /\.(webp|png|jpg|jpeg)$/i.test(f))) {
    const buffer = await sharp(`${dir}/${file}`).resize({ width: 12 }).webp({ quality: 28 }).toBuffer();
    placeholders[`${prefix}/${file}`] = `data:image/webp;base64,${buffer.toString('base64')}`;
  }
}

const entries = Object.entries(placeholders)
  .map(([key, value]) => `  '${key}': '${value}',`)
  .join('\n');

fs.writeFileSync(
  'data/mediaBlur.ts',
  `/**
 * Tiny base64 blur placeholders, one per image in public/media and public/brand.
 *
 * next/image only generates a blur placeholder automatically for statically
 * imported images. Ours are referenced by path, so the placeholders are
 * pregenerated here and applied by components/Photo.tsx.
 *
 * Generated file. Do not edit by hand. Regenerate with: npm run media
 */
export const mediaBlur: Record<string, string> = {
${entries}
};
`,
);

console.log(`\nWrote ${Object.keys(placeholders).length} placeholders to data/mediaBlur.ts`);
