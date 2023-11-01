import style from "./Landing.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Landing = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={`${style.header} w-100 p-0 d-flex align-items-center justify-content-center`}
    >
      <div className={`${style.textContent} ${style.full}`}>
        <h2
          data-aos="zoom-in"
          className={`text-white fw-bold display-3 text-center mx-3`}
        >
          {t("header.title")}
        </h2>
      </div>
    </section>
  );
};

export default Landing;
