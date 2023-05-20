const router=require('express').Router();
const Upload=require('../utils/multer')
//Upload.single('image')
const {
    // getCourse,
    uploadImage,
    postBusniessNews,
    getAllBusinessNews
} = require("../controller/businessController");

// router.get("/getAllBusinessNews",getBusiness); 
router.post("/postBussinessNews",postBusniessNews); 
router.put("/image/:id",Upload.single('image'),uploadImage)

router.get("/allBusinessNews",getAllBusinessNews); 

module.exports = router;
