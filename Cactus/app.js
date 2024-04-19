const express = require('express');
const app = express();
PORT = 3000;

app.use(express.static('public'));

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/index', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/home', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/pricing', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/products', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/services', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/docs', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.get('/sign-in', (req, res) =>{
    res.sendFile(__dirname + '/signIn.html');
});

app.listen(PORT, error =>{
    if(!error)
        console.log("Server is Successfully Running,and App is listening on port "+ PORT) ;
    else
        console.log("Error occurred, server can't start", error);
    }
);