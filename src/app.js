const express = require("express");

const app= express();

app.use("/test",(req,res) => {
  res.send("My ");
});

app.listen(3000, ()=> {
  console.log(" i am fdnv ")
});