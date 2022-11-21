const {
	conversationTypes,
	conversationQueries,
	conversationMutations,
	conversationResolvers,
} = require("./scheme/conversation");
const { messageTypes } = require("./scheme/message");
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
	} = require("./scheme/friendship"),
	{ dateScalar } = require("./scheme/customScalars/dateScalar");
//

const typeDefs = `
	scalar Date

	${userTypes}
	${postTypes}
	${postLikeTypes}
	${commentTypes}
	${friendshipTypes}
	${conversationTypes}
	${messageTypes}
`;

const resolvers = {
	Query: {
		...userQueries,
		...postQueries,
		...postLikeQueries,
		...commentQueries,
		...friendshipQueries,
		...conversationQueries,
	},
	Mutation: {
		...userMutations,
		...postMutations,
		...postLikeMutations,
		...commentMutations,
		...friendshipMutations,
		...conversationMutations,
	},
	User: {
		...userResolvers,
	},
	Post: {
		...postResolvers,
	},
	Conversation: {
		...conversationResolvers,
	},
	Date: dateScalar,
};

module.exports = { typeDefs, resolvers };
