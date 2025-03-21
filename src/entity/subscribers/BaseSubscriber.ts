import { EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";
// import { getConnectedUser } from "../../services/userService";
// import BaseEntity from "../BaseEntity";

@EventSubscriber()
export class BaseSubscriber implements EntitySubscriberInterface {

    /**
     * Called before any entity is created in the database
     */
    async beforeInsert(event: InsertEvent<any>) {

        // const user = await getConnectedUser();
        // if(user)
        //     event.entity.createdBy = user;
        
    }

    /**
     * Called before any entity is updated in the database
     */
    async beforeUpdate(event: UpdateEvent<any>) {
        
        // const user = await getConnectedUser();
        // if(event.entity && user)
        //     event.entity.updatedBy = user;

    }

}