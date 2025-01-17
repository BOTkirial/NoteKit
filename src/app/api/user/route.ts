import { NextResponse } from "next/server";
import { useApiMiddleware } from "../../../services/apiMiddleware";
import { AppDataSource } from "../../../data-source";
import User from "../../../entity/User";

export const GET = useApiMiddleware(async (req) => {

    const user = await AppDataSource.manager.find(User, { where: { name: "admin" } });

    return NextResponse.json(user, { status: 200 });

})
