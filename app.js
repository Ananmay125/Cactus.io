const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/home', (req, res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.get('/pricing', (req, res)=>{
    res.sendFile(__dirname + "/pricing.html");
});

app.get('/about-us', (req, res)=>{
    res.sendFile(__dirname + "/about-us.html");
});

app.get('/Terms and Conditions', (req, res)=>{
    res.sendFile(__dirname + "/terms-condition.html");
});

app.get('/contact-us', (req, res)=>{
    res.sendFile(__dirname + "/contact-us.html");
});

app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT);
    else
        console.log("Error occurred, server can't start", error);
    }
);