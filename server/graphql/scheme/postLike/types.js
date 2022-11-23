// postlikes graphql types

const postLikeTypes = `
	type PostLike {
		id: ID!
		author: User!
		post: PostItem!
	}


	type Mutation {
		LikeOrUnlikePost(postId: ID!,postType:String!): PostLike!
	}
`;

module.exports = postLikeTypes;
