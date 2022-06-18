import { useState } from 'react';
import { Input } from '../Components/Input';
import './Cadastro.css'
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../Components/Loader';
import { useNavigate } from 'react-router-dom';

export const Cadastro = () => {

  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmitData = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // console.log('isAdmin', isAdm, nome, email,senha);
    axios.post('http://localhost:3003/user', {
      nome: nome,
      email: email,
      senha: senha,
      admin: isAdm
    })
      .then(res => {
        console.log('res', res.data);
        setIsLoading(false);
        toast.success("Conta criada", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,

          progress: undefined,
        });
        navigate('/login');
      })
      .catch(err => {
        console.log('err', err.message);
        setIsLoading(false);
        toast.error("Algo deu errado", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,

          progress: undefined,
        });
      })
  }

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isAdm, setIsAdmin] = useState(false);

  return (
    <>
      <div className='cadastroPage'>
        <div className='cadastroWrapper'>
          <h1 style={{ margin: 0 }}>Realize seu cadastro</h1>
          <form className='inputsWrapper' onSubmit={handleSubmitData}>
            <Input text={'Digite seu Nome'} type={'text'} value={nome} onChange={(e) => {
              setNome(e.target.value);
            }} />
            <Input text={'Digite seu E-mail'} type={'Email'} value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} />
            <Input text={'Digite sua Senha'} type={'password'} value={senha} onChange={(e) => {
              setSenha(e.target.value);
            }} />
            <div style={{ display: 'flex', width: '50%' }}>
              <label>
                <input type={'checkbox'} id="adm" onClick={() => {
                  setIsAdmin(!isAdm);
                }} defaultChecked={isAdm} />
                É administrador?
              </label>
              {/* <label for="adm" style={{marginLeft: '10px' }}>É administrador?</label> */}
            </div>
            {isLoading ? <LoadingSpinner /> : <button type='submit' className='cadastroButton'>Cadastrar</button>}

          </form>
          <p>Já possui uma conta? <a href='/login'>Realize o login Aqui</a></p>
        </div>
      </div>
    </>
  );
}

