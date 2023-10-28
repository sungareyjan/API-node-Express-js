const express = require('express');
require('dotenv').config();
require('./middleware/authMiddleware');
const database = require('./config/database');
const userRoute = require('./modules/userModule/route/index');
const app = express();
const port = 5001;
const mysql = require('mysql2');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoute);
// app.get('/api/get_all_users', (req,res)=>{
//     res.json({username});
// })

// app.get('/api/findUser/:id',(req,res)=>{
//     var id = req.params.id;
//     res.json({id});
// })

// app.get('/api/findUser',(req,res)=>{
//     var id = req.query.id;
//     res.json({id});
// })
// app.post('/api/create_user', (req,res)=>{
// var username = req.body.username;
// res.json({username});
// })



app.listen(port,()=>{
    console.log(`port: ${port}`);
})    
console.log("running");