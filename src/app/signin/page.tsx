"use client"

import Button from "@component/Button/Button";
import API from "@services/client/API";
import { signIn, signOut } from "next-auth/react";

const SignIn = () => {
    return (
        <div className="sign-in">
            <h1>SignIn</h1>
            <Button text="Connexion" onClick={() => signIn("credentials", { username: "admin", password: "admin" })} />
            <Button text="Déconnexion" onClick={() => signOut()} />
            <Button text="query /user" onClick={() =>  API.Get("/user") } />
        </div>
    )
}

export default SignIn;