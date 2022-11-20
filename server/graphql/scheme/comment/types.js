// comment graphql types

const commentTypes = `
	type Comment {
		id: ID!
		content: String!
		author: User!
		createdAt: Date!
		
	}

	type Query {
		loadPostComments(postId: ID!): [Comment]!
		loadSingleComment(commentId: ID!): Comment!
	}

	type Mutation {
		addComment(postId: ID!, content: String!): Comment!
		deleteComment(commentId: ID!): Comment!
	}
`;

module.exports = commentTypes;
