const mediaTypes = `
	type Media {
		id: ID!
		url: String!
		type: String!
		user: User
		post: Post
	}

	type Query{
		getUserPhotos(userId:ID!):[Media]!
	}
`;

module.exports = mediaTypes;
