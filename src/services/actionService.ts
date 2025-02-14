import DataSourceManager from "../DataSourceManager";
import Action from "../entity/Action";


/**
 * Creates an action in the database
 */
// export const createAction = (actionName: string) => {    
// }


/**
 * Finds an action in the database by it's name
 */
export const getActionByName = async (actionName: string):Promise<Action> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const action = await dataSource.manager.findOneBy(Action,  { name: actionName } );
    if(action === null) {
        throw new Error("No action found in the database")
    }
    return action;
}

/**
 * Finds an action in the database by it's id
 */
export const getActionById = async (actionId: number):Promise<Action> => {
    const dataSource = await DataSourceManager.getQueryRunner();
    const action = await dataSource.manager.findOneBy(Action,  { id: actionId } );
    if(action === null) {
        throw new Error("No action found in the database")
    }
    return action;
}

/**
 * updates an action in the database
 */
// export const updateAction = (action: Action, updates: any) => {
    
// }

/**
 * Deletes an action from the database
 */
// export const deleteAction = (action: Action) => {
    
// }