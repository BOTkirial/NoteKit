"use client"

import AsyncSelect from "@component/AsyncSelect/AsyncSelect";
import Button from "@component/Button/Button";
import StaticSelect from "@component/StaticSelect/StaticSelect";
import Toggle from "@component/Toggle/Toggle";
import useQueryClient from "@hooks/queryClient.hook";
import { useForm } from "@mantine/form";
import Notification from "@services/client/Notification";
import { useMutation } from "@tanstack/react-query";
import { SaveIcon } from "lucide-react";
import NoteRequest from "src/requests/note.request";

const BasicShareForm = () => {

    const form = useForm({
        mode: "uncontrolled",
        initialValues: {
            shareTo: null,
            shareAsWrite: false
        },
        validate: {
            shareTo: (value) => !value ? "le shareTo ne peut pas être vide" : false
        },
    });

    const queryClient = useQueryClient();

    const shareMutation = useMutation({
        mutationFn: NoteRequest.Share,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["notes"] });
            Notification.Success("Note créée");
        },
        onError: (e) => {
            Notification.Error(e.message, "Erreur");
        },
    });

    return (
        <form className="share-form" onSubmit={form.onSubmit((values) => console.log(values) )}>

            Utilisateur :
            <AsyncSelect route="/users" type="singleSelect" {...form.getInputProps("shareTo")} />
            
            <Toggle label="Lecture / Écriture :" onLabel="Partager également en écriture" offLabel="Partager uniquement en lecture" {...form.getInputProps("shareAsWrite")} />

            <Button
                loading={shareMutation.isPending}
                type="submit"
                text="Partager la note"
                icon={<SaveIcon />}
            />

        </form>
    )
}

export default BasicShareForm;