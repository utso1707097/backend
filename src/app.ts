import express from 'express'

const app = express(); 

//Routes
//HTTP methods: get,post,put,patch,delete
app.get('/',(req,res)=>{
    res.json({ message: "Welcome to elib apis"});
});


export default app;