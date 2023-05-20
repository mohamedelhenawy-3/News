const router=require('express').Router();
const Upload=require('../utils/multer')
//Upload.single('image')
const {
    uploadImage,
    postSportsNews,
    getAllSportsNews
} = require("../controller/sportController");

 
router.post("/postSportNews",postSportsNews); 
router.put("/image/:id",Upload.single('image'),uploadImage)
router.get("/allSportsNews",getAllSportsNews); 

module.exports = router;
