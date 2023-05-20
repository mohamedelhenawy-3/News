const Cloudinary=require('../utils/cloudinary')
const Science=require('../model/science');
const postScienceNews = async (req, res) => {
    try {
      const newScience = new Science({
       
        website: req.body.website,
        title: req.body.title
      });
  
      const savedScience = await newScience.save();
  
      res.status(201).json(savedScience);
    } catch (error) {
      console.error("Error saving business:", error);
      res.status(500).json({ error: "Failed to save science " });
    }
  };
  const uploadImage = async (req, res) => {
    try {
      const science = await Science.findById(req.params.id);
      console.log(req.file)
      if (!science) {
        return res.status(404).json({ error: "Business not found" });
      }
  
      const cloudinary = await Cloudinary.uploader.upload(req.file.path)
  
      science.public_id = cloudinary.public_id;
      science.url = cloudinary.url;
  
      const updateScience = await science.save();
  
      res.status(200).json({ science: updateScience });
    } catch (error) {
      console.error("Error updating business image:", error);
      res.status(500).json({ error: "Failed to update business image" });
    }
  };
  const getAllScienceNews=async(req,res)=>{
try{
const science=await Science.find();
if(!science) return res.status(400).json({message:"dont have any business"})
res.status(200).json(science)
}catch (error) {
    console.error("Error updating business image:", error);
    res.status(500).json({ error: "Failed to update business image" });
  }
  }







module.exports = {
    getAllScienceNews,
    postScienceNews,
    uploadImage
  };
  