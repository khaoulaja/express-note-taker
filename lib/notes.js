const fs =require('fs');
const path = require('path');

//add new note to notes array and write the result to json file
function createNote(body, notesArr){
    body.id = Date.now().toString();
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    );
    return note;

}

//delete note from notes array and the write the new array to json file
function deleteNote (id, notesArr){

    // remove the note from notes array
        notesArr = notesArr.filter((note)=> note.id !== id);
        //write the new array to json file
        fs.writeFileSync(path.join(__dirname, '../db/db.json'),
         JSON.stringify(notesArr,null, 2));

     return notesArr;
}

module.exports = {createNote, deleteNote};