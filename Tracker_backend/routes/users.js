var express = require('express');
var router = express.Router();
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Tech_Trace')
  .then(() => console.log('DB Connected!'));

const Schema=mongoose.Schema;

const userSchema = new Schema({
id :String,
name:String,
email:String,
password:String,
phone:String,
role:String,
branch:String
});

const userModel=mongoose.model('profiles',userSchema);

/* Token Generation */
function generateAccessToken(username){
  // return jwt.sign({
  //   exp: Math.floor(Date.now() / 1000) + (60 * 60),
  //   data: username
  // }, 'TECH_TRACE');
  return jwt.sign(username,'TECH_TRACE');
}
/* Token Verification */
function verifyToken(token)
{
  return jwt.verify(token,'TECH_TRACE');
}
/* Password Encryption and Decryption */
async function encrypt(password){
let hash = await bcrypt.hash(password,saltRounds);
      return hash;
  };

async function decrypt(password,hash){
let result= await bcrypt.compare(password,hash);
return result;
}


/* User Profile Creation */
// router.post('/profile',async function(req, res, next){
//   // let password=(req.body.password);
//   let name=(req.body.name);
//   // let email=(req.body.email);
//   // let phone=(req.body.phone);
//   // let role=(req.body.role);

//   // let securePassword= await encrypt(password);
//   // console.log("secure password :", securePassword)
//   userModel.create({name:name}).then((newuser)=>{
//   res.send(newuser)
//   }).catch((e)=>{
//   res.send('Error while creating User details')
//   });
// });

/* User Profile Creation */
router.post('/profile',async function(req, res, next){
  let password=(req.body.password);
  let name=req.body.name;
  console.log("name :", name)
  let email=(req.body.email);
  let phone=(req.body.phone);
  let role=(req.body.role);
  let branch=(req.body.branch);
  let securePassword= await encrypt(password);
    console.log("secure password :", securePassword)
  userModel.create({name:name,email:email,password:securePassword,phone:phone,role:role,branch:branch}).then((newuser)=>{
  res.send(newuser)
  }).catch((e)=>{
  res.send('Error while creating User details')
  });
});

/* User Login */
router.post('/login', async function(req, res, next) {
  console.log("Login called");

    let email=(req.body.email);
    let user = await userModel.findOne({email:email});
    console.log(user.password);
    
    if (user){
      let password=(req.body.password); 
      console.log(user);
      let result= await decrypt(password,user.password);
      console.log(user);
          if (result==true){
          let token = generateAccessToken(JSON.stringify(user));
          res.send({
              message :"User List",
              status:"Success decrypt",
              data:user,token
        })
    }}
    else{
      res.send({
        message :"User List",
        status:"Login failed. Try again",
        data:[]
  })
    } 
});

/*Tokens*/

/* Token Verification */
router.get('/verify', function (req, res, next){

    let token= verifyToken(req.headers.authorization.split(" ")[1]);
      console.log("token",token);
      
    userModel.findById(token._id).then((user)=>{
      console.log(user);
      
      res.send(user);
    });
});

/* Token Verification */
router.get('/userlist', function (req, res, next){
    
  userModel.find().then((user)=>{
    console.log(user);
    res.send(user);
  });
});

/* Update userv details */
router.patch('/user_update',function(req,res,next){
  let id=req.body._id;
  userModel.findById(id).updateOne(req.body).then((task)=>{
      console.log(user)
  res.send(user)
});
});

/* Delete user details */
router.delete('/user_delete',function(req,res,next){
  let id=req.body._id;
  userModel.findByIdAndDelete(id).then((users)=>{
  res.send(users)
});
});

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
router.post('/task_create',function(req,res,next){
    taskModel.create(req.body).then((newTask)=>{
    res.send(newTask)
  });
  });

/* Read task details */
router.get('/task_get',function(req,res,next){
  taskModel.find().then((tasks)=>{
  res.send(tasks)
});
});

/* Update task details */
router.patch('/task_update',function(req,res,next){
    let id=req.body._id;
  
    taskModel.findById(id).updateOne(req.body).then((task)=>{
        console.log(task)
    res.send(task)
});
});

/* Delete task details */
router.delete('/task_delete',function(req,res,next){
  let id=req.body._id;
  taskModel.findByIdAndDelete(id).then((tasks)=>{
  res.send(tasks)
});
});

module.exports = router;
