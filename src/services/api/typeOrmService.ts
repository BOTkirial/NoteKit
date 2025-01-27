import { AppDataSource } from "../../data-source";

/**
 * Method to wrap the transaction logic
 * - Creates a connection to the database
 * - Starts a transaction
 * - Executes a save() call on all the provided objects
 * - If anything went wrong, rollbacks the transactions
 * - If not, commits the transaction
 * - Then, releases the connection
 */
const saveWithTransaction = async (objectsToSave: any[]) => {

    const queryRunner = AppDataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
        // objectsToSave.forEach(obj => async() => {
        //     await queryRunner.manager.save(obj);
        // })
        await queryRunner.manager.save(objectsToSave[0]);
        await queryRunner.commitTransaction()
    } catch(err) {
        await queryRunner.rollbackTransaction()
    } finally {
        await queryRunner.release()
    }

}

export { saveWithTransaction };