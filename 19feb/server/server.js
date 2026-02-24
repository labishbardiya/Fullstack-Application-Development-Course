const express=require('express');
const cors=require('cors');
const server=express();
server.use(cors());
server.use(express.json());
//http://localhost:12000/login
server.get('/login',(req,res)=>{
    res.send("welcome to login server");
})
//http://localhost:12000/loginpost
server.post('/loginpost',(req,res)=>{
    console.log(req.body);
    //DB cHECK
    if(req.body.email==="pks@gmail.com" && req.body.password==="12345678"){
        res.json({"token":"abc123"});
    }
    else{
        res.json({"message":"login failed"});
    }
})

server.listen(12000,()=>{
    console.log("server is running on 12000");
})