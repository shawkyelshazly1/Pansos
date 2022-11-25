const consola = require("consola"),
	{
		BadInputGraphQLError,
		NotAuthorizedGraphQLError,
	} = require("../utils/error.js"),
	{ GroupMemberRepository } = require("../database");
const { default: mongoose } = require("mongoose");
const GroupService = require("./groupService.js");

// class to interact with the group member repository on DB
class GroupMemberService {
	constructor() {
		this.repository = new GroupMemberRepository();
		this.groupService = new GroupService();
	}

	// load roup members
	async loadGroupMembers(groupId) {
		try {
			let groupMembers = await this.repository.GetGroupMembers(groupId);

			return groupMembers;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// join group
	async joinGroup(currentUserId, groupId, groupType) {
		try {
			// validate if data is full
			if (!groupId || !groupType)
				return await BadInputGraphQLError("Group data is required!");

			let newMember = await this.repository.JoinGroup({
				group: mongoose.Types.ObjectId(groupId),
				user: mongoose.Types.ObjectId(currentUserId),
				status: groupType === "private" ? "pending" : "accepted",
			});

			return newMember;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// leave group
	async leaveGroup(currentUserId, groupId) {
		try {
			// validate if data is full
			if (!groupId) return await BadInputGraphQLError("Group Id is required!");

			let leftMember = await this.repository.DeclineGroupMember(
				currentUserId,
				groupId
			);

			return leftMember;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// accept join group request
	async acceptJoinRequest(currentUserId, userId, groupId) {
		try {
			let groupAdmins = await this.groupService.loadGroupAdministrators(
				groupId
			);

			if (!groupAdmins.includes(mongoose.Types.ObjectId(currentUserId))) {
				return await NotAuthorizedGraphQLError("Not Authorized!");
			}

			let acceptedGroupMember = await this.repository.AcceptJoinRequest(
				userId,
				groupId
			);

			return acceptedGroupMember;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// decline join group request
	async declineJoinRequest(currentUserId, userId, groupId) {
		try {
			let groupAdmins = await this.groupService.loadGroupAdministrators(
				groupId
			);

			if (!groupAdmins.includes(mongoose.Types.ObjectId(currentUserId))) {
				return await NotAuthorizedGraphQLError("Not Authorized!");
			}

			let deletedGroupMember = await this.repository.DeclineGroupMember(
				userId,
				groupId
			);

			return deletedGroupMember;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load pending join requests
	async loadPendingJoinRequests(currentUserId, groupId) {
		try {
			let groupAdmins = await this.groupService.loadGroupAdministrators(
				groupId
			);

			if (!groupAdmins.includes(mongoose.Types.ObjectId(currentUserId))) {
				return await NotAuthorizedGraphQLError("Not Authorized!");
			}

			let pendingRequests = await this.repository.GetPendingJoinRequests(
				groupId
			);

			return pendingRequests;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load user groups
	async loadUserGroups(userId) {
		try {
			let userGroups = await this.repository.GetUserGroups(userId);

			return userGroups;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = GroupMemberService;
