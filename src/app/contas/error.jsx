"use client"

import Button from "@/components/Button";
import NavBar from "@/components/NavBar";

export default function ContaError({error, reset}) {
  return (
    <>
      <NavBar />

      <main className="bg-slate-900 mt-12 m-auto p-4 rounded max-w-md">
        <h2 className="text-xl font-bold">Um erro aconteceu</h2>
        <p>{error.message}</p>

        <div className="flex gap-3 justify-between mt-3">
            <Button variant="secundary" href="/">voltar para home</Button>
            <Button onClick={reset}>tentar novamente</Button>
        </div>
      </main>
    </>
  )
}