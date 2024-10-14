import "dotenv/config";
const MY_NAME = process.env.MY_NAME;
const MY_CITY = process.env.MY_CITY;
const MY_LANGUAGE = process.env.MY_LANGUAGE;
console.log(`I am ${process.env.MY_NAME}, wilder in${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`);
