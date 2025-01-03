const express = require("express"),
	cors = require("cors"),
	morgan = require("morgan"),
	consola = require("consola"),
	{ ApolloServer } = require("@apollo/server"),
	{ expressMiddleware } = require("@apollo/server/express4"),
	{ initiDBConnection } = require("./database"),
	{ typeDefs, resolvers } = require("./graphql"),
	{ initSocketIO } = require("./socketIO"),
	redis = require("ioredis");

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
				process.env.WEBSITE_URL,
			],
		})
	);
	app.use(express.json());
	// app.use(morgan("combined"));

	// starting DB connection
	await initiDBConnection();

	// setup redis client

	const redisClient =
		process.env.NODE_ENV === "production"
			? redis.createClient({
					url: process.env.REDIS_URL,
			  })
			: redis.createClient({
					password: process.env.REDIS_PASSWORD,
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
	initSocketIO(httpServer, redisClient);
})();
