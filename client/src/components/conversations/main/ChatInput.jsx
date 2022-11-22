import React, { useContext, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { IoMdSend } from "react-icons/io";
import { ChatAppContext } from "../../../contexts/ChatContext";
import { sendMessage } from "../../../socketIo/events";

export default function ChatInput({ recipient, loadConversation, newUser }) {
	// form state
	const [content, setContent] = useState("");
	const { IOsocket } = useContext(ChatAppContext);

	// handle input Change
	const handleInputChange = (e) => {
		setContent(e.target.value);
	};

	// handle Form Submissions
	const handleFormSubmission = (e) => {
		e.preventDefault();
		if (content.trim() !== "") {
			let messageData = {
				content: content.trim(),
				recipient: recipient.id,
			};

			sendMessage(IOsocket, messageData);
			if (newUser) {
				loadConversation();
			}
			setContent("");
		}
	};

	return (
		<form
			onSubmit={handleFormSubmission}
			className="flex flex-row gap-2 w-full items-center"
		>
			<input
				type="text"
				name="content"
				className="focus:outline-none rounded-full py-3 px-4 bg-bgColor w-full"
				placeholder="Aa"
				onChange={handleInputChange}
				value={content}
			/>
			{content.trim() === "" ? (
				<AiFillLike
					size={35}
					className="text-mainColor cursor-pointer"
					onClick={(e) => {
						setContent("👍");
						handleFormSubmission(e);
					}}
				/>
			) : (
				<IoMdSend
					size={35}
					className="text-mainColor cursor-pointer"
					onClick={handleFormSubmission}
				/>
			)}
		</form>
	);
}
