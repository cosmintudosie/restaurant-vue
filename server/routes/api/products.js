const express = require("express");
const mongodb = require("mongodb");
const dotenv = require("dotenv");
dotenv.config({ path: "../../config.env" });
const router = express.Router();
const databaseUrl = process.env.DATABASE

// Get Posts
router.get("/", async (req, res) => {
  const products = await loadProducts();
  res.send(await products.find({}).toArray());
});

// Add product
router.post("/", async (req, res) => {
  const products = await loadProducts();
  const newDish = req.body;
 
  // let stringForm = JSON.stringify(newForm, null, 2);
  await products.insertOne(newDish, function (err, res) {
      if (err) throw err;
    res.status(201).send({}); 
  });
  
});

// Patch
router.patch("/", async (req, res) => {
  console.log(req.body)
  const products = await loadProducts();
  
 let updateItem = { title: req.body.title };
  let updatedValue = { $set: { daily: req.body.daily } };
    await products.updateOne(updateItem, updatedValue, function (err, res) {
      if (err) throw err;
    res.status(200).send({});
});
})
// Delete Post
router.delete("/:id", async (req, res) => {
  const products = await loadProducts();
  await products.deleteOne({ _id: new ObjectID(req.params.id) });
  res.status(200).send({});
});

async function loadProducts() {
  const client = await mongodb.MongoClient.connect(
    databaseUrl,
    {
      useNewUrlParser: true,
    }
  );

  return client.db("catering").collection("menu");
}

module.exports = router;
