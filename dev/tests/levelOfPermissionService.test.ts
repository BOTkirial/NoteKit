

import { beforeAll, afterAll, beforeEach, describe, expect, it } from "vitest";

import { Repository } from "typeorm";
import User from "../../src/entity/User";
import { TestDataSource } from "../../src/test-data-source";
import testDatabase from "./testUtils";

let userRepository: Repository<User>;

beforeAll(async () => {
  await TestDataSource.initialize();
  userRepository = TestDataSource.getRepository(User);
});

afterAll(async () => {
  // await AppDataSource.destroy();
});

beforeEach(async () => {
  // await userRepository.clear(); // Ensures each test starts fresh
});

describe("User Repository", () => {
  it("should insert and retrieve a user", async () => {
     await testDatabase();
  });
});