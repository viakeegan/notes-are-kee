const fs = require('fs');
const path = require('path');

function updateDb(id, notesArray) {
    const deletedNote = id;
    for (let i = 0; i < notesArray.length; i++) {
      if (deletedNote === notesArray[i].id) {
        notesArray.splice(i, 1);
        fs.writeFileSync(
          path.join(__dirname, "../db/db.json"),
          JSON.stringify({notes: notesArray}, null, 2), err => {
            if (err) {
              throw err;
            }
          });
      }
    }
  }

  function createNewNote(body, notesArray) {
    const note = body
    notesArray.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify({notes: notesArray}, null, 2)
    );
    return note;
  };

  module.exports = {
    updateDb,
    createNewNote,
  }; 