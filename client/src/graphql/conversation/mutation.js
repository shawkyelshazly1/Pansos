import { gql } from "@apollo/client";

const MARK_MESSAGES_READ = gql`
	mutation markMessagesRead($conversationId: ID!) {
		markMessagesRead(conversationId: $conversationId)
	}
`;

export { MARK_MESSAGES_READ };
