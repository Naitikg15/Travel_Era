const express= require ('express')
const router= express.Router()

const Place=require("./../models/Destinations")

router.post('/places', async(req, res)=>{
    try{
      const data = req.body
      const newPlace=new Place(data);
      const response= await newPlace.save()
      console.log("Destinations Data Saved");
  
      res.status(200).json(response)
    }
    catch(err){
      console.log(err)
      res.status(500).json({error: 'Internal Server Error'})
    }
})

router.get("/places", async  (req, res)=>{
    try{
      const data= await Place.find()
      console.log("Data Fetched!")
  
      res.status(200).json(data)
    }
    catch(err){
      console.log(err)
      res.status(500).json({error:'Internal Server Error'})
    }
  })

router.get('/places/:workType', async(req, res)=> {
  try{
      const workType= req.params.workType;
      if (workType=="beaches"|| workType=="deserts"|| workType=="hills"|| workType=="plains"){
          const response= await Place.find({land_type: workType});
          console.log("Response Fetched");
          res.status(200).json(response);
      }
      else {
          res.status(404).json({error:'Invalid Data Type'});
      }
  }
  catch(err){
      console.log(err);
      res.status(500).json({error:'Internal Server Error'});
  }
})

module.exports=router;