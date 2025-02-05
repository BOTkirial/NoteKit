import { NextRequest, NextResponse } from "next/server";
import { useApiMiddleware } from "../../../../services/api/apiMiddleware";



export const GET = useApiMiddleware(async (req:NextRequest) => {

    

    return NextResponse.json({ req: req, url: req.nextUrl.href }, { status: 200 });
})