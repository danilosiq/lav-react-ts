import { Column } from '../../../../components/Column';
import { Row } from '../../../../components/Row';
import Jjeans from '../../../../components/assets/images/Jjeans.png';
import Cjeans from '../../../../components/assets/images/Cjeans.png';
import Moletom from '../../../../components/assets/images/moletom.png';
import Meia from '../../../../components/assets/images/meias.png';
import Bermuda from '../../../../components/assets/images/bermuda.png';
import Camiseta from '../../../../components/assets/images/camiseta.png';
import calcinha from  '../../../../components/assets/images/calcinha.png';
import cueca from  '../../../../components/assets/images/cueca.png';

import Couro from '../../../../components/assets/images/Jcouro.png';
import FlatList from 'flatlist-react/lib';
import { Navbar } from '../../../../components/navbar';
import React from 'react';
import { Button } from '../../../../components/Button';

export interface RoupasI {
    data: (selectedItems: {id:number; nome: string; preco: number; }[]) => void;
}

export const RoupasArea = ({ data, }: RoupasI) => {

  const handleADD = (id: number,nome: string, preco: number) => {
    const roupaSele = [{
        id:id,
        nome: nome,
        preco:preco
    }]

    data(roupaSele)
  };



  

  return (
    <>
      <div>
        <FlatList
          list={RoupasArr}
          renderItem={(roupa, index) => (
            <Column key={index} classname="w-[200px] pb-[16px] rounded-lg bg-[#F4EBF2]">
              <img src={roupa.image} alt="" className="object-cover rounded-t-lg" />
              <div className="px-[6px] h-full">
                <h1 className="font-extrabold">{roupa.nome}</h1>
                <p className="text-[#7B7B7B]">{roupa.desc}</p>
              </div>
              <h2 className="font-extrabold text-[#992A7F] px-[6px] py-[2px]">
                R${' '}
                {roupa.preco.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}
              </h2>
              <div className="h-[30px] px-[6px]">
                <Button label="Adicionar" onClick={() => handleADD(roupa.id,roupa.nome, roupa.preco)} buttonColor="primary" />
              </div>
            </Column>
          )}
          displayGrid
        />
        
      </div>
    </>
  );
};

export const RoupasArr = [
    {
      id: 1,
      image: Camiseta,
      nome: 'Camisetas',
      desc: 'mangas curtas e compridas de materiais leves, algodao, setim e etc...',
      preco: 6.00
    },
    {
      id: 2,
      image: Bermuda,
      nome: 'Bermudas',
      desc: 'qualquer material que nao seja jeans',
      preco: 5.00
    },
    {
      id: 3,
      image: Meia,
      nome: 'Meias',
      desc: 'pares de meias, qualquer material',
      preco: 1.00
    },
    {
      id: 4,
      image: cueca,
      nome: 'Cuecas',
      desc: 'qualquer material, qualquer modelo',
      preco: 2.00
    },
    {
      id: 5,
      image: calcinha ,
      nome: 'Calcinhas',
      desc: 'qualquer material, qualquer modelo',
      preco: 2.00
    },
    {
      id: 6,
      image: Moletom,
      nome: 'Casacos de moletom',
      desc: 'apenas MOLETOM',
      preco: 8.00
    },
    {
      id: 7,
      image: Couro,
      nome: 'Casacos de couro',
      desc: 'apenas COURO',
      preco: 10.00
    },
    {
      id: 8,
      image: Jjeans,
      nome: 'Casacos jeans',
      desc: 'apenas JEANS',
      preco: 8.50
    },
    {
      id: 9,
      image: Cjeans,
      nome: 'Calça jeans',
      desc: 'apenas JEANS',
      preco: 8.50
    }
  ];
  