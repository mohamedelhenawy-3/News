const router=require('express').Router();
const Upload=require('../utils/multer')
//Upload.single('image')
const {
    uploadImage,
    postScienceNews,
    getAllScienceNews
} = require("../controller/scienceController");

 
router.post("/postscienceNews",postScienceNews); 
router.put("/image/:id",Upload.single('image'),uploadImage)
router.get("/allscienceNews",getAllScienceNews); 

module.exports = router;
