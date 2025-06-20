import DataSourceManager from "src/DataSourceManager";
import { getCurrentUser, getUserById } from "./user.service";
import Note from "@entity/Note";
import SharedNote, { ShareType } from "@entity/SharedNote";
import ApiRequestParams from "src/types/ApiRequestParams";

/**
 * Creates a note in the database
 */
export const createNote = async (noteTitle: string): Promise<void> => {
  const dataSource = await DataSourceManager.getQueryRunner();
  const user = await getCurrentUser();

  // creates the note and saves it to the database
  const note = new Note();
  note.setTitle(noteTitle);
  note.setOwner(user);

  await dataSource.manager.save(note);
};

/**
 * Creates a note in the database
 */
export const saveNote = async (note: Note): Promise<void> => {
  const dataSource = await DataSourceManager.getQueryRunner();
  const hasWriteAccess = await isNoteWriteable(note.id);
  if(hasWriteAccess) await dataSource.manager.save(note);

  
};

export const shareNoteToUser = async (noteId: number, userId: number, shareType: ShareType): Promise<void> => {

  const note = await getNoteById(noteId);
  const user = await getUserById(userId);

  if(!note) throw new Error("No note found in the database")
  if(!user) throw new Error("No user found in the database")

  const sharedNote = new SharedNote();
  sharedNote.setSharedTo(user);
  sharedNote.setSharedNote(note);
  sharedNote.setShareType(shareType);

  const dataSource = await DataSourceManager.getQueryRunner();
  await dataSource.manager.save(shareNoteToUser);
}

/**
 * Returns the list of all the note the currently connected user is able to view, either by
 * - Being the note's owner
 * - The note being shared with him
 * - The note being public
 */
export const getCurrentUserNotes = async(parameters: ApiRequestParams):Promise<Array<Note>> => {
  const currentUser = await getCurrentUser();
  const dataSource = await DataSourceManager.getQueryRunner();
  
  const notes = dataSource.manager
    .getRepository(Note)
    .createQueryBuilder('note')
    .leftJoin('note.owner', 'owner')
    .leftJoin('shared_note', 'sharedNote', 'sharedNote.sharedNoteId = note.id')
    .leftJoin('sharedNote.sharedTo', 'sharedTo')
    .where('owner.id = :userId', { userId: currentUser.id })
    .orWhere('note.isPublic = true')
    .orWhere('sharedTo.id = :userId')
    .setParameter("userId", currentUser.id)
    .select([
      'note.id',
      'note.title',
      'note.excerpt',
      'note.isPublic',
    ])
    .applyRequestParams(parameters)
    .getMany();

  return notes;
}


export const getNoteById = async (noteId: number): Promise<Note> => {
  const dataSource = await DataSourceManager.getQueryRunner();

  const note = await dataSource.manager.findOne(Note, {
    where: { id: noteId },
    select: {
      id: true,
      title: true,
      excerpt: true,
      isPublic: true,
      content: true
    },
  });
  if (note === null) {
    throw new Error("No note found in the database");
  }
  return note;
};

/**
 * Determines wether or not a note is readable by the current user, weather by :
 * - The user being the note's owner
 * - The note being shared to the user as readable or writeable
 * - The note being public
 */
export const isNoteReadable = async (noteId: number):Promise<boolean> => {
  
  const note = await getNoteById(noteId);

  if(note.isPublic) return true;
  
  const currentUser = await getCurrentUser();
  
  if(note.owner.id === currentUser.id) return true;

  const dataSource = await DataSourceManager.getQueryRunner();
  const isNoteShared = dataSource.manager.findOne(SharedNote, { where: { sharedNote: { id: note.id }, sharedTo: { id: currentUser.id } } }) !== null;
  
  if(isNoteShared) return true;

  return false;
}

/**
 * Determines wether or not a note is writeable by the current user, weather by :
 * - The user being the note's owner
 * - The note being shared to the user as writeable
 * - The note being public
 */
export const isNoteWriteable = async (noteId: number):Promise<boolean> => {

  const note = await getNoteById(noteId);
  
  const currentUser = await getCurrentUser();
  
  if(note.owner.id === currentUser.id) return true;

  const dataSource = await DataSourceManager.getQueryRunner();
  const isNoteShared = dataSource.manager.findOne(SharedNote, { where: { sharedNote: { id: note.id }, sharedTo: { id: currentUser.id }, shareType: ShareType.WRITE } }) !== null;
  
  if(isNoteShared) return true;

  return false;

}
