import { NextResponse } from "next/server";
import { getAllUsers } from "../../../services/api/userService";
import { withApiMiddleware } from "@services/api/authentification/apiMiddleware";


export const GET = withApiMiddleware(async () => {

    const users = await getAllUsers();
    return NextResponse.json(users, { status: 200 });

})
