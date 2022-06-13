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
      
          <div style={{display: 'flex',  flexWrap: 'wrap', width: '100%', justifyContent:'space-evenly'}}>
          {Data.map(d => {
            return (
              // <th>
                <Products  logo = {d.image} name={d.name} value={d.preco} key = {d.id}/>
              // </th>
            )
          })}
          </div>
          
        {/* </tr> */}
      {/* </table> */}
    </>
  );
}
