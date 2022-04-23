require("dotenv").config();

let PORT = process.env.PORT;
let MONGODB_URI = process.env.MONGODB_UFI;

module.exports = {
  PORT, MONGODB_URI
};
