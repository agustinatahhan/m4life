import logo from "../../assets/Img/logbw.png";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`py-3 ${style.bgFooter}`}>
      <div className="container">
        <div className="row align-items-center justify-content-between my-3">
          <div className="col-md-4 mt-4">
            <a href="/">
              {" "}
              <img
                src={logo}
                alt="Logo de la empresa"
                className={`img-fluid mb-3 ${style.logoFooter}`}
              />
            </a>
            <p className="mb-0 fw-light">
              Produced by DKZ Studio © 2023 Todos los derechos reservados
            </p>
          </div>
          <div className="col-md-4 text-right">
            <a
              href="https://www.linkedin.com/company/m4lifeok/"
              className={`social-icon ${style.iconFoot}`}
            >
              <i className={`fa-brands fa-linkedin fa-2xl mx-3`}></i>
            </a>

            <a
              href="https://youtu.be/Cft-zlM0xnE"
              className={`social-icon ${style.iconFoot}`}
            >
              <i className={`fa-brands fa-youtube fa-2xl mx-3`}></i>
            </a>

            <a
              href="https://www.instagram.com/m4lifeok/"
              className={`social-icon ${style.iconFoot}`}
            >
              <i className={`fa-brands fa-instagram fa-2xl mx-3`}></i>
            </a>

            <a
              href="https://www.facebook.com/m4lifeok"
              className={`social-icon ${style.iconFoot}`}
            >
              <i className={`fa-brands fa-facebook fa-2xl mx-3`}></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
