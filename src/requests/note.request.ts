import API from "@services/client/API";
import GenericRequest from "./class.request";

class NoteRequest extends GenericRequest {
  public static route = "/notes/new";

  public static Post = async (parameters: {
    title: string;
  }): Promise<{
    title: string;
  }> =>
    API.Post<{
      title: string;
    }>(NoteRequest.route, parameters);
}

export default NoteRequest;
