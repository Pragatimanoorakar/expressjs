const express = require('express');
const app = express();
const users = require("./users")


//route
app.get('/', (req, res) =>{
res.send('hello world');
})


app.get('/student/getDetails',(req,res) =>{
  res.send(users);
})

app.post('/student/add',(req,res) =>{
  res.json({"result":"success"});
})

app.get('//ancient-crag-75226.herokuapp.com/student/studentList',(req,res) =>{
  res.send(users);
})




// app.listen(3000, () => {
//     console.log("server started");
// } )
