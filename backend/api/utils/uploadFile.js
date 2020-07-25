const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.cwd() + '/temp');
    },
    filename: function (req, file, cb) {
        req.body[file.fieldname] = file.originalname;
        cb(null, file.originalname);
    }
})

module.exports = multer({
    storage,
    fileFilter: function (req, file, callback) {
        var type = file.mimetype;
        if(type != "image/*") {
            req.body.errorFormat = 'Error';
            return callback(null, false);
        }
        callback(null, true)
    },
});