const express=require('express')
const Router=express.Router()

// this is the entry point of all the api/p1/questions
Router.use('/question',require('./question'));
// this is the entry point of all the api/p1/options
Router.use('/options',require('./option'))

module.exports=Router