const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
//dotenv.config();
const port = process.env.PORT || 3000;
dotenv.config({ path: "../config.env" });
const app = express();
const path =require('path')

// Middleware
app.use(bodyParser.json());
app.use(cors());

const products = require("./routes/api/products");
const orders = require("./routes/api/orders");
const users = require("./routes/api/users");

app.use("/api/products", products);
app.use("/api/orders", orders);
app.use("/api/users", users);

app.use(express.static(path.join(__dirname, '../', 'dist')));

  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'dist', 'index.html'));
});


app.listen(1338, function (){ console.log('App listening on', port);
});


