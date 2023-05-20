const Cloudinary=require('../utils/cloudinary')
const Sport=require('../model/sports');
const postSportsNews = async (req, res) => {
    try {
      const newSport = new Sport({
       
        website: req.body.website,
        title: req.body.title
      });
  
      const savedSport = await newSport.save();
  
      res.status(201).json(savedSport);
    } catch (error) {
      console.error("Error saving business:", error);
      res.status(500).json({ error: "Failed to save sports" });
    }
  };
  const uploadImage = async (req, res) => {
    try {
      const sport = await Sport.findById(req.params.id);
      console.log(req.file)
      if (!sport) {
        return res.status(404).json({ error: "Business not found" });
      }
  
      const cloudinary = await Cloudinary.uploader.upload(req.file.path)
  
      sport.public_id = cloudinary.public_id;
      sport.url = cloudinary.url;
  
      const updateSport = await sport.save();
  
      res.status(200).json({ sport: updateSport });
    } catch (error) {
      console.error("Error updating business image:", error);
      res.status(500).json({ error: "Failed to update business image" });
    }
  };
  const getAllSportsNews=async(req,res)=>{
try{
const sport=await Sport.find();
if(!sport) return res.status(400).json({message:"dont have any business"})
res.status(200).json(sport)
}catch (error) {
    console.error("Error updating business image:", error);
    res.status(500).json({ error: "dqiwd" });
  }
  }







module.exports = {
    getAllSportsNews,
    postSportsNews,
    uploadImage
  };
  