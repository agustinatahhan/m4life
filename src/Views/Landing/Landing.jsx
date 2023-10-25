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
    <section className={style.header}>
      <div className={`${style.grid} ${style.containerCenter}`}>
        <div className={`${style.textContent} ${style.full}`}>
          {/* <h2 className={style.title}>{t("header.title")}</h2> */}
          <h2 data-aos="zoom-in" className={style.title}>{t("header.title")}</h2>
        </div>
      </div>
    </section>
  );
};

export default Landing;
