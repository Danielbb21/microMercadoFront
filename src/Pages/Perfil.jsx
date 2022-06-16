import { Navbar } from "../Components/Navbar";
import Login from '../Assets/MM.png'
import { CartComponent } from "../Components/CartComponent";

export const Perfil = ( props ) => {
    const DUMMY_CART = [{
      id:'1',
      image: Login, 
      produto: 'teste', 
      quantidade: 10
    },{
      id:'1',
      image: Login, 
      produto: 'teste', 
      quantidade: 10
    },{
      id:'1',
      image: Login, 
      produto: 'teste', 
      quantidade: 10
    },{
      id:'1',
      image: Login, 
      produto: 'teste', 
      quantidade: 10
    }];
    return (
      <>
        <Navbar />
        <h1 style={{textAlign: 'center'}}>CARRINHO</h1>
        <hr style={{width: '50%'}}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {DUMMY_CART.map(e => {
            return (
              <CartComponent image={e.image} produto = {e.produto} quantidade={e.quantidade}/>
            )
          })}
        </div>
        <div style={{textAlign: 'center', marginBottom: '3%'}}>
          <p>Total: </p>
          <button style = {{width: "15%", height: '50px', borderRadius: '30px', cursor: 'pointer', border: 'none', backgroundColor: '#FDFD96', fontSize: '18px', fontWeight: 'bold'}}>Comprar</button>
        </div>
      </>
    )
  }