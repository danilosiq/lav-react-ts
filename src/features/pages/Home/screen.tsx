import { Column } from "../../../components/Column"
import { HomeHeader } from "./components/HomeBanner"
import { Row } from "../../../components/Row"
import { Separator } from "../../../components/Separator"
import { Footer } from "../../../components/footer"
import Idea from '../../../components/assets/images/idea.png'
import House from '../../../components/assets/images/house.png'




export function HomeScreen() {

  return (
    <>
      <HomeHeader/>
      <Separator size={22}/>

      <Column classname="px-[136px] w-full items-center ">

      <Row classname="">
        <Column classname=" justify-center">
            <h1 className="text-[30px] font-bold">
                O que é a LAV?
            </h1>

            <p className="text-[20px] ">LAV não é apenas uma empresa, é a garantia que suas
                    roupas
                    estejam no maior cuidado possivel, permitindo que ela
                    estejam em boas condições sem mesmo voce ter uma maquina
                    de
                    lavar!Facilitando aqueles que nao sabem lavar roupas,
                    nao tem tempo para lavar ou nao possuiem uma maquina de
                    levar e secar roupas!</p>
        </Column>
        <img src={House} alt="" className="w-[50%] object-contain"/>

      </Row>

      <Row classname="mx-[16px] h-[]">
        <img src={Idea} alt="" className="w-[50%] object-contain"/>
        <Column classname="w-[50%] justify-center">
            <h1 className="text-[30px] font-bold">
            Como surgiu
            </h1>

            <p className="text-[20px] indent-[56px] ">A LAV surgiu como uma ideia principalmente a um trabalho
                    de
                    faculdade e tudo começou com um grupo de jovens
                    sonhadores
                    na qual teve e brilhante ideia de fazer a LAV A
                    ideia surgiu quando um dos integrantes, avistou uma
                    lavanderia, na qual voce alugava por algum momento a
                    maquina
                    de lavar, com isso, ele pensou mais para frente e
                    pensou:
                  
            </p>
            <p className="items-center text-[20px] py-3 text-center">
                    "Por que nao juntar o delivery, com o
                        serviço
                        de lavagem de roupas?" </p>
                
               <p className="text-[20px]">com a ideia em
                    mão,
                    juntou seus amigos para desenvolver esse projeto
                    brilhante</p> 
        </Column>
       
      </Row> 
      
      </Column>
      <Separator size={50}/>
      <Footer/>
    </>
  )
}


