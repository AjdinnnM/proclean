import { writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";

const ROOT = path.resolve(new URL(".", import.meta.url).pathname, "..");

const images = [
  // Hero
  { url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80", out: "public/images/hero/hero.jpg" },
  // Services
  { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", out: "public/images/services/garage.jpg" },
  { url: "https://images.unsplash.com/photo-1603712610494-91f16b4fe31b?w=1200&q=80", out: "public/images/services/staircase.jpg" },
  { url: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1200&q=80", out: "public/images/services/windows.jpg" },
  { url: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&q=80", out: "public/images/services/facade.jpg" },
  { url: "https://images.unsplash.com/photo-1596263576925-d63f98c59fa5?w=1200&q=80", out: "public/images/services/office.jpg" },
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80", out: "public/images/services/apartment.jpg" },
  // Gallery before/after
  { url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80", out: "public/images/gallery/garage-before.jpg" },
  { url: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80", out: "public/images/gallery/garage-after.jpg" },
  { url: "https://images.unsplash.com/photo-1503594384566-461fe158e797?w=1200&q=80", out: "public/images/gallery/staircase-before.jpg" },
  { url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=80", out: "public/images/gallery/staircase-after.jpg" },
  { url: "https://images.unsplash.com/photo-1581578017422-3f4cc34e7bd5?w=1200&q=80", out: "public/images/gallery/team-1.jpg" },
  { url: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80", out: "public/images/gallery/team-2.jpg" },
];

async function download(url, outPath) {
  const fullPath = path.join(ROOT, outPath);
  const dir = path.dirname(fullPath);
  if (!existsSync(dir)) await mkdir(dir, { recursive: true });
  if (existsSync(fullPath)) {
    console.log(`skip  ${outPath}`);
    return;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed ${url}: ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(fullPath, buf);
  console.log(`saved ${outPath} (${buf.length} bytes)`);
}

async function runBatched(tasks, batchSize = 4) {
  const results = [];
  for (let i = 0; i < tasks.length; i += batchSize) {
    const batch = tasks.slice(i, i + batchSize);
    const r = await Promise.allSettled(batch.map((t) => download(t.url, t.out)));
    results.push(...r);
  }
  const failed = results.filter((r) => r.status === "rejected");
  if (failed.length) {
    console.error(`${failed.length} failures`);
    failed.forEach((f) => console.error(f.reason));
  }
}

await runBatched(images);
console.log("done");
