const express = require ('express');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const dotenv=require("dotenv")

dotenv.config();
const app = express ();
app.use (cors ());
app.use (bodyParser.json ());

const {Schema} = mongoose;
const userSchema = new Schema (
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {timestamps: true}
);

const Users=mongoose.model("users",userSchema)

//!get all users
app.get("/users",(req,res)=>{
    Users.find({},(err,docs)=>{
        if(!err){
            res.send(docs);
        }else{
            res.status(500).json({message:err});
        }
    })
})
//! get user by id
app.get("/users/:id",(req,res)=>{
    const {id}=req.params;
    Users.findById(id,(err,docs)=>{
        if(!err){
         if(docs){
            res.send(docs)
         }else{
            res.status(404).json({message:"Not Found"});
         }
        }else{
            res.status(500).json({message:err});
        }
    })
})

//!add user
app.post("/users",(req,res)=>{
    let user=new Users({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        subject:req.body.subject,
        email:req.body.email,
        message:req.body.message
    });
    user.save();
    res.send({message:"Successfully"})
})
//!delete user
app.delete ('/users/:id', (req, res) => {
    const {id} = req.params;
    Users.findByIdAndDelete (id, err => {
      if (!err) {
        res.send ('SUCCESSFULLY DELETED');
      } else {
        res.status (500).json ({message: err});
      }
    });
  });

const PORT=process.env.PORT;
const DB = process.env.DB_URL.replace ('<password>', process.env.DB_PASSWORD);
mongoose.connect (DB, err => {
    if (!err) {
      console.log ('DB connected');
      app.listen (PORT, () => {
        console.log ('APP is up and running');
      });
    }
  });