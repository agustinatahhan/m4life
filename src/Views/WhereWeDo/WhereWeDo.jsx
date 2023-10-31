import style from "./WhereWeDo.module.css";
import where from "../../assets/Img/where.png"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
const WhereWeDo = () => {
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
              <h2>{t("where_we_do.title")}</h2>
            </div>
            <div>
                <img src={where} alt="plant"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhereWeDo;
