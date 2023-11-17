import style from "./HowWeDo.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import imagen1 from "../../assets/Img/soja.jpeg";
import imagen2 from "../../assets/Img/test.jpeg";
import imagen3 from "../../assets/Img/lab1.jpeg";
import imagen4 from "../../assets/Img/lab2.jpeg";

import howwe from "../../assets/Img/howwe.png";

const HowWeDo = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={`min-vh-100 d-flex align-items-center justify-content-center ${style.bg}`}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          {/* <div className="col-lg-6 text-center mb-4">
            <div
              id="carouselExampleInterval"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className={`${style.carr} carousel-inner mt-5`}>
                <div className="carousel-item active" data-bs-interval="10000">
                  <img
                    src={imagen1}
                    className="d-block w-100"
                    alt="imagen-carrousel"
                  />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                  <img
                    src={imagen2}
                    className="d-block w-100"
                    alt="imagen-carrousel"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={imagen3}
                    className="d-block w-100"
                    alt="imagen-carrousel"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={imagen4}
                    className="d-block w-100"
                    alt="imagen-carrousel"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleInterval"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div> */}
           {/* <div className="col-lg-6 text-center mb-5">
            <img src={howwe} alt="plant" className={style.imgLab} />
          </div> */}
          {/* <div className="col-lg-6 mb-5" data-aos="fade-left">
            <h2 className="display-3 fw-bold mb-4">{t("how_we_do.title")}</h2>
            <p className="fs-5 fw-regular text-center">
              {t("how_we_do.description")}
            </p>
            <div class="container text-center mt-5">
              <div class="d-flex row">
                <div class="col">
                  <img className={`${style.im}`} src={i1} alt="img" />
                  <p className={`fst-italic ${style.txt}`}>{t("how_we_do.source")}</p>
                </div>
                <div class="col">
                  <p className={`fst-italic ${style.txt}`}>{t("how_we_do.microbes")}</p>

                  <img className={`${style.im}`} src={i2} alt="img" />
                </div>
                <div class="col">
                  <img className={`${style.im}`} src={i3} alt="img" />
                  <p className={`fst-italic ${style.txt}`}>{t("how_we_do.training")}</p>
                </div>
                <div class="col">
                  <p className={`fst-italic ${style.txt}`}>{t("how_we_do.formulation")}</p>

                  <img className={`${style.im}`} src={i4} alt="img" />
                </div>
                <div class="col">
                  <img className={`${style.im}`} src={i5} alt="img" />
                  <p className={`fst-italic ${style.txt}`}>{t("how_we_do.use")}</p>
                </div>
              </div>
            </div>
            <img className="w-100 " src={flecha} alt="flecha"/>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
