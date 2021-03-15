const { Category } = require('../models/category');

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/ecomm-store',
  {useNewUrlParser: true, useUnifiedTopology: true},
  () => {
      console.log("connected to mongodb...");
  },
  (err) => {
      console.log("Error message: ", err);
  }
);

var CategoryModel = mongoose.model('Category', Category);

const data = [
  new CategoryModel({
    name: "video-game",
    title: "Play Station 4 Games",
    imagePath: "./assets/category/category1.png"
  }),
  new CategoryModel({
    name: "video-game",
    title: "Xbox One Games",
    imagePath: "./assets/category/category2.png"
  }),
  new CategoryModel({
    name: "fan-gear",
    title: "Arizona Fan Gear",
    imagePath: "./assets/category/category3.png"
  }),
  new CategoryModel({
    name: "fan-gear",
    title: "Fan Gear",
    imagePath: "./assets/category/category4.png"
  })
];

var categoryAdded =  0;
for (var i=0; i<data.length; i++){
  data[i].save(function(err, result) {
    categoryAdded++;
    if(categoryAdded === data.length) {
      exitSeeder();
    }
  });
}

function exitSeeder() {
  mongoose.disconnect();
}
