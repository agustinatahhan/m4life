import style from "./Landing.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import crop from "../../assets/Img/crop22.webp";
const Landing = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    // <section
    //   className={`w-100 p-0 d-flex align-items-center justify-content-center ${style.header}`}
    // >
    //   <div className={`${style.textContent} ${style.full}`}>
    //     <h2
    //       data-aos="zoom-in"
    //       className={`text-white fw-bold display-2 text-center mx-5 mt-3`}
    //       style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)" }}
    //     >
    //       {t("header.title")}
    //     </h2>
    //   </div>
    // </section>
    <div className={style.header}>
    <img src={crop} alt="Header background image" loading="eager" />
    <div className={style.headerContent}>
      <h2 data-aos="zoom-in"
          className={`text-white fw-bold display-2 text-center mt-3`}
           style={{ textShadow: "3px 3px 6px rgba(0, 0, 0, 0.6)" }}>{t("header.title")}</h2>
    </div>
  </div>
  );
};

export default Landing;
