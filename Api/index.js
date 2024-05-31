import express from "express";

const app = express();
app.use(express.json());

app.listen(5172,() =>{
    console.log("connected")
});
