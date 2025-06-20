import { NextRequest } from "next/server";
import ApiRequestParams from "src/types/ApiRequestParams";
import { FindManyOptions, ObjectLiteral, SelectQueryBuilder } from "typeorm";

const getRequestParameters = (parameterName: string, request: NextRequest) : any | null => {
    const { searchParams } = new URL(request.url);
    return searchParams.get(parameterName);
}

const withRequestParams = (options:Partial<FindManyOptions>, params?: ApiRequestParams):FindManyOptions => {    
    return {
        ...options,
        order: (params?.sort && params?.sortBy) ? { [params?.sortBy]: params?.sort } : undefined,
        skip: (params?.size && params?.page) ? (params?.page - 1) * params?.size : undefined,
        take: params?.size
    };
}

export { withRequestParams, getRequestParameters }

/**
 * Monkey Patching the typeorm querybuilder to add the methods to automatically apply sort, sortBy, page and size
 * This file is imported in the /src/services/api/authentification/apiMiddleware.ts in order to apply the monkey patch
*/

console.log("Monkey Patching 🙈");

declare module 'typeorm' {
    interface SelectQueryBuilder<Entity extends ObjectLiteral> {
        applyRequestParams(params: ApiRequestParams): this;
    }
}

SelectQueryBuilder.prototype.applyRequestParams = function (params?: ApiRequestParams) {

    if (params?.sortBy && params?.sort)
        this.orderBy(params?.sortBy, params?.sort)

    if (params?.page && params?.size)
        this.skip((params?.page - 1) * params?.size).take(params?.size)

    return this;
};
