import API from "@services/client/API";
import GenericRequest from "./class.request";
import { QueryClient } from "@tanstack/react-query";
import Note from "@entity/Note";
import { ShareType } from "@entity/SharedNote";

class NoteRequest extends GenericRequest {
  public static route = "/notes";

  public static Create = async (parameters: { title: string }): Promise<{ title: string }> => API.Post<{ title: string }>(NoteRequest.route, parameters);

  public static GetNoteById = async (id:number, queryClient: QueryClient):Promise<Partial<Note>> => {

    const result = await API.getRequest<Note>(["notes", String(id)], `${NoteRequest.route}/${id}`, queryClient)
    return result;

  }

  public static Share = async (parameters: { noteId: number, userId: number, shareType: ShareType }): Promise<{ noteId: number, userId: number, shareType: ShareType }> => API.Post<{ noteId: number, userId: number, shareType: ShareType }>(`/share/${parameters.noteId}/${parameters.userId}/`, parameters);

}

export default NoteRequest;
