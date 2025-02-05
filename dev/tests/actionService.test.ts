import { describe, expect, test } from "vitest";
import { getActionById, getActionByName } from "../../src/services/actionService";

describe("ActionService Test", () => {

  test("getActionByName", async () => {

    expect(await getActionByName("Create a Note")).toHaveProperty("name", "Create a Note");

  });

  test("getActionById", async () => {

    expect(await getActionById(1)).toHaveProperty("name", "Create a Note");

  });

});