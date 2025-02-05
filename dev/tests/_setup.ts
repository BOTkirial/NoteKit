import { vi, beforeAll, afterAll } from 'vitest';
import { TestDataSource } from '../../src/test-data-source';
import checkAuthentificationAndDatabase from '../../src/services/api/checkAuthentificationAndDatabase';
import { afterEach, beforeEach } from 'node:test';

vi.mock("../../src/services/api/nextAuthConfig", () => ({
  useAuthentification: vi.fn(() => Promise.resolve(true)),
}));

vi.mock("../../src/data-source", () => ({
  AppDataSource: TestDataSource,
}));

beforeAll(async () => {
  // stop the logging
  vi.spyOn(console, 'info').mockImplementation(() => {});
  // uses authentification and initializes de database connection
  await checkAuthentificationAndDatabase();
});

afterAll(async () => {
    if(TestDataSource.isInitialized)
        await TestDataSource.destroy();
});

beforeEach(async () => {
  // starts a transaction
      const queryRunner = TestDataSource.createQueryRunner();
      await queryRunner.connect();
      await queryRunner.startTransaction();
})

afterEach(async () => {
  // resets the transaction
  await queryRunner.rollbackTransaction()
})
