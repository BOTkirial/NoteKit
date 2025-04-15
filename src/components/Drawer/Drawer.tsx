import { Drawer as MantineDrawer } from "@mantine/core"
import { useState } from "react";
import Button, { PropsButton } from "@component/Button/Button";
import { MenuIcon } from "lucide-react";

interface PropsDrawer {
    position?: "right" | "left";
    title?: string;
    button?: Partial<PropsButton>;
}

const Drawer = (props: PropsDrawer) => {

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
        <div className="component-drawer">
            <Button {...buttonConfig} />
            <MantineDrawer
                title={props.title}
                position={props.position}
                opened={open}
                onClose={() => setOpen(false)}
            />
        </div>
    )

}

export default Drawer;