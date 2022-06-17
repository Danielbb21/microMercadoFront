import {useState} from 'react';
import { Navbar } from "../Components/Navbar";
import Logo from '../Assets/MM.png'
import '../Components/home.css';
import { Products } from "../Components/Products";
import CompraModal from '../Components/CompraModal';

const Data = [{
  id: 1,
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtT_Okoy-bdhjWA9QPv1tXdtoRQd7P6rOXEg&usqp=CAU',
  name: 'teste',
  preco:'Por: R$150'
},
{
  id: 2,
  image: Logo,
  name: 'teste',
  preco:'Por: R$150'
},
{
  id: 3,
  image: Logo,
  name: 'teste',
  preco:'Por: R$150'
},
{
  id: 4,
  image: Logo,
  name: 'teste',
  preco:'Por: R$150'
},
{
  id: 5,
  image: Logo,
  name: 'teste',
  preco:'Por: R$150'
},
{
  id: 8,
  image: Logo,
  name: 'teste',
  preco:'Por: R$150'
},
{
  id: 6,
  image: Logo,
  name: 'teste',
  preco:'Por: R$150'
},
{
  id: 7,
  image: Logo,
  name: 'teste',
  preco:'Por: R$150'
},
]
export const Home = () => {
  
  return (
    <>
    <Navbar />
      <br/>
          <h1 style={{textAlign: 'center'}}>PRODUTOS</h1>
          <hr style={{width: '50%'}}/>
          <div style={{display: 'flex',  flexWrap: 'wrap', width: '80%', margin:'auto', justifyContent:'space-evenly'}}>
          {Data.map(d => {
            return (
                
                <Products  logo = {d.image} name={d.name} value={d.preco} key = {d.id} id={d.id}/>
              
            )
          })}
          </div>
          
        {/* </tr> */}
      {/* </table> */}
    </>
  );
}
