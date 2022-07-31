const express = require('express')
const router = express.Router()
const user = require('../models/user')


// REST API

router.post('/adduser', (req, res) => {
    // create a new user object and pass the formdata to the newUser . then call //.save() method . it will return a promise .
    var newUser = user({  
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    location: req.body.location,
      
    });
  
    // save the data via save method
    newUser
      .save()
      .then(doc => {
        console.log(doc);
        res.json(doc); // send  the document back
      })
      .catch(err => {
        res.send(err);
      });
  });

  router.get('/viewusers',(req,res)=>{
    user.find({})
    .then(docs => {
        console.log(docs);
        res.json(docs); // send documents
      })
      .catch(err => {
        res.send(err);
      });
});


// delete user

  router.delete("/:id", (req, res) => {
    user.remove({_id:req.params.id})
      .then(result => {
        res.json({ status: "ok", result: result });
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
  });

//   update user

  router.put('/:id',(req,res)=>{
    user.findOneAndUpdate({_id: req.params.id},req.body)
    .then(doc => {
        res.json({ status: "ok", result: doc });
      })
      .catch(err => {
        console.log(err);
        res.send(err);
      });
});  
            
  
module.exports = router