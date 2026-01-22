import sharp from "sharp";
import fs from "fs";

const src = "public/favicon.svg";

if (!fs.existsSync(src)) {
  console.error("favicon.svg not found");
  process.exit(1);
}

await sharp(src)
  .resize(192, 192)
  .png()
  .toFile("public/pwa-192.png");

await sharp(src)
  .resize(512, 512)
  .png()
  .toFile("public/pwa-512.png");

console.log("PWA icons generated ✔");