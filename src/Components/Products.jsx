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
                <div className="priceProduct">{props.value} </div>
              </div>
              <div style={{width: '50%', height: '100%'}}>
                <button className="comprarButton"onClick = {() => {
                  console.log('clisk');
                  setOpen(true);
                  setId(props.id)
                }}>Comprar</button>
              </div>
            </div>
          {/* </th> */}
          </div>
      <CompraModal onOpen={open} id={props.id} handleClose={handleClose} preco={props.value.split('R$')[1]} titulo={props.name} image={props.logo}/>

          </>
    )
}