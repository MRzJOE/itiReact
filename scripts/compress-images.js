const { ImagePool } = require("@squoosh/lib");
const fs = require("fs");
const path = require("path");

async function compressImages() {
  console.log("Starting image compression...");

  const imagePool = new ImagePool();

  try {
    const srcDir = "src/assets";
    const imagesDir = "src/assets/images";

    // Get all image files
    const imageFiles = [];

    // Get files from src/assets
    if (fs.existsSync(srcDir)) {
      const files = fs.readdirSync(srcDir);
      files.forEach((file) => {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
          imageFiles.push(path.join(srcDir, file));
        }
      });
    }

    // Get files from src/assets/images
    if (fs.existsSync(imagesDir)) {
      const files = fs.readdirSync(imagesDir);
      files.forEach((file) => {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
          imageFiles.push(path.join(imagesDir, file));
        }
      });
    }

    console.log(`Found ${imageFiles.length} images to compress`);

    for (const imagePath of imageFiles) {
      try {
        const imageBuffer = fs.readFileSync(imagePath);
        const image = imagePool.ingestImage(imageBuffer);

        const ext = path.extname(imagePath).toLowerCase();

        if (ext === ".png") {
          await image.encode({
            oxipng: {
              level: 3,
            },
          });

          const { binary } = await image.encodedWith.oxipng;
          fs.writeFileSync(imagePath, binary);
          console.log(`Compressed PNG: ${imagePath}`);
        } else if (ext === ".jpg" || ext === ".jpeg") {
          await image.encode({
            mozjpeg: {
              quality: 80,
            },
          });

          const { binary } = await image.encodedWith.mozjpeg;
          fs.writeFileSync(imagePath, binary);
          console.log(`Compressed JPG: ${imagePath}`);
        }
      } catch (err) {
        console.error(`Error compressing ${imagePath}:`, err.message);
      }
    }

    console.log("Image compression completed!");
  } catch (error) {
    console.error("Error compressing images:", error);
  } finally {
    await imagePool.close();
  }
}

compressImages();
