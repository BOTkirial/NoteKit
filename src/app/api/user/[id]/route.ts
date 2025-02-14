import { NextRequest, NextResponse } from "next/server";
import { withApiMiddleware } from "../../../../services/api/apiMiddleware";



export const GET = withApiMiddleware(async (req:NextRequest) => {
    return NextResponse.json({ req: req, url: req.nextUrl.href }, { status: 200 });
})