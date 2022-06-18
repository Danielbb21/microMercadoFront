import { Navbar } from "../Components/Navbar";
import Login from '../Assets/MM.png'
import { CartComponent } from "../Components/CartComponent";
import { useCompra } from "../Context/Compra";
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../Components/Loader';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

export const Carrinho = ({ props }) => {
  const DUMMY_CART = [{
    id: '1',
    image: Login,
    produto: 'teste',
    quantidade: 10,
    preco: 15
  }, {
    id: '1',
    image: Login,
    produto: 'teste',
    quantidade: 10,
    preco: 16
  }, {
    id: '1',
    image: Login,
    produto: 'teste',
    quantidade: 10,
    preco: 22
  }, {
    id: '1',
    image: Login,
    produto: 'teste',
    quantidade: 10,
    preco: 8
  }];

  const { carrinhoData, setCarrinhoData } = useCompra();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  let totalPrice = carrinhoData.map(c => {
    return +c.preco * c.quantidade;
  })
  if (totalPrice.length > 0) {
    totalPrice = totalPrice.reduce(function (acumulador, valorAtual, index, array) {
      return acumulador + valorAtual;
    });
  }
  const handleCompra = () => {
    let products = [];
    for (const c of carrinhoData) {
      let id = c.id;
      let qtd = c.quantidade;
      products.push({ produtoId: id, quantidade: qtd });
    }

    const id = localStorage.getItem('id');
    const obj = {
      clientId: id,
      produtos: products
    };

    console.log('obj', obj);
    setIsLoading(true);

    axios.post('http://localhost:3003/carrinho', {
      clientId: id,
      produtos: products
    })
      .then(res => {
        console.log('res', res.data);
        setIsLoading(false);
        toast.success("Compra realizada com sucesso", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,

          progress: undefined,
        });
        navigate('/');
        setCarrinhoData([]);
      })
      .catch(err => {
        console.log('err', err.message);
        setIsLoading(false);
      })

  }

  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>CARRINHO</h1>
      <div style={{ display: 'flex', fontWeight: 'bold', fontSize: '25px', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center' }}>
        <p>Produto</p>
        <p>Quantidade</p>
        <p>
          Preco unitário

        </p>
      </div>
      <hr style={{ width: '75%' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {carrinhoData.length > 0 ? carrinhoData.map((e, index) => {
          // if(e.length > 0){

          return (
            <CartComponent image={e.image} produto={e.produto} quantidade={e.quantidade} preco={e.preco} key={index} />
          )



        }) : <h3 style={{ textAlign: 'center' }}>Nenhum elemento no carrinho</h3>}
      </div>
      {isLoading ? <LoadingSpinner /> :
        <div style={{ textAlign: 'center', marginBottom: '3%' }}>
          <p>Total: <strong>{carrinhoData.length > 0 ? `R$ ${totalPrice.toFixed(2).toString().replace('.', ',')}` : 'R$ 0,00'}  </strong></p>
          {carrinhoData.length > 0 && <button style={{ width: "15%", height: '50px', borderRadius: '30px', cursor: 'pointer', border: 'none', backgroundColor: '#FDFD96', fontSize: '18px', fontWeight: 'bold' }} onClick={handleCompra}>Comprar</button>}

        </div>
      }
    </>
  )
}

