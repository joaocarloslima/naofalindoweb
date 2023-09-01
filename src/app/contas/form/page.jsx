"use client"

import { create } from "@/actions/contas";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormContas(){
    const [erro, setErro] = useState("")

    async function onCreate(formData){
        const resp = await create(formData)
        if (resp.message === "ok"){
            redirect("/contas")
            return
        }
        setErro(resp.message)
    }
   
    return (
        <>
            <NavBar active={"contas"} />
            
            <main className="bg-slate-900 mt-10 m-auto max-w-lg p-2 rounded">
                <h2 className="text-2xl font-bold">Criar conta</h2>

                <form action={onCreate} className="p-4">
                    <InputText name="nome" label="nome" id="nome"/>
                    <InputText name="saldoInicial" label="saldo inicial" id="saldo-inicial"/>
                    <InputText name="icone" label="ícone" id="icone"/>

                    <div className="flex justify-around mt-4">
                        <Button href="/contas" variant="secundary">cancelar</Button>
                        <Button type="button">salvar</Button>
                    </div>
                    <p className="text-red-500">{erro}</p>
                </form>
            </main>
        </>

    )
}