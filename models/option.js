const mongoose=require('mongoose')
//This is a schema for options
const optionSchema=new mongoose.Schema({

    option:{
        type:String,
        required:true
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,//the "question" field in  Mongoose schema should store values that are MongoDB ObjectIds
        required:true
    },
    vote:{
        type:Number,
        default:0
    },
    add_vote:{
        type:String,
    }
})

const Option=mongoose.model('Option',optionSchema);
module.exports=Option