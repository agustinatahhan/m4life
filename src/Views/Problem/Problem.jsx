import style from "./Problem.module.css";
import suelo from "../../assets/Img/mitad.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Problem = () => {
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
            <h2 className="display-4 fw-bold">{t("problem.title")}</h2>
            <ul className="mt-4">
              <li className="fs-5 fw-bold text-start mb-3">
                {" "}
                {t("problem.des1")}
              </li>
              <li className="fs-5 fw-bold text-start  mb-3">
                {" "}
                {t("problem.des2")}
              </li>
              <li className="fs-5 fw-bold text-start  mb-3">
                {" "}
                {t("problem.des3")}
              </li>
            </ul>
            <p className={`fs-5 fw-regular mb-4 ${style.descriptionText}`}>{t("problem.description")}</p>
          </div>
          <div className={`col text-center mb-5 mx-2 `} data-aos="fade-left">
            <div className={style.imgLab}>

            <img src={suelo} alt="plant" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
