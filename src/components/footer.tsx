import { Column } from "./Column"
import { Row } from "./Row"

export const Footer = () =>{

    return(
        <Row classname="h-[300px] justify-evenly items-center text-[#FFFEF6] rounded-t-[36px] w-full bg-[#992A7F]">
            
            <Column>
            <h1 className="text-[80px] font-extrabold">LAV</h1>

    <h2 className="font-bold text-[30px]"> Chegou, recolheu <br /> MAGICA! <br /> devolveu!</h2>

            </Column>

            <Column>
            <h1 className="text-[40px] font-extrabold">Suporte:</h1>
            <h3>41 9 9876-1943</h3>
            </Column>


            <Column>
            <h1 className="text-[40px] font-extrabold">Responsaveis</h1>
            <h3>Danilo Dante Siqueira</h3>
            <h3>Guilherme Cordeiro Ferreira</h3>
            </Column>
        </Row>
    )
}