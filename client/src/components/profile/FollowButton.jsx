import React from "react";
import FollowedButton from "./FollowButtonVariants/FollowedButton";
import NotFollowedButton from "./FollowButtonVariants/NotFollowedButton";
import PendingFollowRequestButton from "./FollowButtonVariants/PendingFollowRequestButton";

export default function FollowButton({ loadedUser }) {
	return loadedUser.followStatus === "notFollowed" ? (
		// Follow Button
		<NotFollowedButton userId={loadedUser.id} />
	) : loadedUser.followStatus === "pending" ? (
		// Pending Button
		<PendingFollowRequestButton userId={loadedUser.id} />
	) : loadedUser.followStatus === "approved" ? (
		//Unfollow Button
		<FollowedButton userId={loadedUser.id} />
	) : (
		<></>
	);
}
