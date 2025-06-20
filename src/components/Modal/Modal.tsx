import { Modal as MantineModal } from "@mantine/core"
import { forwardRef, ReactNode, useImperativeHandle, useState } from "react";
import Button, { PropsButton } from "@component/Button/Button";
import { PlusIcon } from "lucide-react";
import "./modal.css";

interface PropsModal {
    title?: string;
    button?: Partial<PropsButton>;
    children: ReactNode;
}

export interface ModalRef {
    open: () => void;
    close: () => void;
}

const Modal = forwardRef<ModalRef, PropsModal>((props: PropsModal, ref) => {

    const buttonConfig:PropsButton = {
        color: props.button?.color ?? "blue",
        disabled: props.button?.disabled ?? false,
        icon: props.button?.icon ?? <PlusIcon />,
        loading: props.button?.loading ?? false,
        onClick: () => setOpen(true),
        text: props.button?.text ?? "",
        variant: props.button?.variant ?? "light"
    };

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: () => setOpen(false)
    }));

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="component-modal">
            <Button {...buttonConfig} />
            <MantineModal
                title={props.title}
                opened={open}
                onClose={() => setOpen(false)}
            >
                {props.children}
            </MantineModal>
        </div>
    )

})

export default Modal;
