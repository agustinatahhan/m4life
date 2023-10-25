import style from "./WhatWeDo.module.css";
import plants from "../../assets/Img/plants.jpg"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const WhatWeDo = () => {
    const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={style.header}>
      <div className={`${style.grid} ${style.containerCenter}`}>
        <div className={`${style.textContent} ${style.full}`}>
          <div className={style.grid2}>
            <div>
              <h2>{t("what_we_do.title")}</h2>
            </div>
            <div>
                <img src={plants} alt="plant"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
