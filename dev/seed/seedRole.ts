import DataSourceManager from "../../src/DataSourceManager";
import Role from "../../src/entity/Role";

const runRoles = async () => {

    const dataSource = await DataSourceManager.getQueryRunner();
    const count = await dataSource.manager.count(Role);
    if(count > 0) {
        return;
    }

    // admin
    const roleAdmin = new Role();
    roleAdmin.setName("administrator");
    roleAdmin.setDescription("The administrator of the application. This Role gives access to everything.")

    // admin
    const roleUser = new Role();
    roleUser.setName("user");
    roleUser.setDescription("The standard user of the application. Every connected user is considered to at least have this role, even if not specifically provided.")
    
    try {
        await Promise.all([
            dataSource.manager.save(roleUser),
            dataSource.manager.save(roleAdmin)
        ])
    } catch (error) {
        throw new Error('An error occured when creating the action : ' + error);
    }


}

export default runRoles;