import { NextRequest, NextResponse } from "next/server";
import { withApiMiddleware } from "@services/api/authentification/apiMiddleware";
import { createUser, getAllUsers, getUserByName } from "@services/api/user.service";
import { getRequestParameters } from "@services/api/api.service";


export const GET = withApiMiddleware(async (request: NextRequest) => {

    const sortBy = getRequestParameters("sortBy", request);
    const sort = getRequestParameters("sort", request);
    const size = getRequestParameters("size", request);
    const page = getRequestParameters("page", request);

    const users = await getAllUsers({sortBy, sort, size, page});
    return NextResponse.json(users, { status: 200 });

})

export const POST = async (request: NextRequest) => {

    try {

        const {name, password} = await request.json();

        const existingUser = await getUserByName(name);
        const userAlreadyExists = existingUser !== null;

        if(userAlreadyExists) {
            return NextResponse.json(
                { message: "Ce nom est déjà utilisé" },
                { status: 500 }
            );
        }

        await createUser(name, password);
        return NextResponse.json({}, { status: 200 });
        
    } catch (e) {
        return NextResponse.json(
            { message: "Une erreur inattendue est survenue : " + e },
            { status: 500 }
        );
    }

}
