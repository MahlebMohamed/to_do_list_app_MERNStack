require('dotenv').config({ path: 'config.env' });
const cors = require('cors');
const express = require('express');
const dbConnection = require('./config/database');
const noteRouter = require('./routes/NoteRoute');

const app = express();
const PORT = process.env.PORT || 8000;


dbConnection();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/api/notes', noteRouter)

app.get('*', (request, response) => {
    response.sendStatus("404")
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});