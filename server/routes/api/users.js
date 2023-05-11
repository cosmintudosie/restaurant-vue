const express = require("express");
const app=express()
const cors = require ("cors")
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const bcrypt = require("bcrypt");
const { MongoClient, ObjectId } = require('mongodb')
const router = express.Router();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser')
dotenv.config({ path: "../../config.env" });

app.use(cookieParser())
app.use(cors())

const databaseUrl = process.env.DATABASE
// Add User
router.post("/", async (req, res) => {
const newUser = req.body;
  const users = await loadUsers();
  const query = { email: newUser.email };
let userAlreadyRegistered = await users.find(query).toArray()
if(userAlreadyRegistered[0]){
    console.log("Already registered")
    res.send({msg: 'There already is an acount with this email'})
    return
}

  await bcrypt.hash(newUser.password, 10, async function (err, hashedPass) {
    newUser.password = hashedPass;
    delete newUser.confirmPassword;
  await users.insertOne(newUser, function (err, res) {
    if (err) throw err;
  });
  })
  res.status(201).send();
});

//Verify password
router.post("/passCompare", async (req, res) => {
  const pendingUser = req.body.email;
  /*const userName = req.body.name;*/
   console.log(req.body)

  const query = { email: pendingUser };
    const users = await loadUsers();

  const currentUser = await users.find(query).toArray();
const userName = currentUser[0].name
  if (!currentUser[0]) {
    res.json({ status: "fail" })
    return
  } 
   const passwordCheck = await bcrypt.compare(req.body.password, currentUser[0].password);
   if(!passwordCheck){
    res.json({ status: "fail" })
     return
    }
  if(passwordCheck){
const token = jwt.sign({user:userName},'secret_key',{expiresIn:500000})

res.json({
    status:'succes',
    token,
    data:{
        userName
    }
})
  }

});
// Delete Order
router.delete("/:id", async (req, res) => {
  const orders = await loadUsers();
  const query = { _id: new ObjectId(req.params.id) };
  await orders.deleteOne(query);
  res.status(200).send({});
});

async function loadUsers() {
  const client = await mongodb.MongoClient.connect(databaseUrl, {useNewUrlParser: true,});

  return client.db("catering").collection("users");
}

module.exports = router;
