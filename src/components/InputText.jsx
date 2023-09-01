export default function InputText({label, id, ...props}){
    return (
        <div className="flex flex-col gap-1 my-2">
            <label htmlFor={id} className="text-slate-400">{label}</label>
            <input id={id} type="text" {...props} className="bg-slate-800 px-1 py-2 rounded outline-none focus:ring-1 focus:ring-pink-600" />
        </div>
    )
}