const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config();

const UserModel = require("./models/Users")
const app = express();



// middlware
// app.use(express.json());
const corsOptions={
  origin:"https://localhost:3000"
}
app.use(express.json());
app.use(cors(corsOptions));


// connect DB
mongoose.connect(process.env.MONGODB_URI).then(()=>{
  const PORT = process.env.PORT || 8000
  app.listen(PORT, ()=>{
    console.log(`App is listening at ${PORT}`);
  })
}).catch(err=>{
  console.log(err);
})

// route

app.get("/", (req, res) => {
  UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
});

app.get("/getUser/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findById({ _id: id })
    .then((users) => res.json(users))
    .catch((err) => res.json(err))
});

app.put('/updateUser/:id',(req,res)=>{
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id: id }, {
    name:req.body.name,
    email:req.body.email,
    age:req.body.age})
  .then((users) => res.json(users))
  .catch((err) => res.json(err))
})

app.delete ('/deleteUser/:id', (req,res) =>{
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id:id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
} )

app.post("/createUser", (req, res) => {
  UserModel.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.json(err));
});

app.listen(4000 || 8000, () => {
  console.log("Server is Running")
});
