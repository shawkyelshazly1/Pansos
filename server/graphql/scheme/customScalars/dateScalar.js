const { GraphQLScalarType, Kind } = require("graphql");

// Define custom Graphql scalar type for database

const dateScalar = new GraphQLScalarType({
	name: "Date",
	description: "Date custom scalar type",
	serialize(value) {
		// serialize the date value from Int to Json
		return value.getTime();
	},

	parseValue(value) {
		// conver the incoming Int to Date
		return new Date(value);
	},

	parseLiteral(ast) {
		if (ast.kind === Kind.INT) {
			// convert hard-coded AST string to interger and then to date
			return new Date(parseInt(ast.value, 10));
		}

		// invalid hard-coded value (not integer)
		return null;
	},
});

module.exports = { dateScalar };
