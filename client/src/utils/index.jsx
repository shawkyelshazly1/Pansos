import toast from "react-hot-toast";
import api from "./api";
import S from "underscore.string";
import { useLazyQuery } from "@apollo/client";
import { LOAD_SINGLE_CONVERSATION } from "../graphql/conversation/query";

const toBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () =>
			resolve(
				reader.result
					.toString()
					.substr(reader.result.toString().indexOf(",") + 1)
			);
		reader.onerror = (error) => reject(error);
	});
};

export const getUploadaedMediaUrls = async (mediaFiles) => {
	return Promise.all(mediaFiles.map(uploadMedia));
};

// upload media
const uploadMedia = async (file) => {
	let base64File = await toBase64(file.file);
	let body = new FormData();
	body.set("key", "b73739646c48f600cda9ad71aaeb17dd");
	body.append("image", base64File);
	return api.post(``, body).then((res) => {
		return res.data.data.display_url;
	});
};

export const adjustMessageObjectIdFields = (messageData) => {
	// correct the message id field
	let { _id, ...newMessage } = messageData;
	newMessage.id = _id;
	// correct the message author id field
	let { _id: authorId, ...authorData } = newMessage.author;
	newMessage.author = { ...authorData, id: authorId };
	// correct the message conversation id field
	let { _id: conversationId, ...conversationData } = newMessage.conversation;
	newMessage.conversation = { ...conversationData, id: conversationId };

	return newMessage;
};

export const showMessageNotification = (messageData) => {
	
	toast.custom(
		(t) => (
			<div
				className={`${
					t.visible ? "animate-enter" : "animate-leave"
				} max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
			>
				<div
					className="flex-1 w-0 p-4 cursor-pointer"
					onClick={() => {
						window.location = `/message/${messageData.author._id}`;
						
					}}
				>
					<div className="flex items-start">
						<div className="flex-shrink-0 pt-0.5">
							<img
								className="h-10 w-10 rounded-full"
								src={messageData.author.profileImage}
							/>
						</div>
						<div className="ml-3 flex-1">
							<p className="text-sm font-medium text-gray-900">
								{S(
									messageData.author.firstName +
										" " +
										messageData.author.lastName
								)
									.titleize()
									.value()}
							</p>
							<p className="mt-1 text-sm text-gray-500">
								{S(messageData.content).truncate(30).value()}
							</p>
						</div>
					</div>
				</div>
				<div className="flex border-l border-gray-200">
					<button
						onClick={() => toast.dismiss(t.id)}
						className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
					>
						Close
					</button>
				</div>
			</div>
		),
		{ position: "bottom-right", duration: "200" }
	);
};
