import { EntitySubscriberInterface, EventSubscriber, InsertEvent, UpdateEvent } from "typeorm";

@EventSubscriber()
export class BaseSubscriber implements EntitySubscriberInterface {

    /**
     * Called before any entity is created in the database
     */
    beforeInsert(event: InsertEvent<any>) {

        event.entity.createdBy = null;
        
    }

    /**
     * Called before any entity is updated in the database
     */
    beforeUpdate(event: UpdateEvent<any>) {
        
        event.entity.updatedBy = null;

    }

}