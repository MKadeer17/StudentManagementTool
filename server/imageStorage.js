const multer = require('multer');

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './images');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

let upload = multer({ storage: storage }).single('file');

module.exports = { multer, storage, upload };