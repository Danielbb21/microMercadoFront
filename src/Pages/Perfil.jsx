import { Navbar } from "../Components/Navbar";
import Login from '../Assets/MM.png'
import { HistoricoComponent } from "../Components/HistoricoComponent";
import { useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import LoadingSpinner from "../Components/Loader";

export const Perfil = (props) => {
  const DUMMY_CART = [{
    id: '1',
    image: Login,
    produto: 'teste',
    descricao: 'descricao teste',
    quantidade: 10,
    tempo: "15/06/2020"
  }, {
    id: '1',
    image: Login,
    produto: 'teste',
    descricao: 'descricao teste',
    quantidade: 10,
    tempo: "15/06/2020"
  }, {
    id: '1',
    image: Login,
    produto: 'teste',
    descricao: 'descricao teste',
    quantidade: 10,
    tempo: "15/06/2020"
  }, {
    id: '1',
    image: Login,
    produto: 'teste',
    descricao: 'descricao teste',
    quantidade: 10,
    tempo: "15/06/2020"
  }, {
    id: '1',
    image: Login,
    produto: 'teste',
    descricao: 'descricao teste',
    quantidade: 10,
    tempo: "15/06/2020"
  }];
  const [dados, setDados] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const id = localStorage.getItem('id');
    axios.get(`http://localhost:3003/carrinho/${id}`)
      .then(res => {
        setIsLoading(false);
        console.log('res', res.data);
        setDados(res.data);
      })
      .catch(err => {
        setIsLoading(false);
        console.log('err', err.message);
      })
  }, [])
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: 'center' }}>HISTÓRICO</h1>
      <div style={{ display: 'flex', fontWeight: 'bold', fontSize: '25px', justifyContent: 'space-evenly', alignItems: 'center', textAlign: 'center' }}>
        <p>Data da compra</p>
        <p>Quantidade comprada</p>
        <p>Valor da compra</p>

      </div>
      <hr style={{ width: '75%' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {isLoading ? <LoadingSpinner /> : dados.length > 0 ? dados.map(e => {
          return (

            <HistoricoComponent image={e.image} produtos={e.produtos} tempo={e.dataCompra} quantidade={e.quantidade} descricao={e.descricao} />

          )
        }) : <h3 style={{ textAlign: 'center' }}>Nenhuma compra encontrada</h3>}

      </div>
    </>
  )
}