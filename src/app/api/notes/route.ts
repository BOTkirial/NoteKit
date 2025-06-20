import { getRequestParameters } from "@services/api/api.service";
import { withApiMiddleware } from "@services/api/authentification/apiMiddleware";
import { createNote, getCurrentUserNotes } from "@services/api/note.service";
import { NextRequest, NextResponse } from "next/server";

export const GET = withApiMiddleware(async () => {
  try {
    const notes = await getCurrentUserNotes({sortBy: "note.id", sort: "DESC"});
    return NextResponse.json(notes, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Une erreur inattendue est survenue : " + e },
      { status: 500 }
    );
  }
});

export const POST = withApiMiddleware(async (request: NextRequest) => {
  try {
    const body = await request.json();
    await createNote(body.title);
    return NextResponse.json({}, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Une erreur inattendue est survenue : " + e },
      { status: 500 }
    );
  }
});
