import { Input } from '../Components/Input';
import './Login.css'
import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../Components/Loader';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmitData = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('dados', email, senha)
    axios.post('http://localhost:3003/user/login', {
      email: email,
      senha: senha
    })
      .then(res => {
        
        setIsLoading(false);
        console.log('res.data', res.data);
        toast.success("Login feito com sucesso", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,

          progress: undefined,
        });
        navigate('/')
      })
      .catch(err => {
        setIsLoading(false);
        console.log('err', err.message);
        if (err.message === 'Request failed with status code 400') {
          toast.error("Email ou senha incorretos", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,

            progress: undefined,
          });
        }
        else {
          toast.error("Algo deu errado", {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,

            progress: undefined,
          });

        }
      })
  }

  return (
    <>
      <div className='loginPage'>
        <div className='loginWrapper'>
          <h1 style={{ margin: 0 }}>Realize seu login</h1>
          <form className='inputsWrapper' onSubmit={handleSubmitData}>
            <Input text={'Digite seu E-mail'} type={'Email'} value={email} onChange={(e) => {
              setEmail(e.target.value);
            }} />
            <Input text={'Digite sua Senha'} type={'password'} value={senha} onChange={(e) => {
              setSenha(e.target.value);
            }} />
            {isLoading ? <LoadingSpinner /> : <button type='submit' className='loginButton'>Login</button>}

          </form>
          <p>Não tem conta? <a href='/cadastro'>Cadastre-se Aqui</a></p>
        </div>
      </div>
    </>
  );
}

