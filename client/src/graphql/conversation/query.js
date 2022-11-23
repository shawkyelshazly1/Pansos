import { gql } from "@apollo/client";

const LOAD_USER_CONVERSATIONS = gql`
	query loadUserConversations {
		loadUserConversations {
			id
			lastMessage {
				id
				content
				author {
					id
					firstName
				}
				createdAt
			}
			users {
				id
				firstName
				lastName
				profileImage{
				url
				type
			}
			}
			unreadMessagesCount
		}
	}
`;

const LOAD_SINGLE_CONVERSATION = gql`
	query loadSingleConversation($userId: ID!) {
		loadSingleConversation(userId: $userId) {
			id
			users {
				id
				firstName
				lastName
				profileImage{
				url
				type
			}
			}
			unreadMessagesCount
		}
	}
`;

export { LOAD_USER_CONVERSATIONS, LOAD_SINGLE_CONVERSATION };
