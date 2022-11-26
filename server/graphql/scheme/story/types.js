const storyTypes = `
	type Story {
		id: ID!
		user: User!
		media: Media!
		storyViewersCount: Int
		storyViewers: [StoryView]
		createdAt: Date!
		isViewed:Boolean
	}

	type Query {
		loadUserStories(userId:ID!): [Story]!
		loadUserNewsfeedStories: [Story]!
	}

	type Mutation {
		addNewStory(media: String!): Story!
		deleteStory(storyId: ID!): Story!
	}
`;

module.exports = storyTypes;
