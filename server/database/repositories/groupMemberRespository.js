const consola = require("consola");
const mongoose = require("mongoose");
const { GroupMemberModal } = require("../models");

// class to interact with group member repository
class GroupMemberRepository {
	// load group members
	async GetGroupMembers(groupId) {
		try {
			const groupMembers = await GroupMemberModal.find({
				group: mongoose.Types.ObjectId(groupId),
				status: "accepted",
			});

			return groupMembers;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// join group
	async JoinGroup(groupMemberData) {
		try {
			let newGroupMember = await GroupMemberModal(groupMemberData);
			newGroupMember = await newGroupMember.save();

			return newGroupMember;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// leave group
	async LeaveGroup(userId, groupId) {
		try {
			const removedMember = await GroupMemberModal.findOneAndDelete({
				user: mongoose.Types.ObjectId(userId),
				group: mongoose.Types.ObjectId(groupId),
			})
				.populate("user")
				.populate("group");

			return removedMember;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// is group member
	async IsGroupMember(userId, groupId) {
		try {
			const existingMember = await GroupMemberModal.findOne({
				user: mongoose.Types.ObjectId(userId),
				group: mongoose.Types.ObjectId(groupId),
				status: "accepted",
			});

			if (existingMember) return true;
			else return false;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// accept group join request
	async AcceptJoinRequest(userId, groupId) {
		try {
			let updatedGroupMember = await GroupMemberModal.findOneAndUpdate(
				{
					user: mongoose.Types.ObjectId(userId),
					group: mongoose.Types.ObjectId(groupId),
				},
				{ status: "accepted" },
				{ new: true }
			);

			return updatedGroupMember;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	//decline group member request 'delete it'
	async DeclineGroupMember(userId, groupId) {
		try {
			return await this.LeaveGroup(userId, groupId);
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// load pending join requests
	async GetPendingJoinRequests(groupId) {
		try {
			let pendingRequests = await GroupMemberModal.find({
				group: mongoose.Types.ObjectId(groupId),
				status: "pending",
			});

			return pendingRequests;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// load user groups
	async GetUserGroups(userId) {
		try {
			let userMemberships = await GroupMemberModal.find({
				user: mongoose.Types.ObjectId(userId),
				status: "accepted",
			});

			let userGroups = userMemberships.map((membership) => membership.group);

			return userGroups;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = GroupMemberRepository;
