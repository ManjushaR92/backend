const express = require('express');
var bodyParser = require('body-parser')
const router = require('./routes/userRoute'); 

const app = new express;



app.use(express.urlencoded({extended:true}));
app.use(express.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(require("morgan")("dev"));
app.use('/users', router);





//Port listen
app.listen(process.env.PORT||3000, ()=>{
    console.log("Server Ready on 3000");
});
