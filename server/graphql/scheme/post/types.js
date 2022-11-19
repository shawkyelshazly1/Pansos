const postTypes = `
	type Post {
		id: ID!
		content: String!
		author: User
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
