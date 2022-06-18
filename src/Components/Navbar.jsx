import Logo from '../Assets/MM.png'
import './navbar.css';
import Cart from '../Assets/shopping_cart_icon-removebg-preview.png';
import { Input } from './Input';
import { useNavigate } from 'react-router-dom';
import { useCompra } from '../Context/Compra';
import { useState } from 'react';
import { AdicionarModal } from './AdicionarModal';

export const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  const navigate = useNavigate();
  const { carrinhoData } = useCompra();

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <div className='navWrapper'>
        <div style={{ display: 'flex', alignItems: 'center' }}>

          <img src={Logo} alt="Logo do site" className='logo' onClick={() => navigate('/')} />
          <div style={{ color: 'white', marginLeft: '15px', fontWeight: 'bold', fontSize: '32px' }}>Micro Mercado</div>
        </div>
        <form style={{ height: '50%', width: '30%', display: 'flex' }} onSubmit={handleSubmit}>
          <Input type="text" text='Pesquise por produtos' ok={true} />
          <button type="submit" className='nav-button'>OK</button>
        </form>
        <div className='dropdown' style={{ display: 'flex', alignItems: 'center' }}>
          <img src={'https://www.pontofrio-imagens.com.br/App_Themes/PontoFrio/img/header/icon-perfil.png'} style={{ background: '#D3D3D3', padding: '15px', borderRadius: '25px', cursor: 'pointer' }} />
          <div class="dropdown-content">
            <a href="/login" style={{ fontSize: '16px' }}>Acesse sua conta</a>
            <a href="/perfil" style={{ fontSize: '16px' }}>Meus pedidos</a>
            <a href="/" style={{ fontSize: '16px' }} onClick={() => {
              localStorage.removeItem('id');
              localStorage.removeItem('isAdmin');
            }}>sair</a>
            {/* <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
          <div style={{ color: 'white', marginLeft: '15px', fontSize: '24px' }}>Perfil</div>

        </div>

        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
          <div style={{ color: 'white', zIndex: 9999, position: 'absolute', top: -10, right: 97, background: '#59bfff', width: '20%', height: '50%', display: 'flex', justifyContent: 'center', borderRadius: '500px', alignItems: 'center' }}>{carrinhoData.length}</div>
          {/* <button type="button" className='nav-button-sec'>Minha Conta</button> */}
          <img src={Cart} style={{ background: '#D3D3D3', borderRadius: '25px', cursor: 'pointer', width: '60px', height: '60px' }} onClick={() => navigate('/carrinho')} />
          {/* <button type="button" className='nav-button-sec'>Carrinho</button> */}
          <div style={{ color: 'white', marginLeft: '15px', fontSize: '24px' }}>Carrinho</div>
        </div>
        <button onClick={() => {
          setOpen(true);
        }} className = 'nav-add-button'>ADICIONAR PRODUTO</button>
      </div>
      <div className='nav-empty-space'>
        asda
      </div>
      <AdicionarModal open={open} handleClose={handleClose} />
    </>
  );
}

