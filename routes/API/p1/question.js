
const express=require('express')
const Router=express.Router()
const question_controller=require('../../../controller/questioncontroler')
// router for question creation,view,delete
Router.post('/create',question_controller.create)
Router.get('/view/:id',question_controller.showDetails)
Router.delete('/delete/:id',question_controller.deleteQues)

// This is a sub-router for options
Router.use('/options',require('./option'))


module.exports=Router