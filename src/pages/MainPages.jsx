import { Link } from "react-router-dom";
import gif from "../assets/welcome.gif";

const MainPages = () => {
  return (
    <div className="container d-flex flex-column align-items-md-center gap-5 my-5">
      <h1>Hoşgeldiniz!</h1>

      <img className="img-fluid rounded" src={gif} alt="" />
      <p>
        <Link to={"/ürünler"}> Ürünler Sayfasından</Link> Yeni Çıkan Bütün
        Kitaplara Ulaşabilirsiniz
      </p>
    </div>
  );
};

export default MainPages;
