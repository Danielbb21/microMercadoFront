// import from './home.css'
import './home.css';
import { useState } from 'react';
import CompraModal from './CompraModal';

export const Products  = (props) => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState('');

  const handleClose = () => {
    setOpen(false);
  }
    return (
      <>
        <div style={{border: '1px solid  light grey'}}>
        {/* <th> */}
          <img src={props.logo} className="imageProduct" alt="Logo do site" />
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div>
                <div className="nameProduct">{props.name}</div>
                <p className="priceProduct">Valor: R${props.value.toFixed(2)} </p>
              </div>
              <div style={{width: '50%', height: '100%'}}>
                {props.quantidade > 0 ? <button className="comprarButton"onClick = {() => {
                  console.log('clisk');
                  setOpen(true);
                  setId(props.id)
                }}>Comprar</button> : <p>Esgotado</p>}
                
              </div>
            </div>
          {/* </th> */}
          </div>
      <CompraModal onOpen={open} id={props.id} handleClose={handleClose} preco={props.value} titulo={props.name} image={props.logo}/>

          </>
    )
}