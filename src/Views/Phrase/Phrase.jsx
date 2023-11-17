import style from "./Phrase.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const Phrase = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={` w-100 p-0 d-flex align-items-center justify-content-center  ${style.header}`}
    >
      <div className={`${style.textContent} ${style.full}`}>
        <h2
          data-aos="zoom-in"
          className={`text-white fw-bold display-2 text-center mx-5`}
        >
          {t("phrase.title")}
        </h2>
      </div>
    </section>
  
  );
};

export default Phrase;
