const { default: mongoose } = require("mongoose");


const noteSechma = mongoose.Schema(
    {
        title: {
            type: String,
            unique: [true, 'title must to unique'],
            required: [true, 'title required'],
            minlength: [3, 'title short'],
            maxlength: [32, 'title long'],
        },
        description: {
            type: String,
        }
    },
    {
        timestamps: true
    });


const NoteModel = mongoose.model('Note', noteSechma);
module.exports = NoteModel;
