import { NextRequest, NextResponse } from "next/server";
import { useApiMiddleware } from "../../../../services/api/apiMiddleware";



export const GET = useApiMiddleware(async (req:NextRequest, res: NextResponse) => {

    

    return NextResponse.json({req: req, res: res, url: req.nextUrl.href}, { status: 200 });

})