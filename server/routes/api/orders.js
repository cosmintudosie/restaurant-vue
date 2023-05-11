const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
const { MongoClient, ObjectId } = require('mongodb')
const router = express.Router();
const jwt = require('jsonwebtoken');
dotenv.config({ path: "../../config.env" });
const databaseUrl = process.env.DATABASE




function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, 'secret_key', (err, user) => {
    console.log(err)
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
// Get Orders
router.get("/", async (req, res) => {
  const orders = await loadOrders();
  res.send(await orders.find({}).toArray());
});

// Add Order
router.post("/",authenticateToken, async (req, res) => {
  const order = req.body;
  const orders = await loadOrders();
  console.log(req.headers)
  await orders.insertOne(order, function (err, res) {
    if (err) throw err;
  });
  res.status(201).send();
});

// Delete Order
router.delete("/:id", async (req, res) => {
  const orders = await loadOrders();
  const query = { _id: new ObjectId(req.params.id) };
  await orders.deleteOne(query);
  res.status(200).send({});
});

async function loadOrders() {
  const client = await mongodb.MongoClient.connect(
   databaseUrl,
    {
      useNewUrlParser: true,
    }
  );
  return client.db("catering").collection("orders");
}

module.exports = router;
