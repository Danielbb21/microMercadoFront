import { Navbar } from "../Components/Navbar";
import Logo from '../Assets/MM.png'
import '../Components/home.css';


export const Home = () => {
  return (
    <>
    <Navbar />
      <h1>AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</h1>
      <table>
        <tr>
          <th>
            <img src={Logo} className="logo" alt="Logo do site" />
            <div>Por: 150 R$</div>
          </th>
          <th>a</th>
          <th>a</th>
        </tr>
      </table>
    </>
  );
}
