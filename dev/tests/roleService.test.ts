import { describe, expect, test } from "vitest";
import { getActionById, getActionByName } from "../../src/services/actionService";
import { createRole, getRoleByName } from "../../src/services/roleService";
import DataSourceManager from "../../src/DataSourceManager";

describe("RoleService Test", () => {

  test("createRole", async () => {    
    // test the creation of a simple role
    await createRole("test", "test");
    expect(await getRoleByName("test")).toHaveProperty("name", "test");
    expect(await getRoleByName("test")).toHaveProperty("description", "test");
    
    // test the creation of a more complex role, with a given access matrix
    // const accessMatrix = [
    //   {  }
    // ]
    // await createRole("testComplex", "A more complex role", accessMatrix);

  });

  test("getRoleByName", async () => {

    expect(await getRoleByName("administrator")).toHaveProperty("name", "administrator");


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