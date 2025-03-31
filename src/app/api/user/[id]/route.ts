import { NextRequest, NextResponse } from "next/server";
import { withApiMiddleware } from "../../../../services/authentification/apiMiddleware";
import { getUserById } from "../../../../services/api/userService";

export const GET = withApiMiddleware(async (_req:NextRequest, params) => {
    const {id} = await params;
    const user = await getUserById(id);
    return NextResponse.json({success: user}, { status: 200 });
})