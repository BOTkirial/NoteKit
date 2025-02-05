import { describe, expect, test } from "vitest";
import { getActionById, getActionByName } from "../../src/services/actionService";
import { createRole, getRoleByName } from "../../src/services/roleService";

describe("RoleService Test", () => {

  test("createRole", async () => {
    
    await createRole("test", "test");

    expect(await getRoleByName("test")).toHaveProperty("name", "test");

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