import API_URL from "@constants/API_URL";
import { QueryClient, QueryOptions, useQuery, UseQueryResult } from "@tanstack/react-query";
import isValidApiRoute from "@utils/isValidApiRoute";

interface BaseInterface {
    apiRoute: string;
}

type PostInterface = {
    method: "POST"
    parameters: { [key: string]: string | number; }
} & BaseInterface;

type GetInterface = {
    method: "GET";
    parameters?: { [key: string]: string | number; } | number
} & BaseInterface;

type PatchInterface = {
    method: "PATCH";
    parameters: { [key: string]: string | number; }
} & BaseInterface;

type DeleteInterface = {
    method: "DELETE";
    parameters: number;
} & BaseInterface;

class API {

    /**
     * Method to allow using this class from both frontend and backend
     * Necessary because in the backend there is no browser to automatically retrieve the cookies
     */
    private static getCookies = async (): Promise<string> => {

        if (typeof window !== "undefined")
            return "";

        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        return cookieStore.toString();

    }

    private  static fetchWrapper = async<T> ( options: GetInterface | PostInterface | DeleteInterface | PatchInterface ): Promise<T> => {

        if(!isValidApiRoute(options.apiRoute))
            throw new Error(`Route "${options.apiRoute}" is not valid`)

        const url = new URL(API_URL + options.apiRoute);
        if (options.parameters && typeof options.parameters === "object" && ["GET"].includes(options.method)) {
          Object.keys(options.parameters).forEach(key => {
                url.searchParams.set(key, (options.parameters as any)[key]);
            })
        }

        let finalUrl = url.toString();

        if (options.parameters && Number.isInteger(options.parameters) && ["DELETE"].includes(options.method)) {
            finalUrl += options.parameters;
        }

        const response = await fetch(finalUrl, {
            method: options.method,
            credentials: "include",
            headers: {
                Cookie: await this.getCookies()
            },
            ...(["POST", "PATCH"].includes(options.method) ? { body: JSON.stringify(options.parameters) } : {})
        });

        if (!response.ok) {
            const jsonError = await response.json();
            throw jsonError;
        }

        const json = await response.json();

        return json;

    }


    public static Get = async<T> (route: string, parameters?: { [key: string]: string | number } | number):Promise<T> => {

        return await API.fetchWrapper({apiRoute: route, method: "GET", parameters: parameters});

    }

    public static Patch = async (route: string, parameters: { [key: string]: string; }):Promise<object> => {

        return await API.fetchWrapper({apiRoute: route, method: "PATCH", parameters: parameters});

    }

    public static Delete = async (route: string, parameters: number):Promise<object> => {

        return await API.fetchWrapper({apiRoute: route, method: "DELETE", parameters: parameters});

    }

    public static Post = async<T> (route: string, parameters: { [key: string]: string | number; }):Promise<T> => {

        return await API.fetchWrapper({apiRoute: route, method: "POST", parameters: parameters});

    }

    private static defaultQueryOptions = {
        gcTime: Infinity,
        staleTime: Infinity,
        refetchOnWindowFocus: false
    }

    public static useGetRequest = <T>(queryKey: string[], route: string, queryOptions?: QueryOptions<T>):UseQueryResult<T> => useQuery<T>({
      queryKey: queryKey,
      queryFn: () => API.Get<T>(route),
      ...API.defaultQueryOptions,
      ...queryOptions
    })

    public static getRequest = async <T> (queryKey: string[], route: string, queryClient: QueryClient, queryOptions?: QueryOptions<T>):Promise<T> => {
        const result = await queryClient.fetchQuery<T>({
            queryKey: queryKey,
            queryFn: () => API.Get<T>(route),
            ...API.defaultQueryOptions,
            ...queryOptions
        })
        return result;
    }

}

export default API;
