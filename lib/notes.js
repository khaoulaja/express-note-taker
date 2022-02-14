const fs =require('fs');
const path = require('path');

//add new note to notes array and write the result to json file
function createNote(body, notesArr){
    body.id = Date.now().toString();
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({notes : notesArr}, null, 2)
    );
    return note;

}

//delete note from notes array and the write the new array to json file
function deleteNote (id){
    fs.readFile(path.join(__dirname, '../db/db.json'),(err, data)=>{
        if (err) {console.log(err);}
        
        var {notes} = JSON.parse(data);
       // console.log(notes);
        const updatedNotes = notes.filter((note)=> note.id !== id);
        //console.log(updatedNotes);
        fs.writeFile(path.join(__dirname, '../db/db.json'),
         JSON.stringify({notes : updatedNotes},null, 2), (err)=>{
             if(err) throw err;
           
         })
      
        }); 
   // console.log(notes);
     
}
//  const deleted = notesArr.find(note=> note.id ===id);
    //  const newArr = notesArr.filter(note => note.id !== id);
    //  fs.writeFileSync(
    //      path.join(__dirname, '../db/db.json'), 
    //      JSON.stringify({notes: newArr}, null ,2)
    //  );
    // return newArr;
// app.delete("/api/notes/:id", (req, res) => {
//     fs.readFile("./db/db.json", (err, data) => {
//       let notes = JSON.parse(data);
//       const updatedNotes = notes.filter((note) => note.id !== req.params.id);
//       console.log(updatedNotes);
//       fs.writeFile("./db/db.json", JSON.stringify(updatedNotes), (err) => {
//         res.json(notes);
//       });
//     });
//   });

module.exports = {createNote, deleteNote};