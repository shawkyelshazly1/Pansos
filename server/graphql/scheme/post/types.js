const postTypes = `
	type Post {
		id: ID!
		content: String!
		author: User
		commentsCount: Int!
		comments: [Comment]!
		likesCount: Int!
		isLiked: Boolean!
	}

	type Query {
		getPostById(postId: ID!): Post!
		getUserPosts(userId: ID!): [Post]!
	}

	type Mutation {
		addPost(content: String!): Post!
		deletePost(postId: ID!): Post!
	}
`;

module.exports = postTypes;
