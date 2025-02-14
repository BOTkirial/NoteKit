import { describe, expect, test } from "vitest";
import { getActionByName } from "../../src/services/actionService";
import { createRole, getRoleByName, getRoleLopForAction } from "../../src/services/roleService";
import { getLevelOfPermissionByName } from "../../src/services/levelOfPermissionService";
import DataSourceManager from "../../src/DataSourceManager";
import Role from "../../src/entity/Role";
import AccessMatrix from "../../src/entity/AccessMatrix";

describe("RoleService Test", () => {

  test("createRole Simple", async () => {
    await createRole("test", "test");
    expect(await getRoleByName("test")).toHaveProperty("name", "test");
    expect(await getRoleByName("test")).toHaveProperty("description", "test");

  });

  test("createRole Complex", async () => {
    console.log(await (await DataSourceManager.getQueryRunner()).manager.count(AccessMatrix));
    const action = await getActionByName("Edit a Team");
    const lop = await getLevelOfPermissionByName("any");
    await createRole("testComplex", "A more complex role", [
      { action:  action, lop: lop }
    ]);
    const createdRole = await getRoleByName("test");
    expect(createdRole).toHaveProperty("name", "test");
    console.log(await (await DataSourceManager.getQueryRunner()).manager.count(AccessMatrix));
  });

  test("getRoleByName", async () => {

    expect(await getRoleByName("administrator")).toHaveProperty("name", "administrator");
    expect(await getRoleByName("user")).toHaveProperty("name", "user");
    await expect(getRoleByName("admin")).rejects.toThrow();

  });

  test("getRoleById", async () => {


  });

  test("updateRole", async () => {


  });

  test("deleteRole", async () => {


  });

  test("setRoleLopForAction", async () => {


  });

  test("getRoleLopForAction", async () => {


  });

});