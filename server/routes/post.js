let express = require('express');
let multer = require('multer');
let mongoose = require('mongoose');
// let uuidv4 = require('uuid/v4');
let router = express.Router();
// Post model
let Post = require('../models/Post');
const { storage } = require("../cloudinary/imageCloud")

// const DIR = './public/';

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, DIR);
//     },
//     filename: (req, file, cb) => {
        
//         cb(null, Date.now() + file.originalname);
//     }
// });

// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });
var upload = multer({
    storage
})

// router.post('/posts', upload.single('postImage'), (req, res, next) => {
//     // const reqFiles = [];
//     // const url = req.protocol + '://' + req.get('host')
//     // for (var i = 0; i < req.files.length; i++) {
//     //     reqFiles.push(url + '/public/' + req.files[i].filename)
//     // }
//     console.log(req.file);
//     console.log(req.body);
//     const post = new Post({
//         // _id: new mongoose.Types.ObjectId(),
//         name: req.body.name, 
//         location: req.body.location,
//         description: req.body.description,
//         postImage: req.file.filename
//     });

//     post.save().then(result => {
//         res.status(201).json({
//             message: "Done upload!",
//             userCreated: {
//                 _id: result._id,
//                 name: result.name, 
//                 location: result.location,
//                 description: result.description,
//                 postImage: result.PostImage
//             }
//         })
//     }).catch(err => {
//         console.log(err),
//             res.status(500).json({
//                 error: err
//             });
//     })
// })


router.post("/posts", upload.single('postImage'), async (req, res) => {
    try {
        const { path, filename } = req.file;
        // console.log(req.file.path  +" : " + req.file.filename);

        const posts = await Post.create({
            name: req.body.name,
            location: req.body.location,
            description: req.body.description,
            postImage: { url: path,
             filename: filename }
        });

        res.status(200).json({
            status: "Success",
            posts
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

router.get("/posts", async (req, res, next) => {

    try {
        
        const posts = await Post.find().sort({date:-1});
        // console.log(posts);
        res.status(200).json({
            status: "Success",
            posts: posts
        })

    } catch (e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
    // posts.then(data => {
    //     res.status(200).json({
    //         message: "User list retrieved successfully!",
    //         posts: data
    //     });
    // });
});


// All other GET requests not handled before will return our React app
// router.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'instaclone/build', 'index.html'));
//   });

module.exports = router;