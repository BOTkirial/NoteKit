import { Drawer as MantineDrawer } from "@mantine/core"
import { forwardRef, ReactNode, useImperativeHandle, useState } from "react";
import Button, { PropsButton } from "@component/Button/Button";
import { MenuIcon } from "lucide-react";

interface PropsDrawer {
    position?: "right" | "left";
    title?: string;
    button?: Partial<PropsButton>;
    children: ReactNode;
}

export interface DrawerRef {
    open: () => void;
    close: () => void;
}

const Drawer = forwardRef<DrawerRef, PropsDrawer>((props: PropsDrawer, ref) => {

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true),
        close: () => setOpen(false)
    }));

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
            >
                {props.children}
            </MantineDrawer>
        </div>
    )

})

export default Drawer;