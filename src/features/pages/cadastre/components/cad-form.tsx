import React from "react"
import { Row } from "../../../../components/Row"
import { TextInput } from "../../../../components/text-input"
import { NumInput } from "../../../../components/number-input"
import { Button } from "../../../../components/Button"
import { Separator } from "../../../../components/Separator"


export const CadForm =() =>{
    const [login,setLogin] = React.useState<string>('')
    const [email,setEmail] = React.useState<string>('')
    const [cpf, setCPF] = React.useState<string>('')


    return(
        <Row>
            <form action="" className="  w-full">
               <TextInput type="text" label="Nome completo:" className="border-b-[#992A7F] border-b-[3px] w-[250px] " placeholder="Nome Completo" valuetxt={setLogin}/>
               <Separator size={25}/>
               <TextInput type="email" label="Email:" className="border-b-[#992A7F] border-b-[3px]  w-[250px]" placeholder="xxxxxxx@email.com" valuetxt={setLogin}/>
               <Separator size={25}/>

                <NumInput label="CPF:" type="cpf" valuenum={setCPF} className="border-b-[#992A7F] w-[250px] border-b-[3px]" placeholder="000.000.000-00"/>
                <Separator size={25}/>
 
                <NumInput label="Telefone celular:" type="phone" valuenum={setCPF} className="border-b-[#992A7F] w-[250px] border-b-[3px]" placeholder="000 0000-0000"/>
                <Separator size={25}/>

                <TextInput type="password" label="Senha:" className="border-b-[#992A7F] border-b-[3px] w-[250px]" placeholder="senha" valuetxt={setLogin}/>
                <p>ao confirmar, voce automaticamente concordará com os <a href="/terms" className="text-[#992A7F] font-extrabold">termos de uso</a></p>

                <Separator size={30}/>
                <div className="h-[50px] w-[120px]">
                <Button label="Confirmar" buttonColor="primary" onClick={()=>console.log('po')}></Button>

</div>
            </form>
        </Row>
    )
}