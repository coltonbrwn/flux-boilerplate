var express = require('express'),
    bodyParser = require('body-parser'),
    API = require('./constants.js').APIEndpoints;

var app = module.exports = express();

app.use(bodyParser.json());

app.post(API.LOGIN, function(req, res, next){

  var email = req.body.email,
      password = req.body.password;

  if(password !== '123'){
    res.status(401).end();
    return;
  }

  var token;
  if (email === 'admin') {
    token = 'admin';
  }else if(email === 'customer'){
    token = "customer";
  }else if(email === 'panda'){
    token = 'panda';
  }else{
    res.status(401).end();
    return;
  }
  res.json({token: token});
  
});

app.get(API.JOBS, function(req, res, next){

  var jobsList = [];
  for(var i=0; i < 10; i++){
    jobsList.push({
      jobStatus: 'pending',
      test: '234'
    });
  }
  res.json({
    jobs: jobsList
  })
});