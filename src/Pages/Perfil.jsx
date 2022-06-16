import { Navbar } from "../Components/Navbar";
import Login from '../Assets/MM.png'
import { HistoricoComponent } from "../Components/HistoricoComponent";

export const Perfil = ( props ) => {
    const DUMMY_CART = [{
      id:'1',
      image: Login, 
      produto: 'teste',
      descricao: 'descricao teste', 
      quantidade: 10,
      tempo: "15/06/2020"
    },{
      id:'1',
      image: Login, 
      produto: 'teste',
      descricao: 'descricao teste', 
      quantidade: 10,
      tempo: "15/06/2020"
    },{
      id:'1',
      image: Login, 
      produto: 'teste',
      descricao: 'descricao teste', 
      quantidade: 10,
      tempo: "15/06/2020"
    },{
      id:'1',
      image: Login, 
      produto: 'teste',
      descricao: 'descricao teste', 
      quantidade: 10,
      tempo: "15/06/2020"
    },{
      id:'1',
      image: Login, 
      produto: 'teste',
      descricao: 'descricao teste', 
      quantidade: 10,
      tempo: "15/06/2020"
    }];
    return (
      <>
        <Navbar />
        <h1 style={{textAlign: 'center'}}>HISTÓRICO</h1>
        <div style={{display: 'flex', fontWeight: 'bold', fontSize: '25px', justifyContent: 'space-evenly',alignItems: 'center', textAlign: 'center'}}>
          <p>Produto</p>
          <p>Descrição</p>
          <p>Quantidade</p>
          <p>Data</p>
        </div>
        <hr style={{width: '75%'}}/>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {DUMMY_CART.map(e => {
            return (
              <HistoricoComponent image={e.image} produto = {e.produto} tempo ={e.tempo} quantidade={e.quantidade} descricao = {e.descricao}/>
            )
          })}
        </div>
      </>
    )
  }