const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:"dwyewupvx",
    api_key:779357511261459,
    api_secret:"_fpMI9CEHeDlG2DL9MLEzsdTZ-g"
})

const storage= new CloudinaryStorage({
    cloudinary,
    params:{
        folder:'',
        allowedFormats: ['jpg', 'png', 'jpeg']
    }
 
})

module.exports={cloudinary,storage}