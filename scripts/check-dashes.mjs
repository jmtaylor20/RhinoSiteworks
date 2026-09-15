/**
 * Fails the build if an em dash or en dash appears anywhere in the source.
 *
 * House style for Taylormade Brands: never use em dashes or en dashes. Use a
 * comma, a colon, parentheses, or a new sentence instead, and the word "to"
 * for ranges. Regular hyphens in compound words are fine.
 *
 * Runs as part of: npm run lint
 */
import fs from 'node:fs';
import path from 'node:path';

// Escape sequences, not literals, so this file passes its own check.
const EN_DASH = String.fromCharCode(0x2013);
const EM_DASH = String.fromCharCode(0x2014);
const SKIP_DIRS = new Set(['.git', 'node_modules', '.next', 'out']);
const EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.css', '.md', '.html', '.json']);

const findings = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(path.join(dir, entry.name));
      continue;
    }
    if (!EXTENSIONS.has(path.extname(entry.name))) continue;

    const file = path.join(dir, entry.name);
    fs.readFileSync(file, 'utf8')
      .split('\n')
      .forEach((line, index) => {
        if (line.includes(EN_DASH) || line.includes(EM_DASH)) {
          findings.push(`${file}:${index + 1}  ${line.trim().slice(0, 140)}`);
        }
      });
  }
}

walk('.');

if (findings.length > 0) {
  console.error(`Found ${findings.length} em or en dash(es). House style forbids both.`);
  console.error('Use a comma, a colon, parentheses, a new sentence, or "to" for ranges.\n');
  findings.forEach((f) => console.error(`  ${f}`));
  process.exit(1);
}

console.log('No em or en dashes found.');
