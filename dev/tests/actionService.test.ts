import {test } from 'vitest'
import { vi } from 'vitest';
import testDatabase from './testUtils';
import { getActionByName } from '../../src/services/actionService';
import checkAuthentificationAndDatabase from '../../src/services/api/checkAuthentificationAndDatabase';

// vi.mock('../../src/services/api/checkAuthentificationAndDatabase', () => ({
//   default: vi.fn(() => ({ /* mock implementation */ })),
// }));

// vi.mock('typeorm');
// vi.mock(  {
//   checkAuthentificationAndDatabase: vi.fn()
// });

test('test "getActionByName()"', async () => {
  // await testDatabase();

  // const action = await getActionByName("")

  // await checkAuthentificationAndDatabase();

  // const typeorm = await import("typeorm");
  // console.log(typeorm) 
  // console.log(typeorm.CreateDateColumn) 

  // try {
  //   if(!AppDataSource.isInitialized)
  //       await AppDataSource.initialize();
  // } catch (error:any) {
  //   console.info("An error occured when initializing database connection : " + error);
  //   throw new Error("An error occured when initializing database connection : " + error)
  // }
  // expect(1+2).toBe(3)
})