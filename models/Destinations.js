const mongoose=require('mongoose')

const Destinationschema= new mongoose.Schema({
    city:{
        type: String,
        required: true,
        unique: true,
    },
    state:{
        type: String,
        required: true
    },
    places:{
        type: [String],
        required:true
    },
    minimum_budget_required:{
        type: Number,
        required: true,
    },
    land_type:{
        type: String,
        required: true,
        enum: ['plains', 'hills', 'deserts', 'beaches',]
    }
})

const Places_Information= mongoose.model('Places_Information', Destinationschema);

module.exports=Places_Information