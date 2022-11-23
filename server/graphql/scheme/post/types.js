const postTypes = `
	type Post {
		id: ID!
		content: String!
		author: User
		commentsCount: Int!
		comments: [Comment]!
		likesCount: Int!
		isLiked: Boolean!
		createdAt: Date!
		media:[Media]
	}


	type Query {
		getPostById(postId: ID!): Post!
		getUserPosts(userId: ID!): [PostItem]!
		getUserNewsfeed: [PostItem]!
	}

	type Mutation {
		addPost(content: String!,media:[String]): Post!
		deletePost(postId: ID!): Post!
	}
`;

module.exports = postTypes;
