var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Tech_Trace')
  .then(() => console.log('DB Connected for Task!'));

/* Token Verification */
function verifyToken(token) {
  return jwt.verify(token, 'TECH_TRACE');
}

const Schema = mongoose.Schema;


const taskSchema = new Schema({
  task_id: String,
  title: String,
  description: Object,
  address: Object,
  assigned_on: String,
  status: String,
  assigned_to: String,
  created_by: String
});

const taskModel = mongoose.model('tasks', taskSchema);

/* New Task Creation */
router.post('/task_create', function (req, res, next) {
  console.log(req.body);
  taskModel.create(req.body).then((newTask) => {
    res.send(newTask)
  });
});

/* Read task details */
router.get('/tasks_get', function (req, res, next) {

  taskModel.find().then((tasks) => {
    console.log(tasks);

    res.send(tasks)
  });
});

/* Read task details */
router.get('/tasks_get/id:', function (req, res, next) {
let id = req.query._id;
  taskModel.findById(id).then((tasks) => {
    console.log(tasks);

    res.send(tasks)
  });
});
/* Read task details */
router.get('/task_Unassigned', function (req, res, next) {

  const { status } = req.query; // Get the fields to select from the query parameters

  // If fields are provided, split them into an array; otherwise, select all fields
  const selectFields = status ? status.split(',').join(' ') : '';

  console.log(selectFields);


  taskModel.find().select(selectFields).then((tasks) => {
    console.log(tasks);

    res.send(tasks)
  });
});

/* Update task details */
// router.patch('/task_update',function(req,res,next){
//   let user= verifyToken(req.headers.authorization.split(" ")[1]);

//     taskModel.findById(user._id).updateOne(req.body).then((task)=>{
//         console.log(task)
//     res.send(task)
// });
// });
router.patch('/task_update', function (req, res, next) {
    let _id = req.query._id;
    taskModel.findById(_id).updateOne(req.body).then((task) => {
      console.log(task)
      res.send(task)
    }).catch((err) => { 
      res.send({
      message: "Task Update",
      status: "Task Update failed. Try again",
      data: []
    }) 
  });
});
/* Delete task details */
router.delete('/task_delete', function (req, res, next) {
  let id = req.body._id;
  taskModel.findByIdAndDelete(id).then((tasks) => {
    res.send(tasks)
  });
});

module.exports = router;