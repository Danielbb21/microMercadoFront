import Logo from '../Assets/MM.png'
import './navbar.css';
import Cart from '../Assets/shopping_cart_icon-removebg-preview.png';
import { Input } from './Input';

export const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className='navWrapper'>
        <img src={Logo} alt="Logo do site" className='logo' />
        <form style={{ height: '50%', width: '30%', display: 'flex' }} onSubmit={handleSubmit}>
          < Input type="text"  text='Pesquise por produtos' />
          <button type="submit" className='nav-button'>OK</button>
        </form>
        <div className='dropdown'>
          <img src={'https://www.pontofrio-imagens.com.br/App_Themes/PontoFrio/img/header/icon-perfil.png'} style={{ background: '#D3D3D3', padding: '15px', borderRadius: '25px', cursor: 'pointer' }} />
          <div class="dropdown-content">
            <a href="/login" style={{fontSize: '16px'}}>Acesse sua conta</a>
            <a href="/login" style={{fontSize: '16px'}}>Meus pedidos</a>
            {/* <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>
        {/* <button type="button" className='nav-button-sec'>Minha Conta</button> */}
        <img src={Cart} style={{ background: '#D3D3D3', borderRadius: '25px', cursor: 'pointer', width: '60px', height: '60px' }} />
        {/* <button type="button" className='nav-button-sec'>Carrinho</button> */}
      </div>
    </>
  );
}
