"use client"

import { useForm } from "@mantine/form";
import "./signInForm.css";
import { useMutation } from "@tanstack/react-query";
import Notification from "@services/client/Notification";
import TextInput from "@component/TextInput/TextInput";
import Button from "@component/Button/Button";
import { UserIcon, UserRoundPlusIcon } from "lucide-react";
import QueryClientProviderWrapper from "@appComponents/QueryClientProviderWrapper/QueryClientProviderWrapper";
import { signIn } from "next-auth/react";
import { Divider } from "@mantine/core";
import { useRouter } from "next/navigation";


interface PropsFormSignIn {
  onSuccess?: () => void;
  onError?: () => void;
}

const BasicSignInForm = (props: PropsFormSignIn) => {

  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: ""
    },
    validate: {
      username: (value) => (value === "" || value === undefined) ? "La valeur ne peut être vide" : false,
      password: (value) => (value === "" || value === undefined) ? "La valeur ne peut être vide" : false
    },
  });

  const signInMutation = useMutation({
    mutationFn: async (values: { username: string; password: string }) => {
      const res = await signIn("credentials", {
        username: values.username,
        password: values.password,
        redirect: false,
      });

      if (!res || res.error) {
        Notification.Error("Invalid credentials");
        form.setErrors({username: "Invalid username...", password: "or password."})
        props.onError ? props.onError() : null;
      } else {
        Notification.Success("Successfully logged in");
        props.onSuccess ? props.onSuccess() : null;
      }

      return res;
    }
  });

    return (
        <form
      className="sign-in-form"
      onSubmit={form.onSubmit((values) => signInMutation.mutateAsync(values))}
    >
      <TextInput label="username" {...form.getInputProps("username")} />
      <TextInput label="password" {...form.getInputProps("password")} />
      <Button
        loading={signInMutation.isPending}
        type="submit"
        text="Sign In"
        icon={<UserIcon />}
      />
      <Divider />
      <p>Don't have an account ?</p>
      <Button
        type="button"
        text="Create one"
        onClick={() => router.push("signup") }
        icon={<UserRoundPlusIcon />}
      />
    </form>
    )

}

/**
 * Necessary to wrap the component with a queryClientProvider in order to have access to useMutation or useQuery
 * This allows to not wrap the entire app in a QueryClientProvider because we would lose the SSR from next
 */
export default function FormSignIn(props: PropsFormSignIn) {
  return (
    <QueryClientProviderWrapper>
      <BasicSignInForm {...props} />
    </QueryClientProviderWrapper>
  );
}