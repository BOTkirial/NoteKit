import { NextResponse } from "next/server";
import { withApiMiddleware } from "../../../services/api/apiMiddleware";
import { getAllUsers } from "../../../services/userService";


export const GET = withApiMiddleware(async () => {

    const users = await getAllUsers();
    return NextResponse.json({success: users}, { status: 200 });

})
