import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { PlusIcon } from "@heroicons/react/24/outline";

async function getContas() {
  const url = "http://localhost:8080/api/contas"
  const resp = await fetch(url)
  return resp.json()
}

export default async function Contas() {
  const data = await getContas()

  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 m-12 p-4 rounded">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Contas</h2>
          <Button 
            icon={<PlusIcon className="h6 w-6" />}
            href="/contas/form"
          >
            criar conta
          </Button>
        </div>

        <div id="data">
          {data.map(conta => <DataRow conta={conta} />)}
        </div>
      </main>
    </>
  )
}
