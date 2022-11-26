const storyViewTypes = `
	type StoryView {
		id: ID!
		story: Story!
		user: User!
		createdAt: Date!
	}

	type Mutation {
		viewStory(storyId: ID!): StoryView!
	}
`;

module.exports = storyViewTypes;
