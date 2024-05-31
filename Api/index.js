import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req,res) =>{
    console.log(res.json("Hello Welome to this Splendid App You MotherFucker !"))
})
app.listen(5172,() =>{
    console.log("connected")
});
