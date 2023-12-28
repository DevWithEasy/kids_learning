const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        const folder = req.body.folder || 'uploads'

        const uploadPath = path.join(__dirname , folder)

        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        const fileName = Date.now() + '_' + file.originalname.toLowerCase().split(' ').join('_')
        cb(null, fileName)
    }
})

const upload = multer({
    storage: storage,
    
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
            cb(null, true)
        } else {
            cb(null, false)
            return cb(new Error('Invalid file type. Only jpg.jepg and png are allowed.'));
        }
    }
})

module.exports = upload