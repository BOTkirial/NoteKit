import { describe, expect, test } from "vitest";
import { getLevelOfPermissionById, getLevelOfPermissionByName } from "../../src/services/levelOfPermissionService";

describe("LevelOfPermissionService Test", () => {

  test("getLevelOfPermissionById", async () => {

    expect(await getLevelOfPermissionById(1)).toHaveProperty("name", "none");
    expect(await getLevelOfPermissionById(2)).toHaveProperty("name", "user");
    expect(await getLevelOfPermissionById(3)).toHaveProperty("name", "own team");
    expect(await getLevelOfPermissionById(4)).toHaveProperty("name", "any team");
    expect(await getLevelOfPermissionById(5)).toHaveProperty("name", "any");

  });

  test("getLevelOfPermissionByName", async () => {

    expect(await getLevelOfPermissionByName("none")).toHaveProperty("name", "none");
    expect(await getLevelOfPermissionByName("user")).toHaveProperty("name", "user");
    expect(await getLevelOfPermissionByName("own team")).toHaveProperty("name", "own team");
    expect(await getLevelOfPermissionByName("any team")).toHaveProperty("name", "any team");
    expect(await getLevelOfPermissionByName("any")).toHaveProperty("name", "any");

  });

});