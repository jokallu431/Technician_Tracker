var express = require('express');
var router = express.Router();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Tech_Trace')
  .then(() => console.log('DB Connected_Tasks!'));

const Schema=mongoose.Schema;

// const taskSchema = new Schema({
// id :String,
// name:String,
// description:Object,
// address:Object,
// date:String,
// status:String,
// assigned_to:String
// });

// const taskModel=mongoose.model('tasks',taskSchema);

// /* New Task Creation */
// router.post('/task_create',function(req,res,next){
//     taskModel.create(req.body).then((newTask)=>{
//     res.send(newTask)
// });
// });

/* Read task details */
router.get('/task_get',function(req,res,next){
    taskModel.find().then((tasks)=>{
    res.send(tasks)
});
});

// /* Update task details */
// router.patch('/task_update',function(req,res,next){
//     let id=req.body._id;
//     taskModel.findById(id).updateOne(req.body).then((task)=>{
//         console.log(task)
//     res.send(task)
// });
// });

/* Delete task details */
router.delete('/task_delete',function(req,res,next){
    let id=req.body._id;
    taskModel.findByIdAndDelete(id).then((tasks)=>{
    res.send(tasks)
});
});

module.exports = router;