"use client"

import FormSignIn from "@appComponents/SignInForm/SignInForm";
import { useRouter } from "next/navigation";

const SignIn = () => {
    
    const router = useRouter();
    
    return (
        <div className="sign-in">
            <FormSignIn onSuccess={() => router.push("/")} />
        </div>
    )
}

export default SignIn;