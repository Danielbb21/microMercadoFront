// import from './home.css'
import './home.css';

export const Products  = (props) => {
    return (
        <div style={{border: '1px solid  light grey'}}>
        {/* <th> */}
          <img src={props.logo} className="imageProduct" alt="Logo do site" />
            <div style={{display: 'flex', alignItems: 'center'}}>
              <div>
                <div className="nameProduct">{props.name}</div>
                <div className="priceProduct">{props.value} </div>
              </div>
              <div style={{width: '50%', height: '100%'}}>
                <button className="comprarButton">Comprar</button>
              </div>
            </div>
          {/* </th> */}
          </div>
    )
}