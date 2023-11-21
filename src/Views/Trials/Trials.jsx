import style from "./Trials.module.css";
import suelo from "../../assets/Img/suelo4.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Trials = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`min-vh-100 d-flex align-items-center justify-content-center ${style.bg}`}
      id="theproblem"
    >
      <div className="container">
        <div className="row align-items-start justify-content-center">
          <div className="col-lg-6 text-center mb-4 mt-5" data-aos="fade-right">
            <h2 className="display-4 fw-bold">{t("trials.title")}</h2>
            <p className={`fs-5 fw-regular mb-4 ${style.descriptionText}`}>{t("trials.description")}</p>
            <ul className="mt-4">
              <li className="fs-5 fw-bold text-start mb-3">
                {" "}
                {t("trials.yield")}
              </li>
              <li className="fs-5 fw-bold text-start  mb-3">
                {" "}
                {t("trials.biomass")}
              </li>
              <li className="fs-5 fw-bold text-start  mb-3">
                {" "}
                {t("trials.nodulation")}
              </li>
            </ul>
            <p className={`fs-5 fst-italic mt-4`}>{t("trials.last")}</p>

          </div>
          <div className={`col text-center mb-5 mx-2 `} data-aos="fade-left">
            <div className={style.imgLab}>
            <img src={suelo} alt="plant"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trials;
