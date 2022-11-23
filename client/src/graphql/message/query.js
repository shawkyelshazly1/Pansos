import { gql } from "@apollo/client";

const LOAD_CONVERSATION_MESSAGES = gql`
	query loadConversationMessages($conversationId: ID!) {
		loadConversationMessages(conversationId: $conversationId) {
			id
			content
			createdAt
			author {
				id
				firstName
				lastName
				profileImage{
				url
				type
			}
			}
		}
	}
`;

export { LOAD_CONVERSATION_MESSAGES };
