const { NotAuthorizedGraphQLError } = require("../../utils/error.js"),
	consola = require("consola"),
	jwt = require("jsonwebtoken");

const isAuthenticated = async (ctx) => {
	const authorization = ctx.req.headers["authorization"];
	// throw graphql error if not found in headers
	if (!authorization) return await NotAuthorizedGraphQLError();

	try {
		// extract access token
		const accessToken = authorization.split(" ")[1];

		// validate access token against secret "will throw error if invalid"
		const payload = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

		// add user from payload to req
		ctx.req.payload = payload;
	} catch (error) {
		consola.error(error);
		return await NotAuthorizedGraphQLError();
	}
};

module.exports = { isAuthenticated };
