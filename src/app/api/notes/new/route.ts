import { NextRequest, NextResponse } from "next/server";
import { withApiMiddleware } from "@services/api/authentification/apiMiddleware";
import { createNote } from "@services/api/note.service";

export const POST = withApiMiddleware(async (request: NextRequest) => {

  const body = await request.json();
  await createNote(body.title);

  return NextResponse.json({}, { status: 200 });

});
