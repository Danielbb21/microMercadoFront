import { Login } from "./Pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from "./Pages/Home";
import { Cadastro } from "./Pages/Cadastro";
import { Carrinho } from "./Pages/Carrinho";

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/cadastro" element={<Cadastro />}></Route>
          <Route exact path="/carrinho" element={<Carrinho />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Login /> */}
    </div>
  );
}

export default App;
