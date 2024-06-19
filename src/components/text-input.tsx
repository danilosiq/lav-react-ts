import React from "react"

export interface inputTXTi {
    type: "text" | "email"| "password"
    className?: string
    label?:string,
    placeholder?: string
    valuetxt: (value: string) => void
    disable?: boolean
}

export const TextInput = ({type,label,valuetxt ,disable, className, placeholder}:inputTXTi) =>{
const [value, setValue] = React.useState<string>('')

React.useEffect(()=>{
    valuetxt(value)
    console.log(value);
    
},[setValue])
    return(
        <>
        <p>{label}</p>
        <input type={type} disabled={disable} className={className} value={value} onChange={(e)=> setValue(e.target.value)} placeholder={placeholder}/>
    </>)
}