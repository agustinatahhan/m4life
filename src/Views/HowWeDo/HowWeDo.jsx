import style from "./HowWeDo.module.css";
import plants from "../../assets/Img/plants.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import imagen1 from "../../assets/Img/soja.jpeg";
import imagen2 from "../../assets/Img/test.jpeg";
import imagen3 from "../../assets/Img/lab1.jpeg";
import imagen4 from "../../assets/Img/lab2.jpeg";

const HowWeDo = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={`min-vh-100 d-flex align-items-center justify-content-center ${style.bg}`}>

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center mb-4">
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
          </div>
          <div className="col-lg-6 mb-5" data-aos="fade-left">
            <h2 className="display-3 fw-bold mb-4">{t("how_we_do.title")}</h2>
            <p className="fs-5 fw-regular text-center ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati eius odit autem id ipsum molestias, minima atque
              deserunt ipsam omnis delectus error fuga, repellat est placeat
              nostrum vel optio facilis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti esse eos totam. Dolorem nostrum qui
              saepe, obcaecati autem at, dolorum omnis libero atque iste amet
              soluta sint impedit. Velit, asperiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iure, possimus explicabo architecto
              fugiat numquam amet alias! Consequuntur id placeat quam quisquam
              hic soluta, ex ipsam, porro, voluptas reiciendis sit quia. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              consequuntur expedita vero corporis sed rerum velit autem
              distinctio rem, dicta maiores, cumque ut deleniti adipisci? A fuga
              accusantium et repellendus? 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
