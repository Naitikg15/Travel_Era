const mongoose= require('mongoose')

const foodschema=new mongoose.Schema({
    Name:{
        type: String,
        required:true,
        unique: true
    },
    Cost:{
        type: Number,
        required: true
    },
    Ingredients:{
        type: [String],
        required:true
    },
    Cuisine:{
        type: String,
        enum:['Continental', 'Italian', 'Indian', 'Chinese', 'Mexican', 'American'],
        required: true
    }
})

const Foods_Information= mongoose.model("Foods_Information", foodschema)

module.exports= Foods_Information;