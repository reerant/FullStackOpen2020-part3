const express = require("express");
const morgan = require("morgan");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());
//shows data from request body
morgan.token("data", function (req, res) {
  return JSON.stringify(req.body);
});
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'));

let persons = [
  {
    name: "Arto Hellas",
    number: "040-123456",
    id: 1,
  },
  {
    name: "Ada Lovelace",
    number: "39-44-5323523",
    id: 2,
  },
  {
    name: "Dan Abramov",
    number: "12-43-234345",
    id: 3,
  },
  {
    name: "Mary Poppendieck",
    number: "39-23-6423122",
    id: 4,
  },
];

//*****ROUTES******

//info
app.get("/info", (req, res) => {
  res.send(
    `<div>
      <p>Phonebook has info for ${persons.length} persons.</p>
      <p>${new Date()}</p>
    </div>`
  );
});

//get all persons
app.get("/api/persons", (req, res) => {
  res.json(persons);
});

//get a person
app.get("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find((person) => person.id === id);
  if (person) {
    res.json(person);
  } else {
    res.status(404).end();
  }
});

//delete person
app.delete("/api/persons/:id", (req, res) => {
  const id = Number(req.params.id);
  persons = persons.filter((person) => person.id !== id);
  res.status(204).end();
});

const generateNewId = () => {
  const id = Math.floor(Math.random() * 1000);
  return id;
};
//add new person
app.post("/api/persons", (req, res) => {
  const body = req.body;
  if (!body.name) {
    return res.status(400).json({
      error: "Name is missing!",
    });
  } else if (!body.number) {
    return res.status(400).json({
      error: "Number is missing!",
    });
  } else if (
    persons.some(
      (person) => person.name.toLowerCase() === body.name.toLowerCase()
    )
  ) {
    return res.status(400).json({
      error: `Name must be unique. ${body.name} already exists in the phonebook!`,
    });
  }
  const person = {
    name: body.name,
    number: body.number,
    id: generateNewId(),
  };
  persons = persons.concat(person);
  res.json(person);
});

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
