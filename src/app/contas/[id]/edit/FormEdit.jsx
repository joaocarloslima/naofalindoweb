"use client"

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { update } from "@/actions/contas";

export default function FormContaEdit({conta}) {
    const [erro, setErro] = useState("")
    const [contaEdit, setContaEdit] = useState(conta)
    const { push } = useRouter()

     async function onSubmit(){
        const resp = await update(contaEdit)
        if (resp?.error){
            setErro(resp.message)
            return
        }
        push("/contas")
    }

    function handleFieldChange(field, value){
        setContaEdit({
            ...contaEdit,
            [field]: value
        })
    }


    return (
        <main className="bg-slate-900 mt-10 m-auto max-w-lg p-2 rounded">
            <h2 className="text-2xl font-bold">Editar conta</h2>

            <form action={onSubmit} className="p-4">
                <InputText 
                    name="nome" 
                    label="nome" 
                    id="nome" 
                    value={contaEdit.nome} 
                    onChange={e => handleFieldChange("nome", e.target.value)}
                />
                <InputText 
                    name="icone" 
                    label="ícone" 
                    id="icone" 
                    value={contaEdit.icone}
                    onChange={e => handleFieldChange("icone", e.target.value)}
                />

                <div className="flex justify-around mt-4">
                    <Button href="/contas" variant="secundary">cancelar</Button>
                    <Button type="button">salvar</Button>
                </div>
                <p className="text-red-500">{erro}</p>
            </form>
        </main>
    )
}