// postlikes graphql types

const postLikeTypes = `
	type PostLike {
		id: ID!
		author: User!
		post: Post!
	}

	type Mutation {
		LikeOrUnlikePost(postId: ID!): PostLike!
	}
`;

module.exports = postLikeTypes;
