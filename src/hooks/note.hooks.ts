import Note from "@entity/Note";
import API from "@services/client/API";

export const useNotes = () => API.useGetRequest<Array<Partial<Note> & {
    excerpt: string,
    title: string,
    id: number
}>>(["notes"], "/notes");

export const useNote = (noteId: number) => API.useGetRequest<Partial<Note> & {
    excerpt: string,
    title: string,
    id: number,
    content: string
}>(["note", String(noteId)], `/notes/${noteId}`);

