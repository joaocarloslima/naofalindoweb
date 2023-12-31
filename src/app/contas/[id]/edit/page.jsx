import { getConta } from "@/actions/contas";
import NavBar from "@/components/NavBar";
import FormContaEdit from "./FormEdit";


export default async function FormContas({params}){
    
    const conta = await getConta(params.id)
   
    return (
        <>
            <NavBar active={"contas"} />
            <FormContaEdit conta={conta} />
            
        </>

    )
}