const { default: mongoose } = require("mongoose");

const consola = require("consola"),
	{ GroupModal } = require("../models");

// class to interact with the group modal on DB
class GroupRepository {
	// create new group
	async CreateGroup(groupData) {
		try {
			let newGroup = await GroupModal(groupData);
			newGroup = await newGroup.save();
			return newGroup;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// add group administrator
	async AddGroupadministrator(userId, groupId) {
		try {
			let updatedGroup = await GroupModal.findByIdAndUpdate(groupId, {
				$addToSet: { administrators: mongoose.Types.ObjectId(userId) },
			});

			return updatedGroup;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// remove group administrator
	async RemoveGroupadministrator(userId, groupId) {
		try {
			let updatedGroup = await GroupModal.findByIdAndUpdate(groupId, {
				$pop: { administrators: mongoose.Types.ObjectId(userId) },
			});

			return updatedGroup;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// load single group
	async GetGroupById(groupId) {
		try {
			let existingGroup = await GroupModal.findById(
				mongoose.Types.ObjectId(groupId)
			);

			return existingGroup;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// update group info
	async UpdateGroupById(groupId, groupData) {
		try {
			const updatedGroup = await GroupModal.findByIdAndUpdate(
				mongoose.Types.ObjectId(groupId),
				groupData
			);

			return updatedGroup;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get group administrators
	async GetGroupAdministratorsById(groupId) {
		try {
			let groupAdministrators = await GroupModal.findById(groupId);

			return groupAdministrators.administrators;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get group by name
	async GetGroupByName(groupName) {
		try {
			let existingGroup = await GroupModal.findOne({ name: groupName });

			return existingGroup;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}

	// get suggesstedGroups
	async GetSuggesstedGroups(userGroups) {
		try {
			let suggesstedGroups = await GroupModal.find({
				_id: { $nin: userGroups },
			});

			return suggesstedGroups;
		} catch (error) {
			consola.error(error);
			return { error: "Something Went Wrong!" };
		}
	}
}

module.exports = GroupRepository;
