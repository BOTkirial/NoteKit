import { NextRequest, NextResponse } from "next/server";
import { useApiMiddleware } from "../../../services/api/apiMiddleware";
import { AppDataSource } from "../../../data-source";
import User from "../../../entity/User";
import { createRole } from "../../../services/roleService";

export const GET = useApiMiddleware(async (req:NextRequest) => {

    // const user = await AppDataSource.manager.find(User, { where: { name: "admin" } });


    createRole("tst role");

    return NextResponse.json({success: true}, { status: 200 });

})
