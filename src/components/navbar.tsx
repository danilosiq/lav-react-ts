import { useNavigate } from "react-router-dom"
import { Button } from "./Button"
import { Row } from "./Row"



export const Navbar =() => {
    const navigate = useNavigate()

    return(
        <Row classname="w-full items-center z-40 px-[16px]  justify-between h-[100px] bg-[#992A7F]">
            <h1 className="text-[40px] font-extrabold text-[#FFFEF6]">L   A    V</h1>
            <Row classname="h-[55px]   justify-between gap-4">

          
               <Button label="inicio" buttonColor="secondary" onClick={()=>navigate('/')
                }/>
                <Button label="Serviço" buttonColor="secondary" onClick={()=>navigate('/servico')
                }/>
                <Button label="Login" onClick={()=>navigate('/login')}
                 buttonColor="secondary"/>
               <Button label="Cadastrar" buttonColor="secondary" onClick={()=>navigate('/cadastro')
                }/>
                





            </Row>
        </Row>

        
    )
}