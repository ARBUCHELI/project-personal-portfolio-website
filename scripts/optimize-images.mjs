/**
 * Optional: compress local JPG/PNG before deploy.
 * Run: npm install && npm run optimize-images
 */
import fs from "fs/promises";
import path from "path";
import sharp from "sharp";

import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIRS = ["images-certificates", "images-education", "education-icons"];
const MAX_WIDTH = 1200;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 80;

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(full)));
    else if (/\.(jpe?g|png)$/i.test(entry.name)) files.push(full);
  }
  return files;
}

async function optimizeFile(filePath) {
  const before = (await fs.stat(filePath)).size;
  const ext = path.extname(filePath).toLowerCase();
  const image = sharp(filePath).rotate().resize({
    width: MAX_WIDTH,
    withoutEnlargement: true,
  });

  if (ext === ".png") {
    await image.png({ quality: PNG_QUALITY, compressionLevel: 9 }).toFile(filePath + ".tmp");
  } else {
    await image.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toFile(filePath + ".tmp");
  }

  await fs.rename(filePath + ".tmp", filePath);
  const after = (await fs.stat(filePath)).size;
  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(`${path.relative(ROOT, filePath)}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB (${saved}% smaller)`);
}

let total = 0;
for (const dir of DIRS) {
  const abs = path.join(ROOT, dir);
  try {
    const files = await walk(abs);
    for (const file of files) {
      await optimizeFile(file);
      total += 1;
    }
  } catch (err) {
    if (err.code !== "ENOENT") throw err;
  }
}

console.log(`\nDone. Optimized ${total} images.`);
