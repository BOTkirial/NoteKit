import Button from "@component/Button/Button";
import TextInput from "@component/TextInput/TextInput";
import { SaveIcon } from "lucide-react";
import { useForm } from "@mantine/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import QueryClientProviderWrapper from "@appComponents/QueryClientProviderWrapper/QueryClientProviderWrapper";
import Notification from "@services/client/Notification";
import NoteRequest from "src/requests/note.request";

interface PropsFormNewNote {
  onSuccess?: () => void;
  onError?: () => void;
}

const BasicFormNewNote = (props: PropsFormNewNote) => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      title: "",
    },
    validate: {
      title: (value) => value === "" || value === undefined ? "La valeur ne peut être dada" : false,
    },
  });

  const queryClient = useQueryClient();

  const newNoteMutation = useMutation({
    mutationFn: NoteRequest.Create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] });
      Notification.Success("Note créée");
      props.onSuccess ? props.onSuccess() : null;
    },
    onError: (e) => {
      Notification.Error(e.message, "Erreur");
      props.onError ? props.onError() : null;
    },
  });

  return (
    <form
      className="form-new-note"
      onSubmit={form.onSubmit((values) =>
        newNoteMutation.mutateAsync({ title: values.title })
      )}
    >
      <TextInput label="Titre" {...form.getInputProps("title")} />
      <Button
        loading={newNoteMutation.isPending}
        type="submit"
        text="Enregistrer la note"
        icon={<SaveIcon />}
      />
    </form>
  );
};

/**
 * Necessary to wrap the component with a queryClientProvider in order to have access to useMutation or useQuery
 * This allows to not wrap the entire app in a QueryClientProvider because we would lose the SSR from next
 */
export default function FormNewNote(props: PropsFormNewNote) {
  return (
    <QueryClientProviderWrapper>
      <BasicFormNewNote {...props} />
    </QueryClientProviderWrapper>
  );
}
