import React, { useState } from "react";
import ChatCard from "./ChatCard";

export default function ChatsContainer() {
	const [selectedConversation, setSelecetedConversation] = useState("");
	return (
		<div className="flex bg-white h-full lg:min-w-[20%] w-fit rounded-xl shadow-postCardShadow p-6">
			<div className="flex flex-col gap-4 w-full">
				<h1 className="text-[#848fac] font-medium hidden lg:block">
					CONVERSATIONS
				</h1>
				<hr className=" hidden lg:block" />
				<div className="flex flex-col gap-4 w-full overflow-y-scroll lg:max-h-[calc(100vh-225px)] max-h-[calc(100vh-170px)]">
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
					<ChatCard
						setSelecetedConversation={setSelecetedConversation}
						selectedConversation={selectedConversation}
					/>
				</div>
			</div>
		</div>
	);
}
