const PORT = process.env.PORT || 3001;
const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const {notes} = require('./db/db.json');

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

function createNote(body, notesArr){
    body.id = Date.now().toString();
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({notes : notesArr}, null, 2)
    );
    return note;

}


//api routes
app.get('/api/notes', (req, res)=>{
    res.json(notes)
});

app.post('/api/notes',(req, res)=>{
    if(!req.body){
        console.log('error');
    }
    else{
        const note = createNote(req.body, notes);
        res.json(note);
        console.log(note);
    }
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