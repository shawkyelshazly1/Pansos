const express = require("express"),
	cors = require("cors"),
	morgan = require("morgan"),
	consola = require("consola");
const { initiDBConnection } = require("./databse");

// set env variables config
require("dotenv").config();

// express app instance
const app = express();

// setting app dependancies
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

// starting DB connection
initiDBConnection();

// starting server
app.listen(process.env.PORT || 5000, () => {
	consola.success(`🚀 Server started on port: ${process.env.PORT || 5000}`);
});
