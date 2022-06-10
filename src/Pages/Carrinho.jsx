import { Navbar } from "../Components/Navbar";
import Login from '../Assets/MM.png'
import { CartComponent } from "../Components/CartComponent";
export const Carrinho = ({ props }) => {
  const DUMMY_CART = [{
    id:'1',
    image: Login, 
    produto: 'teste', 
    quantidade: 10
  }];
  return (
    <>
      <Navbar />
      <h2>Meu carrinho</h2>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        {DUMMY_CART.map(e => {
          return (
            <CartComponent image={e.image} produto = {e.produto} quantidade={e.quantidade}/>
          )
        })}
      </div>
    </>
  )
}

