import { NextRequest, NextResponse } from "next/server";
import { withApiMiddleware } from "@services/api/authentification/apiMiddleware";
import { shareNoteToUser } from "@services/api/note.service";
import { ShareType } from "@entity/SharedNote";
import enumContains from "@utils/enumContains";

export const POST = withApiMiddleware(async (request:NextRequest, params) => {
    const {noteId, userId} = await params;
    const body = await request.json();
    const shareType = body.shareType;
    if(!enumContains(ShareType, shareType)) throw new Error("Must specify a valid shareType");
    await shareNoteToUser(noteId, userId, shareType);
    return NextResponse.json({}, { status: 200 });
})