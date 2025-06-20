"use client"

import { useForm } from "@mantine/form";
import "./signUpForm.css";
import { useMutation } from "@tanstack/react-query";
import Notification from "@services/client/Notification";
import TextInput from "@component/TextInput/TextInput";
import Button from "@component/Button/Button";
import { ArrowRightIcon, UserIcon, UserRoundPlusIcon } from "lucide-react";
import QueryClientProviderWrapper from "@appComponents/QueryClientProviderWrapper/QueryClientProviderWrapper";
import { Divider } from "@mantine/core";
import { useRouter } from "next/navigation";
import Toggle from "@component/Toggle/Toggle";
import UserRequest from "src/requests/user.request";


interface PropsFormSignUp {
  onSuccess?: () => void;
  onError?: () => void;
}

const BasicSignUpForm = (props: PropsFormSignUp) => {

  const router = useRouter();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
      agree: false
    },
    validate: {
      username: (value) => (value === "" || value === undefined) ? "La valeur ne peut être vide" : false,
      password: (value) => (value === "" || value === undefined) ? "La valeur ne peut être vide" : false,
      confirmPassword: (value, values) => (value === "" || value === undefined) ? "La valeur ne peut être vide" : (value !== values.password) ? "Les mots de passe doivent correspondre" : false,
      agree: (value) => (!value) ? "Vous devez accepter les conditions" : false
    },
  });

  const signUpMutation = useMutation({
    mutationFn: async (data: {name: string, password: string, email?: string}) => UserRequest.Create(data),
    onSuccess: () => {
      Notification.Success("Compte créé. Vous pouvez maintenant vous connecter.")
      props.onSuccess ? props.onSuccess() : null;
    },
    onError: () => {
      Notification.Error("An error occured");
      props.onError ? props.onError() : null;
    }
  });

  return (
    <form
      className="sign-up-form"
      onSubmit={form.onSubmit((values) => signUpMutation.mutateAsync({ name: values.username, password: values.password }) )}
    >
      <TextInput label="username" {...form.getInputProps("username")} />
      <TextInput label="password" {...form.getInputProps("password")} />
      <TextInput label="confirmPassword" {...form.getInputProps("confirmPassword")} />
      <Toggle
        label="J'accepte de vendre mon âme au diable"
        {...form.getInputProps("agree")} />
      <Button
        loading={signUpMutation.isPending}
        type="submit"
        text="Sign In"
        icon={<UserIcon />}
      />
      <Divider />
      <p>Already have an account ?</p>
      <Button
        type="button"
        text="Sign In Instead"
        onClick={() => router.push("signin")}
        icon={<ArrowRightIcon />}
      />
    </form>
  )

}

/**
 * Necessary to wrap the component with a queryClientProvider in order to have access to useMutation or useQuery
 * This allows to not wrap the entire app in a QueryClientProvider because we would lose the SSR from next
 */
export default function FormSignUp(props: PropsFormSignUp) {
  return (
    <QueryClientProviderWrapper>
      <BasicSignUpForm {...props} />
    </QueryClientProviderWrapper>
  );
}