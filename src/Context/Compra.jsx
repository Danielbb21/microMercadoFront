import React, { createContext, useState, useContext } from 'react';

const CarrinhoProductsContext = createContext();



export default function CompraProvider({ children }) {
  const [carrinhoData, setCarrinhoData] = useState([]);

  return (
    <CarrinhoProductsContext.Provider value={{ carrinhoData, setCarrinhoData }}>
      {children}
    </CarrinhoProductsContext.Provider>
  )
}

export function useCompra() {
  const context = useContext(CarrinhoProductsContext);
  const { carrinhoData, setCarrinhoData } = context;
  return {
    carrinhoData,
    setCarrinhoData
  };
}

