import { Navbar } from "../Components/Navbar";
import Logo from '../Assets/MM.png'
import '../Components/home.css';


export const Home = () => {
  return (
    <>
    <Navbar />
      <hr/>
      <br/>
      <table>
        <tr>
          <th>
            <img src={Logo} className="imageProduct" alt="Logo do site" />
            <div className="nameProduct">PRODUTO</div>
            <div className="priceProduct">Por: R$150 </div>
          </th>
          <th>
            <img src={Logo} className="imageProduct" alt="Logo do site" />
            <div className="nameProduct">PRODUTO</div>
            <div className="priceProduct">Por: R$150 </div>
          </th>
          <th>
            <img src={Logo} className="imageProduct" alt="Logo do site" />
            <div className="nameProduct">PRODUTO</div>
            <div className="priceProduct">Por: R$150 </div>
          </th>
        </tr>
      </table>
    </>
  );
}
