const express = require('express')
const router=express.Router()

const Foods=require("./../models/Foods")

router.post('/Foods', async (req, res)=>{
    try{
        const data=req.body
        const newfood= new Foods(data)
        const response= await newfood.save()
        console.log("Data Saved")

        res.status(200).json(response);
    }
    catch(err){
        res.status(500).json({error:"Internal Server Error"})
        console.log(err)
    }
})

router.get('/foods', async (req, res)=>{
    try{
        const data= await Foods.find()
        console.log("Data Fetched")
        
        res.status(200).json(data)
    }
    catch(err){
        console.log(err)
        res.status.json({error:"Internal Server Error"})
    }
})

router.get('/foods/:workType', async(req, res)=> {
    try{
        const workType= req.params.workType;
        if (workType=='Continental'|| workType=='Italian'|| workType=='Indian'|| workType=='Chinese'|| workType=='Mexican' || workType=='American'){
            const response= await Foods.find({Cuisine: workType});
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

module.exports=router