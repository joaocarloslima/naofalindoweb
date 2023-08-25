import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getContas(){
  const url = "http://localhost:8080/api/contas"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  return resp.json()
}

export default async function Contas() {
  const data = await getContas()

  return (
    <>
      <NavBar active={"contas"} />

      <main className="bg-slate-900 m-12 p-4 rounded">
        <h2 className="text-2xl font-bold">Contas</h2>
        <div id="data">
          {data.map(conta => <DataRow conta={conta} />)}
        </div>
      </main>
    </>
  )
}
