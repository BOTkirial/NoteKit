import { vi, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import { TestDataSource } from '../../src/test-data-source';
import checkAuthentificationAndDatabase from '../../src/services/api/checkAuthentificationAndDatabase';
import { TestQueryRunner } from './_globalSetup';


beforeAll(async () => {
 
  // Replaces some functions that souldn't run during tests

  vi.mock("../../src/services/api/nextAuthConfig", () => ({
    useAuthentification: vi.fn(() => Promise.resolve(true)),
  }));

  vi.mock("../../src/data-source", () => ({
    AppDataSource: TestDataSource,
  }));

  vi.mock("../../src/services/api/typeOrmService", () => ({
    saveWithTransaction: vi.fn((data) => TestDataSource.manager.save(data)) ,
  }));

  // stops the logging

  vi.spyOn(console, 'info').mockImplementation(() => { });

  vi.spyOn(TestDataSource.manager, 'save').mockImplementation(async (el: any) => { console.log(el); console.log(TestQueryRunner.getQueryRunner()) });

  // uses authentification and initializes de database connection

  await checkAuthentificationAndDatabase();
  
});

// TODO
// Tenter de faire les transaction dans les beforeAll et afterAll et de mocker le AppDataSource.manager par le queryRunner.manager


// Autrement, de base faire un queryRunner avec une class etc
// Et mocker cette class par une équivalente lors des tests