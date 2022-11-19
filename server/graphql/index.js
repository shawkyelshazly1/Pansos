const {
		postQueries,
		postMutations,
		postTypes,
		postResolvers,
	} = require("./scheme/post"),
	{
		postLikeQueries,
		postLikeMutations,
		postLikeTypes,
	} = require("./scheme/postLike"),
	{
		userTypes,
		userQueries,
		userMutations,
		userResolvers,
	} = require("./scheme/user"),
	{
		commentTypes,
		commentQueries,
		commentMutations,
	} = require("./scheme/comment"),
	{
		friendshipTypes,
		friendshipQueries,
		friendshipMutations,
	} = require("./scheme/friendship");

const typeDefs = `
	${userTypes}
	${postTypes}
	${postLikeTypes}
	${commentTypes}
	${friendshipTypes}
`;

const resolvers = {
	Query: {
		...userQueries,
		...postQueries,
		...postLikeQueries,
		...commentQueries,
		...friendshipQueries,
	},
	Mutation: {
		...userMutations,
		...postMutations,
		...postLikeMutations,
		...commentMutations,
		...friendshipMutations,
	},
	User: {
		...userResolvers,
	},
	Post: {
		...postResolvers,
	},
};

module.exports = { typeDefs, resolvers };
