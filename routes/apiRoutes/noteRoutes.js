const router = require('express').Router();
const {createNote, deleteNote} = require('../../lib/notes');
const fs =require('fs');
const path = require('path');
let {notes} = require('../../db/db.json');


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
        console.log(note);
    }
});

// delete note route
// router.delete('/notes/:id', (req, res)=>{
//     const { id }= req.params;
//     if(!id){
//         res.status(404).end();
//         console.log('error');
//     } 
//     else{
//         const updated=deleteNote(id, notes);
//         console.log(updated);
//         // res.redirect('/notes')
//         res.json(updated);
//         //console.log(deletedNote);
        
//     }
// });

router.delete('/notes/:id', (req, res)=>{
  deleteNote(req.params.id);
  const data = fs.readFileSync(path.join(__dirname, '../../db/db.json'));
    
   // const {notes} = JSON.parse(data);
    console.log(JSON.parse(data).notes);
    res.json(data);
})
  
  


module.exports= router;


  // "devStart": "nodemon server.js"
  //"repository": {
  //   "type": "git",
  //   "url": "git+https://github.com/khaoulaja/express-note-taker.git"
  // },
  // "keywords": [],
  // "bugs": {
  //   "url": "https://github.com/khaoulaja/express-note-taker/issues"
  // },
  // "homepage": "https://github.com/khaoulaja/express-note-taker#readme",
  // "devDependencies": {
  //   "nodemon": "^2.0.15"
  // }