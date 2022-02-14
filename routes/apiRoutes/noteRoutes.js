const router = require('express').Router();
const {createNote, deleteNote} = require('../../lib/notes');
const fs =require('fs');
const path = require('path');
let notes = require('../../db/db.json');


router.get('/notes', (req, res)=>{
    res.json(notes)
});

//add note route
router.post('/notes',(req, res)=>{
    if(!req.body){
        console.log('error');
    }
    else{
        const note = createNote(req.body, notes);
        res.json(note);
        //console.log(note);
    }
});

// delete note route
router.delete('/notes/:id', (req, res)=>{

   notes = deleteNote(req.params.id, notes)
    // console.log(notes);
    res.json(notes);
})
  
  


module.exports= router;