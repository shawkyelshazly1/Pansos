import React from "react";
import MessageCardLeft from "./MessageCardLeft";
import MessageCardRight from "./MessageCardRight";

export default function MessagesContainer() {
	return (
		<div className="flex flex-1 flex-col-reverse gap-6 overflow-y-scroll  max-h-[calc(100vh-310px)]">
			<MessageCardLeft />
			<MessageCardLeft />
			<MessageCardRight />
			<MessageCardRight />
			<MessageCardLeft />
			<MessageCardRight />
			<MessageCardLeft />
			<MessageCardRight />
			<MessageCardRight />
		</div>
	);
}
