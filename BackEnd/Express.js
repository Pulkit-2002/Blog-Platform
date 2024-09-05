// index.js
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

const db = new sqlite3.Database(':memory:');

// Create a posts table
db.serialize(() => {
  db.run('CREATE TABLE posts (id INTEGER PRIMARY KEY, title TEXT, content TEXT)');
});

// Get all posts
app.get('/posts', (req, res) => {
  db.all('SELECT * FROM posts', [], (err, rows) => {
    if (err) {
      res.status(400).send(err.message);
      return;
    }
    res.json(rows);
  });
});

// Get a single post by ID
app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM posts WHERE id = ?', [id], (err, row) => {
    if (err) {
      res.status(400).send(err.message);
      return;
    }
    res.json(row);
  });
});

// Create a new post
app.post('/posts', (req, res) => {
  const { title, content } = req.body;
  db.run('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content], function (err) {
    if (err) {
      res.status(400).send(err.message);
      return;
    }
    res.json({ id: this.lastID });
  });
});

// Delete a post by ID
app.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM posts WHERE id = ?', [id], (err) => {
    if (err) {
      res.status(400).send(err.message);
      return;
    }
    res.status(204).send();
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
