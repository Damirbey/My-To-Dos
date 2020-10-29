const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const items = [];

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/",(req,res)=>{
  const today = new Date();
  const options ={
    weekday:"long",
    month:"long",
    day:"numeric"
  }
  const day = today.toLocaleDateString("en-US",options);
  res.render("index",{currentDay:day,allItems:items});
})

app.post("/",(req,res)=>{
  if(req.body.newItem!="")
  {
    const item = req.body.newItem;
    items.push(item);
    res.redirect("/");
  }
  else
  {
    res.redirect("/");
  }
})

app.listen("3000",()=>{
  console.log("Application is running on PORT 3000");
})
