var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Tech_Trace')
  .then(() => console.log('DB Connected for Branch!'));

  const Schema=mongoose.Schema;

  const branchSchema = new Schema({
    branchid :String,
    name:String,
    phone:String,
    address:Object,
    technicians:Array
    });
    
const branchModel=mongoose.model('branches',branchSchema);

/* Create Branch details */
router.post('/createBranch',function(req,res,next){
    branchModel.create(req.body).then((branch)=>{
    console.log(branch);
    res.send(branch)
  }).catch((e)=>{
    console.log(e.message);
  })
  });

 /* Get Branch details */
router.get('/getbranch',function(req,res,next){
    branchModel.find().then((branches)=>{
    res.send(branches)
  });
  });

   /* UpdateBranch details */
router.patch('/updatebranch',function(req,res,next){
  let branchid=req.body._id
  branchModel.findById(branchid).updateOne(req.body).then((branches)=>{
  res.send(branches)
});
});

 /* Delete Branch details */
 router.delete('/deletebranch',function(req,res,next){
  branchModel.findByIdAndDelete(id).then((branches)=>{
  res.send(branches)
});
});

module.exports = router;