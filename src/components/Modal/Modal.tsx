import { Modal as MantineModal } from "@mantine/core"
import { useState } from "react";
import Button, { PropsButton } from "@component/Button/Button";
import { MenuIcon } from "lucide-react";

interface PropsModal {
    title?: string;
    button?: Partial<PropsButton>;
}

const Modal = (props: PropsModal) => {

    const buttonConfig:PropsButton = {
        color: props.button?.color ?? "blue",
        disabled: props.button?.disabled ?? false,
        icon: props.button?.icon ?? <MenuIcon />,
        loading: props.button?.loading ?? false,
        onClick: () => setOpen(true),
        text: props.button?.text ?? "",
        variant: props.button?.variant ?? "light"
    };
    
    const [open, setOpen] = useState<boolean>(false);

    return (
        <div className="component-modal">
            <Button {...buttonConfig} />
            <MantineModal
                opened={open}
                onClose={() => setOpen(false)}
            />
        </div>
    )

}

export default Modal;