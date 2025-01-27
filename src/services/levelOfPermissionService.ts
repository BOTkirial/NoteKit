
/**
 * Creates a new level of permission in the database
 */
// export const createLevelOfPermission = () => {

import { AppDataSource } from "../data-source";
import LevelOfPermission from "../entity/LevelOfPermission";
import checkAuthentificationAndDatabase from "./api/checkAuthentificationAndDatabase";

    
// }

/**
 * finds a level of permission in the database by it's id
 */
export const getLevelOfPermissionById = async (lopId: number):Promise<LevelOfPermission> => {
    await checkAuthentificationAndDatabase();
    const lop = await AppDataSource.manager.findOneBy(LevelOfPermission,  { id: lopId } );
    if(lop === null) {
        throw new Error("No LoP found in the database")
    }
    return lop;
}

/**
 * finds a level of permission in the database by it's name
 */
export const getLevelOfPermissionByName = async (lopName: string):Promise<LevelOfPermission> => {
    await checkAuthentificationAndDatabase();
    const lop = await AppDataSource.manager.findOneBy(LevelOfPermission,  { name: lopName } );
    if(lop === null) {
        throw new Error("No LoP found in the database")
    }
    return lop;
}

/**
 * updates a level of permission in the database
 */
// export const updateLevelOfPermission = (lop: LevelOfPermission, updates: any) => {
    
// }

/**
 * deletes a level of permission from the database
 */
// export const deleteLevelOfPermission = (lop: LevelOfPermission) => {
    
// }