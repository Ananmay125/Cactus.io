const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.status(200);
    res.sendFile(__dirname + "/index.html");
});

app.get('/home', (req, res)=>{
    res.status(200);
    res.sendFile(__dirname + "/index.html");
});

app.get('/pricing', (req, res)=>{
    res.status(200);
    res.sendFile(__dirname + "/pricing.html");
});

app.get('/contact-us', (req, res)=>{
    res.status(200);
    res.sendFile(__dirname + "/contact-us.html");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else
        console.log("Error occurred, server can't start", error);
    }
);