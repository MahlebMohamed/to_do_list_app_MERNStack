const express = require('express');
const { createNote, getNotes, getNote, updateNote, deleteNote } = require('../service/noteService');
const noteRouter = express.Router();


noteRouter.route('/').post(createNote).get(getNotes);
noteRouter.route('/:id').get(getNote).put(updateNote).delete(deleteNote);

module.exports = noteRouter;