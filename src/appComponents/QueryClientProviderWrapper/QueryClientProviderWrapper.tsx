"use client";

import useQueryClient from "@hooks/queryClient.hook";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface PropsCustomQueryClientProvider {
    children: ReactNode;
}

/**
 * Tell typescript that the window object might have a queryClient
 */
declare global {
    interface Window {
        queryClient?: QueryClient;
    }
}

/**
 * Wraps a query client around a small part of the app
 * allows to use useQuery And useMutation while keeping SSR on some parts of the app
 */
const QueryClientProviderWrapper = (props: PropsCustomQueryClientProvider) => {

    /**
     * Ensures that the same queryclient is always used when this component is called
     */
    const queryClient = useQueryClient();

    return (
        <div className="custom-query-client-provider">
            {queryClient && <QueryClientProvider client={queryClient}>
                {props.children}
            </QueryClientProvider>}
        </div>
    )

}

export default QueryClientProviderWrapper;