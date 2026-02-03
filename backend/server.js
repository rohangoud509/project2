const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
let resumes = []; // temporary array to store resumes (for now)

app.post("/resume", (req, res) => {
  const resume = req.body;
  resume.id = resumes.length + 1; // simple ID
  resumes.push(resume);
  res.send({ message: "Resume saved successfully!", resume });
});

app.get("/resume/:id", (req, res) => {
  const resume = resumes.find(r => r.id === parseInt(req.params.id));
  if (resume) {
    res.send(resume);
  } else {
    res.status(404).send({ message: "Resume not found" });
  }
});


app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(5000, () => {
    console.log('Server running on http://localhost:5000');
});
