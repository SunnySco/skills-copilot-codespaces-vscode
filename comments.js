// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Comment = require('./models/comment');

// Connect to the database
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

// Parse JSON
app.use(bodyParser.json());

// Get all comments
app.get('/comments', async (req, res) => {
  const comments = await Comment.find();
  res.json(comments);
});

// Create a new comment
app.post('/comments', async (req, res) => {
  const comment = new Comment(req.body);
  await comment.save();
  res.json(comment);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running');
});git add comments.js

