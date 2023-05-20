const Cloudinary=require('../utils/cloudinary')
const Business=require('../model/business');
const postBusniessNews = async (req, res) => {
    try {
      const newBusiness = new Business({
       
        website: req.body.website,
        title: req.body.title
      });
  
      const savedBusiness = await newBusiness.save();
  
      res.status(201).json(savedBusiness);
    } catch (error) {
      console.error("Error saving business:", error);
      res.status(500).json({ error: "Failed to save business" });
    }
  };
  const uploadImage = async (req, res) => {
    try {
      const business = await Business.findById(req.params.id);
      console.log(req.file)
      if (!business) {
        return res.status(404).json({ error: "Business not found" });
      }
  
      const cloudinary = await Cloudinary.uploader.upload(req.file.path)
  
      business.public_id = cloudinary.public_id;
      business.url = cloudinary.url;
  
      const updatedBusiness = await business.save();
  
      res.status(200).json({ business: updatedBusiness });
    } catch (error) {
      console.error("Error updating business image:", error);
      res.status(500).json({ error: "Failed to update business image" });
    }
  };
  const getAllBusinessNews=async(req,res)=>{
try{
const business=await Business.find();
if(!business) return res.status(400).json({message:"dont have any business"})
res.status(200).json(business)
}catch (error) {
    console.error("Error updating business image:", error);
    res.status(500).json({ error: "Failed to update business image" });
  }
  }







module.exports = {
     getAllBusinessNews,
    postBusniessNews,
    uploadImage
  };
  