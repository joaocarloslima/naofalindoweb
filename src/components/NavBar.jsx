"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function NavBar({ active }) {
    const {user, logout} = useContext(AuthContext)
    const { push } = useRouter()

    function handleLogout(){
        console.log("logout")
        logout()
        push("/login")
    }

    return (
        <nav className="flex justify-between items-center bg-slate-900 p-6">
            <ul className="flex items-end gap-12 text-slate-500">
                <li>
                    <Link href="/">
                        <h1 className="text-2xl text-slate-100">
                            Não Falindo
                        </h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="despesas" && "text-slate-100"} href="/despesas">
                        despesas
                    </Link>
                </li>
                <li>
                    <Link className={active=="contas" && "text-slate-100"} href="/contas">
                        contas
                    </Link>
                </li>
                <li>
                    <Link className={active=="categorias" && "text-slate-100"} href="/categorias">
                        categorias
                    </Link>
                </li>
                
            </ul>

            <div className="flex gap-2 items-center">
                <span>{user?.email}</span>
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                </div>
                <Button onClick={handleLogout} type="button">logout</Button>
            </div>

        </nav>
    )
}