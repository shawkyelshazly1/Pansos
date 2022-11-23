const mediaTypes = `
	type Media {
		id: ID!
		url: String!
		type: String!
		user: User
		post: Post
	}
`;

module.exports = mediaTypes;
