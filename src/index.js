const express = require('express')

const app = express()

app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.send("Hello world!")
});

app.get("/server/ping", (req, res)=>{
    res.send("Pong");
});

app.listen(8080)