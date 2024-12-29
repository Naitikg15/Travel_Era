const express= require('express')
const router= express.Router()

const User=require('./../models/Tourists')


router.post('/User', async(req, res)=>{
    try{
      const data= req.body
      const newUser=new User(data)
      const response = await newUser.save()
      console.log('data saved')
  
      res.status(200).json(response)
    }
    catch(err) {
      console.log(err);
      res.status(500).json({error:'Internal Server Error'})
    }
  })

router.get ('/User', async (req,res)=>{
    try{
    const data= await User.find()
    console.log('data fetched')
  
    res.status(200).json(data)
    }
    catch(err){
    console.log(err)
    res.status(500).json({error:'Internal Server Error'})
    }
     
})
  
router.get("/User/:workType", async (req,res)=>{
    try{
        const workType= req.params.workType;
        const response = await User.find({name:workType})
        res.status(200).json(response)
        console.log("Data Fetched Successfully")
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:"Internal Server Error"})
    }
})

router.put("/:id", async (req,res) => {
  try{
    const id= req.params.id
    const updatedPersondata=req.body
    const response= await User.findByIdAndUpdate(id, updatedPersondata,{
      new: true,
      runValidators: true
    })
    if (!response){
      return res.status(404).json({error: 'Person not Found'})
    }
    console.log('Data Updated')
    res.status(200).json(response)
  }
  catch(err){
    console.log(err)
    res.status(400).json({error: "Internal Server Error"})
  }
})

module.exports=router;