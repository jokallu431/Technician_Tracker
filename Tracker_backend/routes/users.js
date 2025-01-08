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
role:String
});

const userModel=mongoose.model('profiles',userSchema);

/* Token Generation */
function generateAccessToken(username){
  console.log("generate JWT", username)
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
  let password=(req.body.password);
  let name=(req.body.name);
  let email=(req.body.email);

  let securePassword= await encrypt(password);
    console.log("secure password :", securePassword)
  userModel.create({name:name,email:email,password:securePassword}).then((newuser)=>{
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
      res.send(null)
      message :"Invalid login"
    }
  
});




/* Token Verification */
// router.get('/verify', async function(req, res, next) {
//   console.log("details called");
//     let split = verifyToken(req.headers.authorization.split(" ")[1]);
//     console.log(split);

   
//     let user = await userModel.findById(split._Id);
//     console.log(split._Id)
//       console.log("Users Details")
//       console.log(user)
//       res.send(user);
//     });
    
router.get('/verify', function (req, res, next){

    let token= verifyToken(req.headers.authorization.split(" ")[1]);
      console.log("token",token);
      
    userModel.findById(token._id).then((user)=>{
      console.log(user);
      
      res.send({
        "Message":'User_List',
        "Data": user
      })
    })
})

module.exports = router;
