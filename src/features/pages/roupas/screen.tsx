import React from "react";
import { RoupasArea } from "./components/roupas";
import { Column } from "../../../components/Column";
import { Row } from "../../../components/Row";
import { Navbar } from "../../../components/navbar";
import { Separator } from "../../../components/Separator";
import { TrashIcon } from "../../../components/assets/icons/trash";
import { LoginForm } from "../Login/components/login-form";
import { Footer } from "../../../components/footer";
import { Button } from "../../../components/Button";
import { useNavigate } from "react-router-dom";

export const ServiceScreen = () => {
    const navigate = useNavigate()

  const [selected, setSelected] = React.useState<{id: number, nome: string; preco: number; quantidade: number; }[]>([]);
  const [finalPrice, setFinalPrice] = React.useState<number>(0.00);

  const handleSelected = (selectedItems: { id: number; nome: string; preco: number; }[]) => {
    // Adiciona os novos itens à lista existente com quantidade inicial 1
    const newSelectedItems = selectedItems.map(item => ({
      ...item,
      quantidade: 1  // Definindo a quantidade inicial como 1
    }));
    setSelected(prevSelected => [...prevSelected, ...newSelectedItems]);
    updateFinalPrice([...selected, ...newSelectedItems]);
  };

  const removeItem = (itemName: string) => {
    const newSelected = selected.filter(item => item.nome !== itemName);
    setSelected(newSelected);
    updateFinalPrice(newSelected);
  };

  const incrementQuantity = (index: number) => {
    const newSelected = [...selected];
    newSelected[index].quantidade++;
    setSelected(newSelected);
    updateFinalPrice(newSelected);
  };

  const decrementQuantity = (index: number) => {
    const newSelected = [...selected];
    if (newSelected[index].quantidade > 1) {
      newSelected[index].quantidade--;
      setSelected(newSelected);
      updateFinalPrice(newSelected);
    }
  };

  const updateFinalPrice = (items: { nome: string; preco: number; quantidade: number; }[]) => {
    const total = items.reduce((sum, item) => sum + item.preco * item.quantidade, 0);
    setFinalPrice(total);
  };

  return (
    <>
      <Navbar />
      <Separator size={30} />
      <Row classname="px-[16px]">
        <div className="w-[50%]">
          <RoupasArea data={handleSelected} />

        </div>
        <Column classname="w-[50%] ">
          <h2 className="text-[60px] font-extrabold text-[#992A7F]">Itens selecionados:</h2>
          <Row classname="items-center">
          <h2 className="text-[20px] font-extrabold ">Total: </h2>
          <h2 className="text-[30px] text-[#992A7F] font-extrabold ">R${finalPrice.toFixed(2)}</h2>
</Row>
<div className="h-[30px] w-[30%]">
<Button label="Confirmar" buttonColor="primary" onClick={()=>navigate('/compra')}/>
</div>
<Separator size={30}/>
          
          <div>
            <Column classname="gap-4">
              {selected.map((item, index) => (
                <Row key={index} classname="rounded-lg w-[450px] pl-[16px] items-center h-[100px] justify-between bg-[#F4EBF2]">
                  <p className="px-[6px]">{item.nome} - R${item.preco.toFixed(2)}</p>
                  <button onClick={() => decrementQuantity(index)} disabled={item.quantidade <= 1}>-</button>
                  <span className="bg-white p-[10px] rounded-lg">{item.quantidade}</span>
                  <button onClick={() => incrementQuantity(index)}>+</button>
                  <Row classname="bg-[#CB4949] h-full w-[50px] items-center justify-center text-center">
                    <button onClick={() => removeItem(item.nome)}><TrashIcon size="22px" color='none'/></button>
                  </Row>
                </Row>
              ))}
            </Column>
          </div>
          
        </Column>
      </Row>
      <Footer/>
    </>
  );
};
