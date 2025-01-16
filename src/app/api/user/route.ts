import { NextResponse } from "next/server";
import { createUser } from "../../../services/userService";
import { useApiMiddleware } from "../../../services/apiMiddleware";

export const GET = useApiMiddleware(async (req) => {
    
    createUser("test", "test")

    return NextResponse.json({ error: 'User created' }, { status: 200 });

})
