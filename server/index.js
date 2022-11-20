const express = require("express"),
	cors = require("cors"),
	morgan = require("morgan"),
	consola = require("consola"),
	{ ApolloServer } = require("@apollo/server"),
	{ expressMiddleware } = require("@apollo/server/express4"),
	{ initiDBConnection } = require("./database"),
	{ typeDefs, resolvers } = require("./graphql");

// set env variables config
require("dotenv").config();

// self invonking async function to start both express and apollo graphql servers
(async () => {
	// express app instance
	const app = express();

	// setting app dependancies
	app.use(cors());
	app.use(express.json());
	// app.use(morgan("combined"));

	// starting DB connection
	initiDBConnection();

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
	app.listen(process.env.PORT || 5000, () => {
		consola.success(`🚀 Server started on port: ${process.env.PORT || 5000}`);
	});
})();
