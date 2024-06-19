import React from "react";
import { TextInput } from "../../../../components/text-input";
import cep from "cep-promise";
import { NumInput } from "../../../../components/number-input";
import { Row } from "../../../../components/Row";
import { Column } from "../../../../components/Column";
import { Button } from "../../../../components/Button";

export const LocalForm = () => {
    const [num, setNum] = React.useState('');
    const [address, setAddress] = React.useState({ rua: '', bairro: '', cidade: '', estado: '' });
    const [complement,setComplement] = React.useState<string>('')
    const [cepCAMP, setCepCAMP] = React.useState<string>('');

    const [show,setShow] = React.useState<boolean>(false)

    const handleData = (data: string) => {
        const sanitizedCep = data.replace(/\s|-/g, ''); // Remove espaços e traços
        setCepCAMP(sanitizedCep);
    };

    const handleCEP = async () => {
        try {
            const result = await cep(cepCAMP);
            setAddress({
                rua: result.street,
                bairro: result.neighborhood,
                cidade: result.city,
                estado: result.state
            });
            setShow(true)
            console.log(address);
            
        } catch {
            console.log('Erro ao buscar o CEP');
        }
    };

    return (
        <>
            <NumInput type="cep" label="CEP" valuenum={handleData} className="border-b-[3px] w-full border-[#992A7F]" />
            <div className="py-[6px]">
            <Button onClick={handleCEP} buttonColor="primary" label="Buscar Endereço"/></div>
            {show===true &&(
            <div className="border-[3px] rounded-xl border-[#992A7F]">
            <Column classname="p-[6px]">
                
                    <>
                    <Row classname="">
                    <p className="pr-[19px]">{address.rua}</p> 
                    <TextInput type="text" valuetxt={setNum} label="N°" className="border border-[#992A7F] rounded-lg w-[50px] focus:outline-none focus:bg-[#FFFCEB]" />
                    </Row>
                <p>{address.cidade} - {address.estado}</p>
                <TextInput label="Complemento" valuetxt={setComplement} placeholder="complemento" type="text"/>
                </>

                
               </Column> 

               </div>
               )}
            
            
            
 </>
    );
};
