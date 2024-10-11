const express = require("express");
const app = express();

const PORT = 4000;

app.get("/", async (req,res) => {
    return res.json({
        message:"Main Endpoint Started"
    })
})

app.listen(PORT, ()=>{
    console.log(`this is process ${process.pid}`)
    console.log(`server started at ${PORT}`);
})
