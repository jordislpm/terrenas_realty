import express from "express";
import dotenv from "dotenv";


const server = express();

const PORT = process.env.PORT || 8000;

server.listen(PORT, ()=>{
    console.log("server is runnig!")
})




