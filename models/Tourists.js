const mongoose= require('mongoose')


const touristschema=new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    hometown: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['Male', 'Female', 'Other', 'Prefer not to say']
    },
    contact_number: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    } 
})

const User_Information= mongoose.model('User_Information', touristschema)

module.exports= User_Information;