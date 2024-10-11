const cluster = require("node:cluster");
const os = require("os");
const express = require("express");

const totalCPU = os.cpus().length;
// console.log("totalCPU", totalCPU);

if(cluster.isPrimary){
    for(let i=0; i< totalCPU; i++){
        cluster.fork();
    }
}else{
    const app = express();
    const PORT = 8000;

    app.get("/", async (req, res) => {
        return res.json({
            message:` this is express server ${process.pid}`
        })
    })

    app.listen( PORT, () => {
        console.log(`server started At ${PORT}`);
    })
}