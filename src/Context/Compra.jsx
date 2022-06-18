import React, { createContext, useState, useContext } from 'react';

const CarrinhoProductsContext = createContext();



export default function CompraProvider({ children }) {
  const [carrinhoData, setCarrinhoData] = useState([]);
  const [productData, setProductData] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  return (
    <CarrinhoProductsContext.Provider value={{ carrinhoData, setCarrinhoData, productData, setProductData, isUpdate, setIsUpdate }}>
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

export function useProduto() {
  const context = useContext(CarrinhoProductsContext);
  const { productData, setProductData } = context;
  return {
    productData,
    setProductData
  };
}

export function useUpdate(){
  const context = useContext(CarrinhoProductsContext);
  const { isUpdate, setIsUpdate } = context;
  return {
    isUpdate,
    setIsUpdate
  };
}

