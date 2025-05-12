"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

interface PropsCustomQueryClientProvider {
    children: ReactNode;
}

const QueryClientProviderWrapper = (props: PropsCustomQueryClientProvider) => {

    const [queryClient] = useState(() => new QueryClient());

    return (
        <div className="custom-query-client-provider">
            <QueryClientProvider client={queryClient}>
                {props.children}
            </QueryClientProvider>
        </div>
    )

}

export default QueryClientProviderWrapper;