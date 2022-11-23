// shared post graphql schema types
const sharedPostTypes = `
	type SharedPost {
		id: ID!
		post: Post!
		author: User!
		content:String
		commentsCount: Int!
		comments: [Comment]!
		likesCount: Int!
		isLiked: Boolean!
		createdAt: Date!
		is_shared:Boolean!
	}

	type Query {
		getSharedPostById(sharedPostId: ID!): SharedPost!
	}

	type Mutation {
		addSharedPost(post: ID!, content: String): SharedPost!
		deleteSharedPost(sharedPostId: ID!): SharedPost!
	}
`;

module.exports = sharedPostTypes;
