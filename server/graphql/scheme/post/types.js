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
		group:Group
	}


	type Query {
		getPostById(postId: ID!): Post!
		getUserPosts(userId: ID!): [PostItem]!
		getUserNewsfeed: [PostItem]!
		loadGroupPosts(groupId:ID!): [PostItem]!
	}

	type Mutation {
		addPost(content: String!,media:[String],group:ID): Post!
		deletePost(postId: ID!): Post!
	}
`;

module.exports = postTypes;
