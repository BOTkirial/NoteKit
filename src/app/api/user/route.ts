import { NextResponse } from "next/server";
import { createUser } from "../../../services/userService";
import { withApiMiddleware } from "../../../services/apiMiddleware";

export const GET = withApiMiddleware(async (req) => {
    
    createUser("test", "test")

    return NextResponse.json({ error: 'User created' }, { status: 200 });

})



