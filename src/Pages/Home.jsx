import { useState, useEffect } from 'react';
import { Navbar } from "../Components/Navbar";
import Logo from '../Assets/MM.png'
import '../Components/home.css';
import { Products } from "../Components/Products";
import CompraModal from '../Components/CompraModal';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../Components/Loader';
import { useNavigate } from 'react-router-dom';
import { useProduto, useUpdate } from '../Context/Compra';

// const Data = [{
//   id: 1,
//   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtT_Okoy-bdhjWA9QPv1tXdtoRQd7P6rOXEg&usqp=CAU',
//   name: 'teste',
//   preco:'Por: R$150'
// },
// {
//   id: 2,
//   image: Logo,
//   name: 'teste',
//   preco:'Por: R$150'
// },
// {
//   id: 3,
//   image: Logo,
//   name: 'teste',
//   preco:'Por: R$150'
// },
// {
//   id: 4,
//   image: Logo,
//   name: 'teste',
//   preco:'Por: R$150'
// },
// {
//   id: 5,
//   image: Logo,
//   name: 'teste',
//   preco:'Por: R$150'
// },
// {
//   id: 8,
//   image: Logo,
//   name: 'teste',
//   preco:'Por: R$150'
// },
// {
//   id: 6,
//   image: Logo,
//   name: 'teste',
//   preco:'Por: R$150'
// },
// {
//   id: 7,
//   image: Logo,
//   name: 'teste',
//   preco:'Por: R$150'
// },
// ]


export const Home = () => {
  const { productData, setProductData } = useProduto();
  const [isLoading, setIsLoading] = useState(false);
  const { isUpdate, setIsUpdate } = useUpdate();
  useEffect(() => {
    setIsLoading(true);
    setIsUpdate(false);
    axios.get('http://localhost:3005/produto')
      .then(res => {
        setIsLoading(false);
        console.log('res.data', res.data);
        setProductData(res.data);
      })
      .catch(err => {
        setIsLoading(false);
        console.log('err', err.message);
        toast.error("Algo deu errado", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,

          progress: undefined,
        });
      })
  }, [isUpdate])
  return (
    <>
      <Navbar />
      <br />
      <h1 style={{ textAlign: 'center' }}>PRODUTOS</h1>
      <hr style={{ width: '50%' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', width: '80%', margin: 'auto', justifyContent: 'space-evenly' }}>
        {isLoading ? <LoadingSpinner /> :

          productData.length > 0 ? productData.map(d => {
            return (

              <Products logo={d.imagem} name={d.Nome} value={+d.preco} key={d.id} id={d.id} />

            )
          }) : <h3 style={{ textAlign: 'center' }}>Nenhum produto cadastrado</h3>

        }

      </div>

      {/* </tr> */}
      {/* </table> */}
    </>
  );
}
