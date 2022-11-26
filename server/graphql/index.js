const {
	conversationTypes,
	conversationQueries,
	conversationMutations,
	conversationResolvers,
} = require("./scheme/conversation");
const {
	groupTypes,
	groupQueries,
	groupMutations,
	groupResolvers,
} = require("./scheme/group");
const {
	groupMemberTypes,
	groupMemberMutations,
} = require("./scheme/groupMember");
const { mediaTypes, mediaQueries } = require("./scheme/media");
const {
	messageTypes,
	messageResolvers,
	messageMutations,
} = require("./scheme/message");
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
const {
	sharedPostTypes,
	sharedPostQueries,
	sharedPostMutations,
	sharedPostResolvers,
} = require("./scheme/sharedPost");
const {
	storyTypes,
	storyQueries,
	storyMutations,
	storyResolvers,
} = require("./scheme/story");
const { storyViewTypes, storyViewMutations } = require("./scheme/storyView");
//

const typeDefs = `
	scalar Date
	union PostItem = Post | SharedPost

	${userTypes}
	${postTypes}
	${postLikeTypes}
	${commentTypes}
	${friendshipTypes}
	${conversationTypes}
	${messageTypes}
	${mediaTypes}
	${sharedPostTypes}
	${groupTypes}
	${groupMemberTypes}
	${storyTypes}
	${storyViewTypes}
`;

const resolvers = {
	Query: {
		...userQueries,
		...postQueries,
		...postLikeQueries,
		...commentQueries,
		...friendshipQueries,
		...conversationQueries,
		...mediaQueries,
		...sharedPostQueries,
		...groupQueries,
		...storyQueries,
	},
	Mutation: {
		...userMutations,
		...postMutations,
		...postLikeMutations,
		...commentMutations,
		...friendshipMutations,
		...conversationMutations,
		...messageMutations,
		...sharedPostMutations,
		...groupMutations,
		...groupMemberMutations,
		...storyMutations,
		...storyViewMutations,
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
	SharedPost: {
		...sharedPostResolvers,
	},
	Group: {
		...groupResolvers,
	},
	Story: {
		...storyResolvers,
	},
	PostItem: {
		__resolveType(obj) {
			if (obj.is_shared) return "SharedPost";
			return "Post";
		},
	},

	Date: dateScalar,
};

module.exports = { typeDefs, resolvers };
