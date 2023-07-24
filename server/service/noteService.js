const asyncHandler = require('express-async-handler');
const NoteModel = require('../models/NoteModel');


exports.createNote = asyncHandler(async (request, response) => {
    const { title, description } = request.body;

    const note = await NoteModel.create({ title, description });
    response.status(201).json(note);
});


exports.getNotes = asyncHandler(async (request, response) => {

    const note = await NoteModel.find({});
    response.status(200).json(note);
});


exports.getNote = asyncHandler(async (request, response) => {
    const { id } = request.params;

    const note = await NoteModel.findById(id);
    response.status(200).json(note);
});


exports.updateNote = asyncHandler(async (request, response) => {
    const { id } = request.params;
    const { title, description } = request.body;

    const note = await NoteModel.findByIdAndUpdate({ _id: id }, { title, description }, { new: true });
    response.status(200).json(note);
});


exports.deleteNote = asyncHandler(async (request, response) => {
    const { id } = request.params;

    const note = await NoteModel.findByIdAndDelete({ _id: id });
    response.status(200).json(note);
});