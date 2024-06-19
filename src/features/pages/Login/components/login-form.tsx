import React from "react"
import { Row } from "../../../../components/Row"
import { TextInput } from "../../../../components/text-input"
import { NumInput } from "../../../../components/number-input"
import { Separator } from "../../../../components/Separator"
import { Button } from "../../../../components/Button"


export const LoginForm =() =>{
    const [login,setLogin] = React.useState<string>('')
    const [email,setEmail] = React.useState<string>('')
    const [cpf, setCPF] = React.useState<string>('')


    return(
        <Row>
            <form action="" className=" w-full">
               <TextInput type="email" label="Email:" className="border-b-[#992A7F] bg-transparent w-[50%] border-b-[3px]" placeholder="xxxxxxx@email.com" valuetxt={setLogin}/>
               <Separator size={25}/>
                <TextInput type="password" label="Senha:" className="border-b-[#992A7F] bg-transparent w-[50%] border-b-[3px]" placeholder="senha" valuetxt={setLogin}/>
                <p>Nao possui conta? <a href="/cadastro" className="text-bold text-[#992A7F]">Cadastre-se</a></p>
                <Separator size={30}/>
                <div className="h-[50px] w-[120px]">
                <Button label="Confirmar" buttonColor="primary" onClick={()=>console.log('po')}></Button>
</div>
            </form>
        </Row>
    )
}