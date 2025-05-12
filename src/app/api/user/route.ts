import { NextResponse } from "next/server";
import { withApiMiddleware } from "@services/api/authentification/apiMiddleware";
import { getAllUsers } from "@services/api/user.service";

export const GET = withApiMiddleware(async () => {

    const users = await getAllUsers();
    return NextResponse.json(users, { status: 200 });

})
