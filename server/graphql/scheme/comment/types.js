// comment graphql types

const commentTypes = `
	type Comment {
		id: ID!
		content: String!
		author: User!
		createdAt: Date!
		post:PostItem!
		
	}



	type Query {
		loadPostComments(postId: ID!): [Comment]!
		loadSingleComment(commentId: ID!): Comment!
	}

	type Mutation {
		addComment(postId: ID!, content: String!, postType:String!): Comment!
		deleteComment(commentId: ID!): Comment!
	}
`;

module.exports = commentTypes;
