import { describe, expect, test } from 'vitest'
import { createUser, getUserByName } from '../../src/services/userService';

describe("UserService test", () => {


  test("createUser", async () => {    
    // test the creation of a simple user
    await createUser("test", "test");
    expect(await getUserByName("test"), "A user named 'test' should exist").toHaveProperty("name", "test");
    expect((await getUserByName("test")).getPassword(), "The password should be hashed").not.toBe("test");

  });


})