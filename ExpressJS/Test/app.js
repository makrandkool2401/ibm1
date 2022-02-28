const express = require('express');
const app=express();
// app.get('/',(req,res)=>{
//     res.send("Get")
// });

// app.post('/POST',(req,res)=>{
//     res.send("post")
// });

// app.put('/put',(req,res)=>{
//     res.send("put")
// });

// app.delete('/del',(req,res)=>{
//     res.send("delete")
// });
const greet=require('./products');
app.use(greet);
app.get('/',(req,res)=>{
    res.send("Get Method");
});
app.listen(4000);