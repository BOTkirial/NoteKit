import { NextRequest, NextResponse } from "next/server";
import { withApiMiddleware } from "@services/api/authentification/apiMiddleware";
import { getUserById } from "@services/api/user.service";

export const GET = withApiMiddleware(async (request:NextRequest, params) => {
    const {id} = await params;
    const user = await getUserById(id);
    return NextResponse.json(user, { status: 200 });
})