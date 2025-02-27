// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const comments = require('./comments.json');
const fs = require('fs');
const PORT = 3000;

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET all comments
app.get('/api/comments', (req, res) => {
  res.json(comments);
});

// POST a new comment
app.post('/api/comments', (req, res) => {
  const newComment = {
    id: comments.length + 1,