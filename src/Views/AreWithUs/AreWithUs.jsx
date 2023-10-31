import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./AreWithUs.module.css";

const AreWithUs = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={style.header}>
      <div className={`${style.grid} ${style.containerCenter}`}>
        <div className={`${style.textContent} ${style.full}`}>
          <div className={style.usColumn}>
            <h2>{t("with_us")}</h2>
            <div className={style.iconsUs}>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreWithUs;
