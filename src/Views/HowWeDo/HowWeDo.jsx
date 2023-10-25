import style from "./HowWeDo.module.css";
import plants from "../../assets/Img/plants.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import imagen1 from "../../assets/Img/imagen1.jpeg";
import imagen2 from "../../assets/Img/imagen2.jpeg";
import imagen3 from "../../assets/Img/imagen3.jpg";
import imagen4 from "../../assets/Img/imagen4.jpeg";

const HowWeDo = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className={style.header}>
      <div className={`${style.grid} ${style.containerCenter}`}>
        <div className={`${style.textContent} ${style.full}`}>
          <div className={style.grid2}>
            <div className={style.mainContainer}>
              <div className={style.sliderFrame}>
                <ul>
                  <li>
                    <img src={imagen1} />
                  </li>
                  <li>
                    <img src={imagen2} />
                  </li>
                  <li>
                    <img src={imagen3} />
                  </li>
                  <li>
                    <img src={imagen4} />
                  </li>
                </ul>
              </div>
            </div>
            <div className={style.textContainer}>
              <h2>{t("how_we_do.title")}</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo
                accusantium exercitationem dolorem impedit, quam praesentium
                velit laboriosam ea culpa. Voluptas eveniet amet laboriosam
                similique nihil non voluptate eius dolores omnis. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Voluptate, ipsum
                cum molestias quis sunt excepturi explicabo nobis et ex earum
                vitae unde! Accusamus ab dolor impedit consectetur voluptatibus
                labore aliquam!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDo;
