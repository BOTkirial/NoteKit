import { describe, expect, test } from "vitest";
import { getActionByName } from "../../src/services/actionService";
import { createRole, deleteRole, getRoleById, getRoleByName, setRoleLopForAction, updateRoleById } from "../../src/services/roleService";
import { getLevelOfPermissionByName } from "../../src/services/levelOfPermissionService";
import DataSourceManager from "../../src/DataSourceManager";
import AccessMatrix from "../../src/entity/AccessMatrix";

describe("RoleService Test", () => {

  test("createRole Simple", async () => {
    await createRole("test", "test");
    const createdRole = await getRoleByName("test")
    expect(createdRole).toHaveProperty("name", "test");
    expect(createdRole).toHaveProperty("description", "test");

  });

  test("createRole Complex", async () => {
    const action = await getActionByName("Edit a Team");
    const lop = await getLevelOfPermissionByName("any");
    await createRole("testComplex", "A more complex role", [
      { action:  action, lop: lop }
    ]);
    const createdRole = await getRoleByName("testComplex");
    expect(createdRole).toHaveProperty("name", "testComplex");
    const accessMatrix = await (await DataSourceManager.getQueryRunner()).manager.findOne(AccessMatrix, { where: { role: { id: createdRole.id } }, relations: { action: true, role: true, levelOfPermission: true } });
    expect(accessMatrix).toHaveProperty("action.id", action.id)
    expect(accessMatrix).toHaveProperty("role.id", createdRole.id)
    expect(accessMatrix).toHaveProperty("levelOfPermission.id", lop.id)
  });

  test("getRoleByName", async () => {
    expect(await getRoleByName("administrator")).toHaveProperty("name", "administrator");
    expect(await getRoleByName("user")).toHaveProperty("name", "user");
    await expect(getRoleByName("admin")).rejects.toThrow();
  });

  test("getRoleById", async () => {
    expect(await getRoleById(1)).toHaveProperty("name", "administrator");
    expect(await getRoleById(2)).toHaveProperty("name", "user");
    await expect(getRoleById(3)).rejects.toThrow();
  });

  test("updateRole", async () => {
    await updateRoleById(2, { name: "user modified" });
    const roleModified = await getRoleById(2);
    expect(roleModified).toHaveProperty("name", "user modified");
    expect(roleModified).toHaveProperty("description", "The standard user of the application. Every connected user is considered to at least have this role, even if not specifically provided.");
    await expect(updateRoleById(1, { name: "user modified" })).rejects.toThrow();
    await expect(updateRoleById(9999, { name: "Does not exist" })).rejects.toThrow();
  });

  test("deleteRole", async () => {
    await createRole("test", "test");
    const roleTest = await getRoleByName("test");
    await deleteRole(roleTest);
    await expect(getRoleByName("test")).rejects.toThrow();
    const roleUser = await getRoleByName("user");
    await expect(deleteRole(roleUser)).rejects.toThrow();
  });

  test("setRoleLopForAction", async () => {
    const action = await getActionByName("Edit a Team");
    const lop = await getLevelOfPermissionByName("any");
    const user = await getRoleByName("user");
    await setRoleLopForAction(user, lop, action);
  });

  test("getRoleLopForAction", async () => {
    expect(1+3).toEqual(3);
  });

});