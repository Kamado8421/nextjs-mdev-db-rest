'use client'
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { FaSignOutAlt } from "react-icons/fa";

export default function Logout() {

    const handleSignOut = () => {
        const exitConfirm = confirm('Certeza que deseja sair?');

        if(exitConfirm){
            signOut()
            redirect('/')
        }
    }

    return (
        <FaSignOutAlt
            size={20}
            className="cursor-pointer"
            onClick={() => handleSignOut()}
        />
    )
}