const mediaTypes = `
	type Media {
		id: ID!
		url: String!
		type: String!
		user: User
		post: PostItem
	}


	type Query{
		getUserPhotos(userId:ID!):[Media]!
	}
`;

module.exports = mediaTypes;
