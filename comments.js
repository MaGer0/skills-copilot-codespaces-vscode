// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const comments = require('./comments');

const app = express();
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

app.post('/comments', (req, res) => {
    const { author, text } = req.body;
    comments.addComment(author, text);
    res.json(comments.getComments());
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});