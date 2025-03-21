import { NextRequest, NextResponse } from "next/server";
import { withApiMiddleware } from "../../../../services/api/apiMiddleware";
import { getUserById } from "../../../../services/userService";

export const GET = withApiMiddleware(async (_req:NextRequest, params) => {
    const {id} = await params;
    const user = await getUserById(id);
    return NextResponse.json({success: user}, { status: 200 });
})