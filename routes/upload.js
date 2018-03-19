var express = require('express');
var router = express.Router();
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' });

/* GET ALL Users */
router.post('/',upload.single('avatar'), function(req, res, next) {
    console.log("uploading");
    //console.log(req.file.mimetype);
    res.end('It worked!');
});

module.exports = router;