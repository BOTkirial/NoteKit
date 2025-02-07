import { describe, expect, test } from "vitest";
import { getActionById, getActionByName } from "../../src/services/actionService";
import { createRole, getRoleByName } from "../../src/services/roleService";

describe("RoleService Test", () => {

  test("createRole", async () => {
    
    // test the creation of a simple role
    await createRole("test", "test");
    // expect(await getRoleByName("test")).toHaveProperty("name", "test");

    // test the creation of a more complex role, with a given access matrix
    // await createRole("testComplex")

  });

  test("getRoleByName", async () => {


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