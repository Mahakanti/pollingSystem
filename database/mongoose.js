const mongoose=require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');
const DB = 'mongodb+srv://mrinalkanti:12*12@mrinalcluster.qnlcszf.mongodb.net/skilltest?retryWrites=true&w=majority';

mongoose.connect(DB).then(()=>{
 // return mongoose.Collection('pollingSystem');
   console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));




// Code for manually using the mongodb of local system

const db = mongoose.connection

db.on('error', console.error.bind(console, 'error connecting to database'));

db.once('open', ()=>{
    console.log("successfully connected to database : mongoDB");
});

module.exports = db;