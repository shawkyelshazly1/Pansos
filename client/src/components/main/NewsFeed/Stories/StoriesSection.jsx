import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { LOAD_STORIES_NEWSFEED } from "../../../../graphql/story/query";
import AddStoryModal from "./AddStoryModal/AddStoryModal";
import StoryCircle from "./StoryCircle";
import _ from "lodash";
import UserStoryCircle from "./UserStoryCircle";
import StoryViewModal from "./StoryViewer/StoryViewModal";

export default function StoriesSection() {
	const [showModal, setShowModal] = useState(false);
	const [showStoryModal, setShowStoryModal] = useState(false);
	const [selectedStories, setSelectedStories] = useState([]);

	const { data, loading, refetch } = useQuery(LOAD_STORIES_NEWSFEED);

	// console.log(data?.loadUserNewsfeedStories);

	const groupStoriesByUser = (stories) => {
		let storiesGrouped = _.groupBy(stories, (story) => story.user.id);
		let UserIds = Object.keys(storiesGrouped);
		let storiesOutput = [];

		UserIds.map((id) =>
			storiesOutput.push({ userId: id, stories: storiesGrouped[id] })
		);

		return storiesOutput;
	};

	useEffect(() => {
		const scrollableContainer = document.querySelector(".stories-section");
		scrollableContainer.addEventListener("wheel", (e) => {
			e.preventDefault();
			console.log(e);
			scrollableContainer.scrollLeft += e.deltaY;
		});
	}, []);

	// use effect to refetch stories
	useEffect(() => {
		refetch();
	}, []);

	return (
		<div className="stories-section flex flex-row bg-white rounded-2xl py-6 px-5 gap-6 overflow-y-scroll w-full shrink-0">
			<UserStoryCircle toggleModal={setShowModal} />
			{data?.loadUserNewsfeedStories
				? groupStoriesByUser(data?.loadUserNewsfeedStories).map((user) => (
						<StoryCircle
							key={user.userId}
							stories={user.stories}
							toggleModal={setShowStoryModal}
							setSelectedStories={setSelectedStories}
						/>
				  ))
				: ""}

			<AddStoryModal toggleModal={setShowModal} isOpened={showModal} />
			<StoryViewModal
				stories={groupStoriesByUser(data?.loadUserNewsfeedStories)}
				toggleModal={setShowStoryModal}
				isOpened={showStoryModal}
				selectedStories={selectedStories}
				setSelectedStories={setSelectedStories}
			/>
		</div>
	);
}
