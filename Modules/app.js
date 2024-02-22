// CommonJs, every file is module (by default)
// Modules - Encapsulated Code (only share what we want - minimum)

const names = require("./names");
const sayHi = require("./utils").default;
const { firstName, lastName } = names;
console.log(names);

sayHi("Susan");
sayHi(`${names.firstName} ${names.lastName}`);
sayHi(`${firstName} ${lastName}`);
