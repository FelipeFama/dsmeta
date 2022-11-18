import "./styles.css";
import logo from "../../assets/img/logo.svg";

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a target="_blank" href="https://www.instagram.com/lipeh.fama.dev/">
            @lipehfama.dev
          </a>
        </p>
      </div>
    </header>
  );
}

export default Header;
