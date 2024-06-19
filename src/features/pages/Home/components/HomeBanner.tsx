import {  useNavigate } from "react-router-dom"
import { Button } from "../../../../components/Button"
import { Column } from "../../../../components/Column"
import { Row } from "../../../../components/Row"
import { Separator } from "../../../../components/Separator"
import { LoginIcon } from "../../../../components/assets/icons/login-icon"
import { SignInIcon } from "../../../../components/assets/icons/sign-in-icon"



export const HomeHeader =() =>{
    const navigate = useNavigate()

    return(
        <div className="min-h-[350px] item-center pb-3 justify-center bg-[#992A7F] rounded-b-[36px]">
            <Column classname=" ml-[16px]">
            <h1 className="text-[#FFFEF6] text-[120px] font-extrabold ">LAV</h1>
            <h3  className="text-[#FFFEF6] text-[40px]font-extrabold">Chegou, recolheu, MAGICA!, devolveu!</h3>
           
            <Separator size={20}/>
            <Row classname="w-full  gap-3">
                <div className=" h-[50px]">
                    <Button label="Login" buttonColor="secondary" icon={<LoginIcon size="30" color="#000000"/>} onClick={()=>navigate("/login")}/>
                </div>
                <div className="">

                    <Button label="Cadastre-se" icon={<SignInIcon size="30" color="#000000"/>} buttonColor="secondary" onClick={()=>console.log('click')}/>
                 </div>
                 <div className="]">

                    <Button label="Começar" buttonColor="secondary" onClick={()=>console.log('click')}/>
                 </div>
            </Row> 
            </Column>
        </div>
    )
}