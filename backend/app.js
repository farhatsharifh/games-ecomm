const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require("./routes/products");
const categoryRoutes = require("./routes/categories");
const userRoutes = require("./routes/user");

// connect Mongoose to your DB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/ecomm-store',
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => {
        console.log("connected to mongodb...");
    },
    (err) => {
        console.log("Error message: ", err);
    });

const app = express();

// Middleware
app.use(cors());

app.use(bodyParser.json());

app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/user", userRoutes);

app.use('/ecomm-store/', function(req, res){
  res.send("Welcome at the ecomm-store, Developed by Farhat Sharif");
});

module.exports = app;
