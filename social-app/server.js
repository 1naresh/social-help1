var express= require('express');
var app = express();
var fs=require('fs')
var path=require('path')

app.use(express.static(path.join(__dirname, 'build')));

app.get('/index', (req, res) => {
    res.sendFile(path.resolve(__dirname,  'build', 'index.html'));
  });

app.get("/",(req,res)=>res.send("hello"));
app.listen(100,()=>console.log("succcess"))