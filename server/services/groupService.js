const consola = require("consola"),
	{ BadInputGraphQLError } = require("../utils/error.js"),
	{ GroupRepository, GroupMemberRepository } = require("../database");
const MediaService = require("./mediaService");
const mongoose = require("mongoose");

// class to interact with the group repository on DB
class GroupService {
	constructor() {
		this.repository = new GroupRepository();
		this.mediaService = new MediaService();
		this.groupMemberRespository = new GroupMemberRepository();
	}

	// add new group
	async addNewGroup(currentUserId, groupData) {
		try {
			const { name, groupType } = groupData;

			// validate if data is full
			if (!name || !groupType)
				return await BadInputGraphQLError("Group data is required!");

			// check if group exists with same name
			const existingGroup = await this.repository.GetGroupByName(name);

			if (existingGroup)
				return await BadInputGraphQLError("Group Exists Already!");

			// ADD NEW Group
			const newGroup = await this.repository.CreateGroup({
				name,
				groupType,
				administrators: [currentUserId],
			});

			return newGroup;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load group admins
	async loadGroupAdministrators(groupId) {
		try {
			// check if group exists with same name
			const existingGroup = await this.repository.GetGroupById(groupId);

			if (existingGroup)
				return await BadInputGraphQLError("Group Exists Already!");

			return existingGroup.administrators;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// add or remove group administrator
	async AddOrRemoveGroupAdministrators(currentUserId, groupId, userId) {
		try {
			// check if group exists with same name
			const existingGroup = await this.repository.GetGroupById(groupId);

			// return error if not existing
			if (existingGroup)
				return await BadInputGraphQLError("Group Exists Already!");

			// check if current user is admin authorized to do the task or not
			if (
				!existingGroup.administrators.includes(
					mongoose.Types.ObjectId(currentUserId)
				)
			) {
				return await NotAuthorizedGraphQLError("Not Authorized!");
			}

			// check if user is group member or not
			if (!this.groupMemberRespository.IsGroupMember(userId, groupId))
				return await BadInputGraphQLError("User isn't a group member!");

			// add or remove if in administrators list
			if (
				!existingGroup.administrators.includes(mongoose.Types.ObjectId(userId))
			) {
				// add
				let updatedGroup = await this.repository.AddGroupadministrator(
					userId,
					groupId
				);

				return updatedGroup;
			} else {
				//remove
				let updatedGroup = await this.repository.RemoveGroupadministrator(
					userId,
					groupId
				);

				return updatedGroup;
			}
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// load single group
	async loadSingleGroup(groupId) {
		try {
			let existingGroup = await this.repository.GetGroupById(groupId);

			if (!existingGroup) return await BadInputGraphQLError("Group Not Found!");

			return existingGroup;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}

	// update group
	async UpdateGroup(currentUserId, groupId, groupData) {
		try {
			let existingGroup = await this.repository.GetGroupById(groupId);

			// check if group doesn't exist with this ID
			if (!existingGroup) return await BadInputGraphQLError("Group Not Found!");

			//if current user not group admin
			if (
				!existingGroup.administrators.includes(
					mongoose.Types.ObjectId(currentUserId)
				)
			) {
				return await NotAuthorizedGraphQLError("Not Authorized!");
			}

			let updatedGroup = await this.repository.UpdateGroupById(
				groupId,
				groupData
			);

			return updatedGroup;
		} catch (error) {
			consola.error(error);
			return await BadInputGraphQLError("Something went wrong!");
		}
	}
}

module.exports = GroupService;
