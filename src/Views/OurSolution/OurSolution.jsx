import style from "./OurSolution.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
// import lab from "../../assets/Img/lab1.jpeg";
import i1 from "../../assets/Img/1.png";
import i2 from "../../assets/Img/2.png";
import i3 from "../../assets/Img/3.png";
import i4 from "../../assets/Img/4.png";
import i5 from "../../assets/Img/5.png";
import flecha from "../../assets/Img/flecha.png";
const OurSolution = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
    className={`min-vh-100 d-flex align-items-center justify-content-center ${style.bg}`}
    id="oursolution"
  >
    <div className="container">
      <div className="row align-items-center justify-content-center">
         <div className="col-lg-6 text-center mb-4 mt-5" data-aos="fade-right">
         <h2 className="display-3 fw-bold mb-4">{t("our_solution.title")}</h2>
          <p className={`fs-5 fw-regular mb-4 ${style.solutionText}`}>
          {t("our_solution.description")}
          </p>
          <p className={`fs-5 fw-bold  ${style.solutionText}`}>
          {t("our_solution.last")}
          </p>
        </div>
        <div className="col-lg-6 mb-5" data-aos="fade-left">
          
          <div className="container text-center mt-5">
            <div className="d-flex row">
              <div className="col">
                <img className={`${style.im}`} src={i1} alt="img" loading="lazy"  />
                <p className={`fst-italic ${style.txt}`}>{t("how_we_do.source")}</p>
              </div>
              <div className="col">
                <p className={`fst-italic ${style.txt}`}>{t("how_we_do.microbes")}</p>

                <img className={`${style.im}`} src={i2} alt="img" loading="lazy"  />
              </div>
              <div className="col">
                <img className={`${style.im}`} src={i3} alt="img" loading="lazy"  />
                <p className={`fst-italic ${style.txt}`}>{t("how_we_do.training")}</p>
              </div>
              <div className="col">
                <p className={`fst-italic ${style.txt}`}>{t("how_we_do.formulation")}</p>

                <img className={`${style.im}`} src={i4} alt="img" loading="lazy"  />
              </div>
              <div className="col">
                <img className={`${style.im}`} src={i5} alt="img" loading="lazy"  />
                <p className={`fst-italic ${style.txt}`}>{t("how_we_do.use")}</p>
              </div>
            </div>
          </div>
          <img className="w-100 " src={flecha} alt="flecha" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
  );
};

export default OurSolution;
