import { QueryClient } from "@tanstack/react-query";

let queryClient: QueryClient | null = null;

/**
 * Hack to use the same queryClient accross all QueryClientProviderWrapper
 */
const useQueryClient = ():QueryClient => {

  if (!queryClient) {
    queryClient = new QueryClient();
  }
  return queryClient;

}

export default useQueryClient;