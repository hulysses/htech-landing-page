import "../../styles/footer.css";
import FacebookIcon from "../../assets/icons/facebook.svg";
import InstagramIcon from "../../assets/icons/instagram.svg";
import YoutubeIcon from "../../assets/icons/youtube.svg";
import Logo from "../../assets/icons/logo.svg";

export default function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo-section">
              <img src={Logo} alt="Logo HTECH" className="imgF" />
              <div className="social-icons">
                <img src={InstagramIcon} alt="Instagram" />
                <img src={FacebookIcon} alt="Facebook" />
                <img src={YoutubeIcon} alt="YouTube" />
              </div>
            </div>
            <div className="column">
              <h4>Empresa</h4>
              <ul>
                <li>
                  <a>Sobre nós</a>
                </li>
                <li>
                  <a>Faça parte do time</a>
                </li>
                <li>
                  <a>Blog</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4>Funcionalidades</h4>
              <ul>
                <li>
                  <a>Marketing</a>
                </li>
                <li>
                  <a>Análise de dados</a>
                </li>
                <li>
                  <a>Boot discord</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h4>Recursos</h4>
              <ul>
                <li>
                  <a>IOS & Android</a>
                </li>
                <li>
                  <a>Teste a Demo</a>
                </li>
                <li>
                  <a>Clientes</a>
                </li>
                <li>
                  <a>API</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>&copy; 2024 Hulysses - Todos os direitos reservados.</p>
      </div>
    </div>
  );
}
