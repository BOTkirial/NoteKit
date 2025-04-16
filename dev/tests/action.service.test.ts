import { getActionById, getActionByName } from "@services/api/action.service";
import { describe, expect, test } from "vitest";

describe("ActionService Test", () => {

  test("getActionByName", async () => {

    expect(await getActionByName("Create a Note")).toHaveProperty("name", "Create a Note");

  });

  test("getActionById", async () => {

    expect(await getActionById(1)).toHaveProperty("name", "Create a Note");

  });

});