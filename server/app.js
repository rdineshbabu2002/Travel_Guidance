const express = require("express");
const cors = require("cors");
const errorController = require("./controllers/errorController");
const AppError = require("./utils/AppError");
const Categories = require('./Model/Categories')
const Tour =require('./Model/Tour.js')
const app = express();
app.use(cors());
app.options("*", cors());

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({ message: "Hello" });
});
app.get('/api/v1/categories',async(req,res)=>{
  const datas = await Categories.find({});
  res.status(200).json(datas)
})

app.get('/api/v1/locations/:name',async(req,res)=>{
  var {name}=req.params
  name=name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
  console.log(name)
  const tours = await Tour.find({Location:{"$regex":`.*${name}.*`}})
  res.status(200).json(tours)

})
app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(errorController);
module.exports = app;


