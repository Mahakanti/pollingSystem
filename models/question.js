const mongoose=require('mongoose');
//This is a schema for questions
const questionSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    options:[
        {
            type:mongoose.Schema.Types.ObjectId,//each element in the "options" array will store the ObjectId of an "Option" document.
            ref:'Option'// It establishes a relationship between the "Question" collection and the "Option" collection
        }
    ]

})

const Question=mongoose.model('Question',questionSchema)
module.exports=Question