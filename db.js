const mongoose= require('mongoose');
require('dotenv').config()

//const mongoURL=process.env.MONGODB_URL_LOCAL
const mongoURL=process.env.MONGODB_URL
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db=mongoose.connection;

db.on('connected', ()=> {
    console.log('MongoDB Server Connected!');
})

db.on('disconnected', ()=>{
    console.log('MongoDB Server Disconnected!');
})

db.on('error', (err)=>{
    console.log("An Error Occurred=", err);
})

module.exports=db;