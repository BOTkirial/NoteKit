import { NextRequest, NextResponse } from "next/server";
import { withApiMiddleware } from "../../../services/api/apiMiddleware";
import { getUserLopAction, getUserRoles } from "../../../services/userRoleService";
import { getUserByName } from "../../../services/userService";
import { getActionById } from "../../../services/actionService";

export const GET = withApiMiddleware(async (req:NextRequest) => {

    // const user = await AppDataSource.manager.find(User, { where: { name: "admin" } });

    const user = await getUserByName("admin");
    // console.log(user)
    const roles = await getUserRoles(user);
    const action = await getActionById(1);

    // createRole("tst role");
    const result = await getUserLopAction(user, action);

    return NextResponse.json({success: result}, { status: 200 });

})
