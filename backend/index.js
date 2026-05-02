const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];
let id = 1;

app.get('/tasks', (req, res) => res.json(tasks));

app.post('/tasks', (req, res) => {
    const task = { id: id++, title: req.body.title };
    tasks.push(task);
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id != req.params.id);
    res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Backend running on 5000"));
