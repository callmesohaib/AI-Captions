const express = require('express');
const multer = require('multer');
const path = require('path');
const { spawn } = require('child_process');
const uploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, 'uploads/'),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname)),
});

const upload = multer({ storage });

uploadRouter.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, error: 'No image uploaded' });
    }

    const imagePath = path.resolve(__dirname, '..', req.file.path);  

    console.log('Image path:', imagePath); 
    const python = spawn('python', ['controllers/uploadController.py', imagePath]);
    
    let result = '';
    let errorMsg = '';

    python.stdout.on('data', (data) => {
        result += data.toString();
    });

    python.stderr.on('data', (data) => {
        errorMsg += data.toString();
    });

    python.on('close', (code) => {
        if (code !== 0) {
            console.error('Python script failed:', errorMsg);
            return res.status(500).json({ success: false, error: 'Caption generation failed' });
        }

        res.json({ success: true, caption: result.trim() });
    });
});

module.exports = uploadRouter;
