const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const path = require('path');
const {notes} = require('./db/db.json')

app.use(express.static('public'));

//api routes
app.get('/api/notes', (req, res)=>{
    res.json(notes)
});

//html routes
app.get("/", (req , res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, './public/notes.html'))
});

app.get("*", (req , res)=>{
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT , ()=>{
    console.log('API server now on port 3001!');
});