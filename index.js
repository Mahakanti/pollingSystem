const express=require ('express');
const PORT=3002;
const bodyParser=require('body-parser')
const app=express();
app.use(bodyParser.urlencoded({extended:true}))
// This  middleware is used to parse URL-encoded data from incoming POST requests.
const db=require('./database/mongoose');

// Routes
app.use('/',require('./routes/index'));
   

app.listen(PORT,function(err){
    if(err){
        console.log(err);
    }
    console.log("server is running on",PORT);

});
