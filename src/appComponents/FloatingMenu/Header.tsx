"use client";

import { CogIcon, LayoutGridIcon, LogOutIcon, MenuIcon, SearchIcon } from "lucide-react";
import Drawer, { DrawerRef } from "@component/Drawer/Drawer";
import Button from "@component/Button/Button";
import { useRouter } from "next/navigation";
import Modal from "@component/Modal/Modal";
import List from "@component/List/List";
import { useRef } from "react";
import "./header.css";
import { signOut } from "next-auth/react";

const Header = () => {

    const router = useRouter();
    const drawerRef = useRef<DrawerRef>(null);

    return (
        <div className="header">
            <List>
                <Drawer ref={drawerRef} title='NoteKit' button={{ icon: <MenuIcon /> }}>
                    <List direction="vertical">
                        <Button onClick={() => { router.push("/"); drawerRef.current?.close() }} text="Accueil" icon={<LayoutGridIcon />} />
                        <Button onClick={() => { router.push("/settings"); drawerRef.current?.close() }} text="Paramètres" icon={<CogIcon />} />
                        <Button onClick={() => { signOut(); drawerRef.current?.close() }} text="Déconnexion" icon={<LogOutIcon />} />
                    </List>
                </Drawer>
                <Modal button={{ icon: <SearchIcon /> }} />
            </List>
        </div>
    )

}

export default Header;