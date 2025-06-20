"use client";

import { CogIcon, FileIcon, LayoutGridIcon, LogInIcon, LogOutIcon, MenuIcon, SearchIcon, UserIcon } from "lucide-react";
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
                        <Button onClick={() => { router.push("/notes"); drawerRef.current?.close() }} text="Mes notes" icon={<LayoutGridIcon />} />
                        <Button onClick={() => { router.push("/account"); drawerRef.current?.close() }} text="Mon compte" icon={<UserIcon />} />
                        <Button onClick={() => { router.push("/contentTypes"); drawerRef.current?.close() }} text="Types de contenu" icon={<FileIcon />} />
                        <Button onClick={() => { signOut({callbackUrl: "/"}); drawerRef.current?.close() }} text="Déconnexion" icon={<LogOutIcon />} />
                    </List>
                </Drawer>
                <Modal button={{ icon: <SearchIcon /> }}>
                  boop
                </Modal>
            </List>
        </div>
    )

}

export default Header;
