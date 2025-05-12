import DataSourceManager from "src/DataSourceManager";
import { getSession } from "./authentification/nextAuthConfig";
import { getCurrentUser, getUserById } from "./user.service";
import Note from "@entity/Note";

/**
 * Creates a note in the database
 */
export const createNote = async (noteTitle: string):Promise<void> => {

  const dataSource = await DataSourceManager.getQueryRunner();
  const user = await getCurrentUser();

  // creates the role and saves it to the database
  const note = new Note();
  note.setTitle(noteTitle);
  note.setOwner(user);

  await dataSource.manager.save(note);

}
