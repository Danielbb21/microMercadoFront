import { Navbar } from "../Components/Navbar";
import Logo from '../Assets/MM.png'
import '../Components/home.css';
import { Products } from "../Components/Products";

const Data = [{
  id: 1,
  image: Logo,
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
  id: 5,
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
  id: 5,
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
                
                <Products  logo = {d.image} name={d.name} value={d.preco} key = {d.id}/>
              
            )
          })}
          </div>
          
        {/* </tr> */}
      {/* </table> */}
    </>
  );
}
