const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, process.cwd() + '/temp')
//     },
//     filename: function (req, file, cb) {
//         req.body[file.fieldname] = file.originalname;
//         cb(null, file.originalname);
//     }
// })

// module.exports = multer({
//     storage,
//     fileFilter: function (req, file, callback) {
//         var type = file.mimetype;
//         if(type != "image/*") {
//             req.body.errorFormat = 'Error';
//             return callback(null, false);
//         }
//         callback(null, true)
//     },
// });
const storage = multer.diskStorage({
<<<<<<< HEAD
    destination:(req,file,cb)=>{
        cb(null,'temp')
=======
    destination: function (req, file, cb) {
        cb(null, process.cwd() + '/temp');
>>>>>>> master
    },
    filename : (req,file,cb)=>{
        cb(null,file.fieldname+'-'+Date.now()+'-'+file.originalname)
    }
})

const imageFileFilter = (req,file,cb)=>{
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/ )){
        return cb(new Error("You can upload only image files"),false);
    }
    cb(null,true);
}

module.exports = multer({ storage: storage, fileFilter: imageFileFilter });