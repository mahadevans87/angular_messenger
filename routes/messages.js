var express = require('express');
var router = express.Router();
var Message = require('../models/message');

router.get('/', function(req, res){
  Message.find().exec(function(err, messages){
    if (err) {
        return res.status(500).json({
        message: 'An internal server error occured',
        error: err 
      });
    }
    return res.status(200).json({
      message: 'Success',
      obj: messages
    });
  });
});


router.post('/', function (req, res, next) {
  var message = new Message({
    content: req.body.content
  });
  message.save()
  .then(function (result) {
    return res.status(201).json({
      message: 'A new message was successfully created',
      object: result
    });
  }).catch(function(error) {
    return res.status(500).json({
      message: 'An internal server error occured',
      error: error
    });
  });
});

module.exports = router;