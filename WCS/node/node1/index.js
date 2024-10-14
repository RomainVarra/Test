const name = "romain";
const age = 32;
const passions = ['Tennis','Cinéma','La bonne bouffe'];

console.log(name,age,passions);

const userInformation = require('./userInformation');
console.log(`Hi, my name is ${userInformation.name} and I'm ${userInformation.age} years old`);
userInformation.displayPassions();