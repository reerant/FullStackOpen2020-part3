const mongoose = require("mongoose");

//check valid lengths for arguments.
if (process.argv.length < 3) {
  console.log(`Please give password as an argument.`);
  process.exit(1);
}
if (process.argv.length > 5) {
  console.log(
    `Too many arguments. Only password, name and number can be given as arguments.`
  );
  process.exit(1);
}

const url = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});
const Person = mongoose.model("Person", personSchema);

//add new person to the phonebook
if (name && number) {
  const person = new Person({
    name: name,
    number: number,
  });
  person.save().then((response) => {
    console.log(`Added ${name} number ${number} to the Phonebook.`);
    mongoose.connection.close();
  });
  //print out every person in the phonebook
} else if (!name && !number) {
  console.log(`The Phonebook:`);
  Person.find({}).then((result) => {
    result.forEach((person) => {
      console.log(person.name, person.number);
    });
    mongoose.connection.close();
  });
} else {
  console.log(`Please give a number as an argument.`);
  process.exit(1);
}
