const express= require("express");
const bodyParser=require("body-parser");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
  // res.send("calc app");
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
  var xx=Number(req.body.X);
  var yy=Number(req.body.Y);
  var zz=xx+yy;

  console.log(req.body.X);
  console.log(req.body.Y);
  console.log(zz);
   res.send("sum= "+ zz);
 // res.send(zz);

});

app.listen(3000,function(){
console.log("server started on port 3000");
});
