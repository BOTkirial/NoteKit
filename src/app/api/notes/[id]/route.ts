import { withApiMiddleware } from "@services/api/authentification/apiMiddleware";
import { getNoteById } from "@services/api/note.service";
import { NextRequest, NextResponse } from "next/server";

export const GET = withApiMiddleware(async (request:NextRequest, params) => {
    const {id} = await params;
    const note = await getNoteById(id);
    return NextResponse.json(note, { status: 200 });
})