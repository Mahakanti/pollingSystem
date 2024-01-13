const express=require('express')
const Router=express.Router()

// this is the entry point of all the api/v1 
Router.use('/p1',require('./p1/index'));

module.exports=Router