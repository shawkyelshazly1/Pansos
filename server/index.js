const express = require("express"),
	cors = require("cors"),
	morgan = require("morgan"),
	consola = require("consola"),
	{ ApolloServer } = require("@apollo/server"),
	{ expressMiddleware } = require("@apollo/server/express4"),
	{ initiDBConnection } = require("./database"),
	{ typeDefs, resolvers } = require("./graphql");
const { initSocketIO } = require("./socketIO"),
	Redis = require("ioredis");

// set env variables config
require("dotenv").config();

// self invonking async function to start both express and apollo graphql servers
(async () => {
	// express app instance
	const app = express();

	// setting app dependancies
	app.use(
		cors({
			origin: [
				"http://localhost:3000",
				"http://127.0.0.1:3000",
				"https://pansos.onrender.com",
			],
		})
	);
	app.use(express.json());
	// app.use(morgan("combined"));

	// starting DB connection
	initiDBConnection();

	// setup redis client
	const Redis = require("ioredis");

	const redis = new Redis({
		host: "redis-16721.c250.eu-central-1-1.ec2.cloud.redislabs.com",
		port: 16721,
		password: "phEw2I6joe4CPxwUGQkscpSxS4pYDfBA",
	});

	// create apollo server
	const server = new ApolloServer({
		typeDefs,
		resolvers,
	});

	// start apollo server
	await server.start();

	// setting the route to query graphql
	app.use(
		"/graphql",
		expressMiddleware(server, {
			context: async ({ req, res }) => ({ req, res }),
		})
	);

	// starting express server
	const httpServer = app.listen(process.env.PORT || 5000, () => {
		consola.success(`🚀 Server started on port: ${process.env.PORT || 5000}`);
	});

	// init socket io connection
	initSocketIO(httpServer, redis);
})();
