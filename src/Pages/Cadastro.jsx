import { Input } from '../Components/Input';
import './Cadastro.css'

export const Cadastro = () => {
  const handleSubmitData = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className='cadastroPage'>
        <div className='cadastroWrapper'>
          <h1 style={{ margin: 0 }}>Realize seu cadastro</h1>
          <form className='inputsWrapper' onSubmit={handleSubmitData}>
            <Input text={'Digite seu Nome'} type={'text'} />
            <Input text={'Digite seu E-mail'} type={'Email'} />
            <Input text={'Digite sua Senha'} type={'password'} />
            <button type='submit' className='cadastroButton'>Cadastrar</button>
          </form>
          <p>Já possui uma conta? <a href='/login'>Realize o login Aqui</a></p>
        </div>
      </div>
    </>
  );
}

