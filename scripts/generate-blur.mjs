/**
 * Regenerates data/mediaBlur.ts, the tiny base64 blur placeholders used by
 * components/Photo.tsx.
 *
 * Run after adding or replacing anything in public/media or public/brand:
 *   npm run blur
 *
 * sharp is deliberately not a project dependency. The generated output is
 * committed, so no build ever needs it, and keeping it out avoids lockfile
 * churn on a repo that ships with pnpm-lock.yaml. Install it just to run this:
 *   npm i --no-save sharp
 */
import fs from 'node:fs';

let sharp;
try {
  ({ default: sharp } = await import('sharp'));
} catch {
  console.error('sharp is not installed. Run: npm i --no-save sharp');
  process.exit(1);
}

const SOURCES = [
  ['public/media', '/media'],
  ['public/brand', '/brand'],
];

const placeholders = {};

for (const [dir, prefix] of SOURCES) {
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
 * Generated file. Do not edit by hand. Regenerate with: npm run blur
 */
export const mediaBlur: Record<string, string> = {
${entries}
};
`,
);

console.log(`Wrote ${Object.keys(placeholders).length} placeholders to data/mediaBlur.ts`);
