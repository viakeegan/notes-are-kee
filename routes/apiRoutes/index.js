const router = require('express').Router();
const {
    createNewNote, 
    updateDb,
} = require("../../lib/notes");
const { notes } = require('../../db/notes');
const { v4: uuidv4 } = require('uuid');

// show all notes in json data
router.get("/notes", (req, res) => {
    let results = notes;
    res.json(results);
  });
