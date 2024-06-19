import React from "react"
import ReactInputMask from "react-input-mask"

export interface inputNUMi {
    type: "phone" | "cpf" | "cep"
    className?: string
    label?:string,
    placeholder?: string
    valuenum: (value: string) => void
}

export const NumInput = ({type,label,valuenum , className, placeholder}:inputNUMi) =>{
const [value, setValue] = React.useState<string>('')

let mask = '';

switch (type) {
    case 'cpf':
      mask = '999.999.999-99';
      break;
    case 'phone':
      mask = '999 9999-9999';
      break;
    case 'cep':
      mask = '99 999-999';
      break;
    default:
      break;
  }

React.useEffect(()=>{
    valuenum(value)
    console.log(value);
    
},[value])
    return(
        <>
        <p>{label}</p>
        <ReactInputMask mask={mask} type='text'  maskChar={null} className={className} value={value} onChange={(e)=> setValue(e.target.value)} placeholder={placeholder}/>
    </>)
}