require('dotenv').config({ path: 'config.env' });
const cors = require('cors');
const express = require('express');
const dbConnection = require('./config/database');
const noteRouter = require('./routes/NoteRoute');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

dbConnection();


app.use('/api/note', noteRouter)

app.get('*', (request, response) => {
    response.sendStatus("404")
})

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});