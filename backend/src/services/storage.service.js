const ImageKit = require('@imagekit/nodejs');
const { toFile } = ImageKit; 

const client = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadImage(file, folderName) {
  try {
    if (!file || !file.buffer) {
      throw new Error("File buffer is missing");
    }

    const convertedFile = await toFile(file.buffer, file.originalname);

    const response = await client.files.upload({
      file: convertedFile, 
      fileName: file.originalname,
      // 🌟 ImageKit automatically creates the folder structure if it doesn't exist
      folder: `CreatorlyProducts/${folderName}`, 
    });
    
    return response.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Image upload failed');
  }
}

module.exports = { uploadImage };   
