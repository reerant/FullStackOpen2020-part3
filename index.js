const express = require("express");
const app = express();
require("dotenv").config();
const Person = require("./models/person");
const morgan = require("morgan");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.static("build"));

//shows data from request body
morgan.token("data", function (req, res) {
  return JSON.stringify(req.body);
});
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :data")
);

//*****ROUTES******

//INFO
app.get("/info", (req, res, next) => {
  Person.find({})
    .then((persons) => {
      res.send(
        `<div>
      <p>Phonebook has info for ${persons.length} persons.</p>
      <p>${new Date()}</p>
    </div>`
      );
    })
    .catch((error) => next(error));
});

//GET ALL
app.get("/api/persons", (req, res, next) => {
  Person.find({})
    .then((persons) => {
      res.json(persons.map((person) => person.toJSON()));
    })
    .catch((error) => next(error));
});

//GET ONE
app.get("/api/persons/:id", (req, res, next) => {
  Person.findById(req.params.id)
    .then((person) => {
      if (person) {
        res.json(person.toJSON());
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

//UPDATE
app.put("/api/persons/:id", (req, res, next) => {
  const body = req.body;
  const person = {
    name: body.name,
    number: body.number,
  };
  Person.findByIdAndUpdate(req.params.id, person, { new: true })
    .then((updatedPerson) => updatedPerson.toJSON())
    .then((UpdatedAndFormattedPerson) => {
      res.json(UpdatedAndFormattedPerson);
    })

    .catch((error) => next(error));
});

//DELETE
app.delete("/api/persons/:id", (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then((result) => {
      res.status(204).end();
    })
    .catch((error) => next(error));
});

//ADD NEW
app.post("/api/persons", (req, res, next) => {
  const body = req.body;
  const person = new Person({
    name: body.name,
    number: body.number,
  });
  person
    .save()
    .then((savedPerson) => savedPerson.toJSON())
    .then((savedAndFormattedPerson) => {
      res.json(savedAndFormattedPerson);
    })
    .catch((error) => next(error));
});

//*****ERROR HANDLING******

const unknownEndpoint = (req, res) => {
  res.status(404).send({ error: "Unable to retrieve data." });
};

app.use(unknownEndpoint);

const errorHandler = (error, req, res, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return res.status(400).send({ error: "Malformed id." });
  } else if (error.name === "ValidationError") {
    return res.status(400).json({ error: error.message });
  }
  next(error);
};

app.use(errorHandler);

//*****PORT******

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
