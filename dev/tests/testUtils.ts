import { TestDataSource } from "../../src/test-data-source";

const testDatabase = async () => {
    try {
        if (!TestDataSource.isInitialized)
            await TestDataSource.initialize();
    } catch (error: any) {
        console.info("An error occured when initializing database connection : " + error);
        throw new Error("An error occured when initializing database connection : " + error)
    }
}

export default testDatabase;