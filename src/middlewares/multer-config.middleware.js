import multer from 'multer';

const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'src/uploads');
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const filenameWithoutExtension = name.substring(0, name.lastIndexOf('.'));
    const extension = MIME_TYPES[file.mimetype];
    callback(null, filenameWithoutExtension + Date.now() + '.' + extension);
  }
});

export default multer({storage: storage});