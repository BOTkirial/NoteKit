"use client"

import FormSignUp from "@appComponents/SignUpForm/SignUpForm";
import { useRouter } from "next/navigation";

const SignUp = () => {

    const router = useRouter();

    return (
        <div className="sign-up">
            <FormSignUp onSuccess={() => router.push("/")} />
        </div>
    )
}

export default SignUp;