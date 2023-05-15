const router = require('express').Router();
const { notes } = require('../../db/db');

const { createNewNote } = require('../../lib/notes');

// Get all notes from db.json
router.get('/notes', (req, res) => {
  let results = notes;
  res.json(results);
  
});

// POST / create a note
router.post('/notes', (req, res) => {
  req.body.id = notes.length.toString();
  let note = createNewNote(req.body, notes);
  res.json(note);
});


module.exports = router;