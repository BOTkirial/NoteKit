import { vi, beforeAll, afterAll } from 'vitest';
import testDataSource from '../../src/testDataSource';
import DataSourceManager from '../../src/DataSourceManager';
import { runSeeding } from '../seed/seed';

beforeAll(async () => {

  // await DataSourceManager.startTransaction();

  await runSeeding(await DataSourceManager.getQueryRunner());

  // Uses the testDataSource instead of the appDataSource
  vi.mock("../../src/appDataSource", () => ({
    default: testDataSource,
  }));
  
});

// afterAll(async ()=> {
  // await  DataSourceManager.rollbackTransaction();
// })


