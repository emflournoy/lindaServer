const express = require('express');
const app = express();
// var port = process.env.PORT || 8000;

app.get('/', function(req,res){
  res.send('woohoo');
})

app.get('/api', function(req,res){
  res.send('hello from api');
})

app.listen(8000, function(){
  console.log('listening on 8000!');
})
