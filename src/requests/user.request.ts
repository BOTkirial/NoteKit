import API from "@services/client/API";
import GenericRequest from "./class.request";

class UserRequest extends GenericRequest {

  public static route = "/users";

  public static Create = async (parameters: { name: string, password: string, email?: string }): Promise<{ name: string, password: string, email?: string }> => API.Post<{ name: string, password: string, email?: string }>(UserRequest.route, parameters);

}

export default UserRequest;
