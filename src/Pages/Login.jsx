import { Input } from '../Components/Input';
import './Login.css'

export const Login = () => {
  const handleSubmitData = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className='loginPage'>
        <div className='loginWrapper'>
          <h1 style={{ margin: 0 }}>Realize seu login</h1>
          <form className='inputsWrapper' onSubmit={handleSubmitData}>
            <Input text={'Digite seu E-mail'} type={'Email'} />
            <Input text={'Digite sua Senha'} type={'password'} />
            <button type='submit' className='loginButton'>Login</button>
          </form>
          <p>Não tem conta? <a href=''>Cadastre-se Aqui</a></p>
        </div>
      </div>
    </>
  );
}

