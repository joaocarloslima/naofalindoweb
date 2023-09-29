"use client"

import Image from "next/image";
import loginimage from "@/images/login.jpg"
import InputText from "@/components/InputText";
import Button from "@/components/Button";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useToast } from "@/hooks/toast";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export default function LoginPage(){
    const { register, handleSubmit } = useForm()
    const { push } = useRouter()
    const { error } = useToast()
    const { login } = useContext(AuthContext)

    async function onSubmit(data){
        const resp = await login(data)

        console.log(resp)
        
        if (resp?.error) {
            error(resp.error)
            return
        }
        
        push("/")

    }

    return (
        <div className="flex h-screen">
            <aside className="">
                <Image src={loginimage} alt="" className="h-full w-full object-cover" />
            </aside>

            <main className="flex flex-col items-center justify-center w-full">
                <h1 className="text-5xl font-bold mb-5">Não Falindo</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputText register={register} name="email" label="email" />
                    <InputText register={register} name="senha" label="senha" type="password" />
                    <Button type="button">entrar</Button>
                </form>
            </main>
        </div>
    )
}