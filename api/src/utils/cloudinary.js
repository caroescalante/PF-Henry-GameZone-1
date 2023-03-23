const cloudinary = require('cloudinary').v2;
const { User } = require ("../db")
const { CLOUD_NAME, CLOUD_API_KEY, CLOUD_API_SECRET } = process.env;


cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: CLOUD_API_KEY,
  api_secret: CLOUD_API_SECRET
});
  
async function  uploadImages(req, res) {
    // Sube la imagen a Cloudinary
    await cloudinary.uploader.upload(req.file.path, {folder:"images"},function(error, result) {
      if (error) {
        console.error(error);
        return res.status(400).send('Error al subir imagen a Cloudinary');
      }
      // Si la subida fue exitosa, guarda la URL de la imagen en la base de datos
    return result.secure_url;
      
    });
    res.status(200).send('Imagen subida correctamente')
  };
  
  
module.exports = {uploadImages}




