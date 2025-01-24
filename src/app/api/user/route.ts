import { NextRequest, NextResponse } from "next/server";
import { useApiMiddleware } from "../../../services/api/apiMiddleware";
import { AppDataSource } from "../../../data-source";
import User from "../../../entity/User";

export const GET = useApiMiddleware(async (req:NextRequest) => {

    const user = await AppDataSource.manager.find(User, { where: { name: "admin" } });

    return NextResponse.json(user, { status: 200 });

})
