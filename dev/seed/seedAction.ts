import { AppDataSource } from "../../src/data-source";
import Action from "../../src/entity/Action";

const runActions = async () => {
    
    if(!AppDataSource.isInitialized)
        await AppDataSource.initialize();

    const count = await AppDataSource.manager.count(Action);
    if(count > 0) {
        return;
    }

    // Create a Note
    const createNote = new Action();
    createNote.setName("Create a Note")
    createNote.setDescription("Allows to create a Note.")

    // Read a Note
    const readNote = new Action();
    readNote.setName("Read a Note")
    readNote.setDescription("Allows to read a Note. (based on the Level Of Permission)")

    // Edit a Note
    const editNote = new Action();
    editNote.setName("Edit a Note")
    editNote.setDescription("Allows to edit a Note. (based on the Level Of Permission)")

    // Delete a Note
    const deleteNote = new Action();
    deleteNote.setName("Delete a Note")
    deleteNote.setDescription("Allows to delete a Note. (based on the Level Of Permission)")

    // Create a User
    const createUser = new Action();
    createUser.setName("Create a User")
    createUser.setDescription("Allows to create a User.")

    // Edit a User
    const editUser = new Action();
    editUser.setName("Edit a User")
    editUser.setDescription("Allows to edit a User.")

    // Delete a User
    const deleteUser = new Action();
    deleteUser.setName("Delete a User")
    deleteUser.setDescription("Allows to delete a User.")

    // Create a Team
    const createTeam = new Action();
    createTeam.setName("Create a Team")
    createTeam.setDescription("Allows to create a Team.")

    // Edit a Team
    const editTeam = new Action();
    editTeam.setName("Edit a Team")
    editTeam.setDescription("Allows to edit a Team.")

    // Add Teams to a Team
    const addTeamToTeam = new Action();
    addTeamToTeam.setName("Add a Team to a Team")
    addTeamToTeam.setDescription("Allows to nest Teams inside each other.")

    // Remove Teams from a Team
    const removeTeamFromTeam = new Action();
    removeTeamFromTeam.setName("Remove a Team from a Team")
    removeTeamFromTeam.setDescription("Allows to un-nest Teams from inside each other.")

    // Add Users to a Team
    const addUserToTeam = new Action();
    addUserToTeam.setName("Add a User to a Team")
    addUserToTeam.setDescription("Allows to group Users together inside a Team.")

    // Remove Users from a Team
    const removeUserFromTeam = new Action();
    removeUserFromTeam.setName("Remove a User from a Team")
    removeUserFromTeam.setDescription("Allows to seperate Users from their Team.")

    // Delete a Team
    const deleteTeam = new Action();
    deleteTeam.setName("Delete a Team")
    deleteTeam.setDescription("Allows to delete a Team.")

    // Create a Role
    const createRole = new Action();
    createRole.setName("Create a Role")
    createRole.setDescription("Allows to create a Role.")

    // Edit a Role
    const editRole = new Action();
    editRole.setName("Edit a Role")
    editRole.setDescription("Allows to edit a Role.")

    // Delete a Role
    const deleteRole = new Action();
    deleteRole.setName("Delete a Role")
    deleteRole.setDescription("Allows to delete a Role.")

    // Manage the Matrix of a Role
    const manageRoleMatrix = new Action();
    manageRoleMatrix.setName("Manage Matrix of a Role")
    manageRoleMatrix.setDescription("Allows to specify what Actions a Role gives access to. Also allows to specify a Level Of Permission for each Action.")

    // Add Roles to a User
    const addRoleToUser = new Action();
    addRoleToUser.setName("Add Role to User")
    addRoleToUser.setDescription("Allows to give a Role to a User.")

    // Add Roles to a Team
    const addRoleToTeam = new Action();
    addRoleToTeam.setName("Add Role to Team")
    addRoleToTeam.setDescription("Allows to give a Role to a Team.")

    // Remove Roles from a User
    const removeRoleFromUser = new Action();
    removeRoleFromUser.setName("Remove Role from User")
    removeRoleFromUser.setDescription("Allows to remove a Role from a User.")

    // Remove Roles from a Team
    const removeRoleFromTeam = new Action();
    removeRoleFromTeam.setName("Remove Role from Team")
    removeRoleFromTeam.setDescription("Allows to remove a Role from a Team.")

    try {
        await Promise.all([
            AppDataSource.manager.save(createNote),
            AppDataSource.manager.save(readNote),
            AppDataSource.manager.save(editNote),
            AppDataSource.manager.save(deleteNote),
            AppDataSource.manager.save(createUser),
            AppDataSource.manager.save(editUser),
            AppDataSource.manager.save(deleteUser),
            AppDataSource.manager.save(createTeam),
            AppDataSource.manager.save(editTeam),
            AppDataSource.manager.save(addTeamToTeam),
            AppDataSource.manager.save(removeTeamFromTeam),
            AppDataSource.manager.save(addUserToTeam),
            AppDataSource.manager.save(removeUserFromTeam),
            AppDataSource.manager.save(deleteTeam),
            AppDataSource.manager.save(createRole),
            AppDataSource.manager.save(editRole),
            AppDataSource.manager.save(deleteRole),
            AppDataSource.manager.save(manageRoleMatrix),
            AppDataSource.manager.save(addRoleToUser),
            AppDataSource.manager.save(addRoleToTeam),
            AppDataSource.manager.save(removeRoleFromUser),
            AppDataSource.manager.save(removeRoleFromTeam),
        ])
    } catch (error) {
        throw new Error('An error occured when creating the action : ' + error);
    }

}

export default runActions;