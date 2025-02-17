import { vi, beforeAll, beforeEach, afterEach } from 'vitest';
import testDataSource from '../../src/testDataSource';
import DataSourceManager from '../../src/DataSourceManager';
import { runSeeding } from '../seed/seed';

beforeAll(async () => {

  await runSeeding(await DataSourceManager.getQueryRunner());

  // Uses the testDataSource instead of the appDataSource
  vi.mock("../../src/appDataSource", () => ({
    default: testDataSource,
  }));

  // stops the logging
  vi.spyOn(console, 'info').mockImplementation(() => { });

  
});

beforeEach(async () => {
  await DataSourceManager.startTransaction();
})

afterEach(async ()=> {
  await  DataSourceManager.rollbackTransaction();
})


