const a=require("express");
const b=a();
const http=require("https");
const bo=require("body-parser");
const { STATUS_CODES } = require("http");
b.use(a.static("public"));
b.use(bo.urlencoded({extended:true}));
b.listen(process.env.PORT || 12,function(){
 console.log("You are on server port number 12");
});
b.get('/',function(req,res){
 res.sendFile(__dirname+"/login.html");
});
b.post('/',function(req,res){
 const  c=req.body.nam;
 const d=req.body.mail;
 const e=req.body.sign;

 
 const method={
  members:[
   {email_address:d,status:"ubscribed",merge_fields:{
    NAME:c
   }}
  ]};
  const sa=JSON.stringify(method);
  const url="https://us8.api.mailchimp.com/3.0/lists/464fbc158a";
  const Option={method:"post",auth:"Akk47:d3145024e46f8bd5e269a48ef10fecc5-us8"};
 const request= http.request(url,Option,function(response){
  if(response.statusCode===200){
   res.write("<h1> SUCCESS!</h1>");
  }
  else{
   res.sendFile(__dirname+"/fail.html");
  }
 
  res.on("data",function(data){
  console.log(JSON.parse(data));
  res.send();
 });
 
  });
  request.write(sa);
  request.end();
 

 
// res.send(sa);


 
});
b.post("/f",function(req,res){
 res.redirect("/");
});



// d3145024e46f8bd5e269a48ef10fecc5-us8
// https://us6.api.mailchimp.com/3.0/lists/
// 464fbc158a
