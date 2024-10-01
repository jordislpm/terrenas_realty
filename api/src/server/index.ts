import express from "express";

const server = express();

const PORT = process.env.PORT || 8000;

server.listen(PORT, ()=>{
    console.log("server is runnig!")
})
console.log("hola")

server.use("/api", (req, res)=>{
    res.send("server works")
})

server.use("/api/auth/register", (req, res)=>{
    res.send("register")
})

server.use("/api/auth/login", (req, res)=>{
    res.send("login")
})

server.use("/api/auth/logout", (req, res)=>{
    res.send("logout")
})

server.use("/api/post/", (req, res)=>{
    res.send("works")
})



