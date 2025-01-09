var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Tech_Trace')
  .then(() => console.log('DB Connected!'));

const Schema=mongoose.Schema;

const taskSchema = new Schema({
id :String,
name:String,
description:Object,
address:Object,
date:String,
status:String,
assigned_to:String
});

const taskModel=mongoose.model('tasks',taskSchema);

/* New Task Creation */
router.get('/task',function(req,res,next){
taskModel.create(req.body).then((newTask)=>{
    res.send(newTask)
});
});


module.exports = router;