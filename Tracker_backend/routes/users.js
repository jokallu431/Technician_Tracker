var express = require('express');
var router = express.Router();
const jwt=require('jsonwebtoken');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Tech_Trace')
  .then(() => console.log('DB Connected for Users!'));

const Schema=mongoose.Schema;

const userSchema = new Schema({
id :String,
name:String,
email:String,
password:String,
phone:String,
role:String
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
router.post('/profile',async function(req, res, next){
  let password=req.body.password;
  let name=req.body.name;
  let email=req.body.email;
  let phone=req.body.phone;
  let role=req.body.role;
  

  let securePassword= await encrypt(password);
  console.log("secure password :", securePassword)
  userModel.create({name:name,email:email,password:securePassword,phone:phone,role:role}).then((newuser)=>{
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
      
      res.send({
        "Message":'User_List',
        "Data": user
      });
    });
});

/* Update user details */
router.patch('/user_update',function(req,res,next){
  let id=req.body._id;
  userModel.findById(id).updateOne(req.body).then((user)=>{
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



module.exports = router;
