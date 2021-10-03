const express = require('express');
const app = express();
const user = require("./user")


//route
app.get('/stark-depths-59358.herokuapp.com/student/studentlist',(req,res) =>{
  res.send(user);
})


app.listen(3000, () => {
    console.log("server started");
} )