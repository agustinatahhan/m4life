import style from "./Team.module.css";
// import avatar from "../../assets/Img/avatar.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import conrado from "../../assets/Img/conrado.webp";
import sandra from "../../assets/Img/sandra.webp";
import paula from "../../assets/Img/paula.webp";
import federico from "../../assets/Img/federico.webp";
import ricardo from "../../assets/Img/ricardo.webp";
// import { NavLink } from "react-router-dom";

const Team = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  const lipaula = "https://www.linkedin.com/in/paula-vincent-336217177/";
  const liconrado = "https://www.linkedin.com/in/conrado-adler-08b3b726/";
  const lisandra = "https://www.linkedin.com/in/sandra-durman-05858624/";
  const liricardo = "https://www.linkedin.com/in/ricardo-de-cristobal-782900145/";
  const lifederico = "https://www.linkedin.com/in/fwajnerman/";
  return (
    <section
      id="team"
      className={`min-vh-100 d-flex align-items-center justify-content-center ${style.bg}`}
    >
      <div className="container">
        <h2 className="display-3 fw-bold my-5">{t("team.our_team")}</h2>
        <h2>{t("team.science")}</h2>
        <div
          className="row row-cols-4 align-items-center justify-content-center column-gap-5 row-gap-3 mt-5 mb-5"
          data-aos="fade-down"
        >
          <div className={`mb-3 ${style.card}`}>
            <img src={paula} alt="avatar" loading="lazy" />
            <div className={style.cardContent}>
              <p className={` ${style.cardTitle}`}>Paula Vincent</p>
              {/* <p className={`fw-regular`}>COO</p> */}
              <p className={`fw-regular`}>{t("team.paulat")}</p>

              <p className={`mt-5 fw-light text-center ${style.cardDescription}`}>
              {t("team.paula")}
              </p>
              <div className={style.icons}>
                {/* <a to="">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19.435 4.065H4.565a2.5 2.5 0 0 0-2.5 2.5v10.87a2.5 2.5 0 0 0 2.5 2.5h14.87a2.5 2.5 0 0 0 2.5-2.5V6.565a2.5 2.5 0 0 0-2.5-2.5Zm-14.87 1h14.87a1.489 1.489 0 0 1 1.49 1.39c-2.47 1.32-4.95 2.63-7.43 3.95a6.172 6.172 0 0 1-1.06.53a2.083 2.083 0 0 1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26c-1.14-.6-2.3-1.21-3.44-1.82a1.491 1.491 0 0 1 1.49-1.4Zm16.37 12.37a1.5 1.5 0 0 1-1.5 1.5H4.565a1.5 1.5 0 0 1-1.5-1.5V7.6c2.36 1.24 4.71 2.5 7.07 3.75a5.622 5.622 0 0 0 1.35.6a2.872 2.872 0 0 0 2-.41c1.45-.76 2.89-1.53 4.34-2.29c1.04-.56 2.07-1.1 3.11-1.65Z"
                    />
                  </svg>
                </a> */}
                <a href={lipaula}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={`mb-3 ${style.card}`}>
            <img src={conrado} alt="avatar" loading="lazy" />
            <div className={style.cardContent}>
              <p className={style.cardTitle}>Conrado Adler</p>
              {/* <p className={`fw-regular`}>CTO</p> */}
              <p className={`fw-regular`}>{t("team.conradot")}</p>

              <p className={`my-5 fw-light text-center ${style.cardDescription}`}>
              {t("team.conrado")}
              </p>
              <div className={style.icons}>
                {/* <a to="">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19.435 4.065H4.565a2.5 2.5 0 0 0-2.5 2.5v10.87a2.5 2.5 0 0 0 2.5 2.5h14.87a2.5 2.5 0 0 0 2.5-2.5V6.565a2.5 2.5 0 0 0-2.5-2.5Zm-14.87 1h14.87a1.489 1.489 0 0 1 1.49 1.39c-2.47 1.32-4.95 2.63-7.43 3.95a6.172 6.172 0 0 1-1.06.53a2.083 2.083 0 0 1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26c-1.14-.6-2.3-1.21-3.44-1.82a1.491 1.491 0 0 1 1.49-1.4Zm16.37 12.37a1.5 1.5 0 0 1-1.5 1.5H4.565a1.5 1.5 0 0 1-1.5-1.5V7.6c2.36 1.24 4.71 2.5 7.07 3.75a5.622 5.622 0 0 0 1.35.6a2.872 2.872 0 0 0 2-.41c1.45-.76 2.89-1.53 4.34-2.29c1.04-.56 2.07-1.1 3.11-1.65Z"
                    />
                  </svg>
                </a> */}
                <a href={liconrado}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={`mb-3 ${style.card}`}>
            <img src={ricardo} alt="avatar" loading="lazy" />
            <div className={style.cardContent}>
              <p className={style.cardTitle}>Ricardo de Cristobal</p>
              {/* <p className={`fw-regular`}>CSO</p> */}
              <p className={`fw-regular`}>{t("team.ricardot")}</p>

              <p className={`my-5 fw-light text-center ${style.cardDescription}`}>
              {t("team.ricardo")}
              </p>
              <div className={style.icons}>
                {/* <a to="">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19.435 4.065H4.565a2.5 2.5 0 0 0-2.5 2.5v10.87a2.5 2.5 0 0 0 2.5 2.5h14.87a2.5 2.5 0 0 0 2.5-2.5V6.565a2.5 2.5 0 0 0-2.5-2.5Zm-14.87 1h14.87a1.489 1.489 0 0 1 1.49 1.39c-2.47 1.32-4.95 2.63-7.43 3.95a6.172 6.172 0 0 1-1.06.53a2.083 2.083 0 0 1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26c-1.14-.6-2.3-1.21-3.44-1.82a1.491 1.491 0 0 1 1.49-1.4Zm16.37 12.37a1.5 1.5 0 0 1-1.5 1.5H4.565a1.5 1.5 0 0 1-1.5-1.5V7.6c2.36 1.24 4.71 2.5 7.07 3.75a5.622 5.622 0 0 0 1.35.6a2.872 2.872 0 0 0 2-.41c1.45-.76 2.89-1.53 4.34-2.29c1.04-.56 2.07-1.1 3.11-1.65Z"
                    />
                  </svg>
                </a> */}
                <a href={liricardo}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <h2>{t("team.business")}</h2>
        <div
          className="row row-cols-4 align-items-center justify-content-center column-gap-5 row-gap-3 my-5 mb-5"
          data-aos="fade-down"
        >
          <div className={`${style.card}`}>
            <img src={sandra} alt="avatar" loading="lazy" />
            <div className={style.cardContent}>
              <p className={style.cardTitle}>Sandra Durman</p>
              {/* <p className={`fw-regular`}>CIO</p> */}
              <p className={`fw-regular`}>{t("team.sandrat")}</p>

              <p className={`my-5 fw-light text-center ${style.cardDescription}`}>
              {t("team.sandra")}
              </p>
              <div className={style.icons}>
                {/* <a to="">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19.435 4.065H4.565a2.5 2.5 0 0 0-2.5 2.5v10.87a2.5 2.5 0 0 0 2.5 2.5h14.87a2.5 2.5 0 0 0 2.5-2.5V6.565a2.5 2.5 0 0 0-2.5-2.5Zm-14.87 1h14.87a1.489 1.489 0 0 1 1.49 1.39c-2.47 1.32-4.95 2.63-7.43 3.95a6.172 6.172 0 0 1-1.06.53a2.083 2.083 0 0 1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26c-1.14-.6-2.3-1.21-3.44-1.82a1.491 1.491 0 0 1 1.49-1.4Zm16.37 12.37a1.5 1.5 0 0 1-1.5 1.5H4.565a1.5 1.5 0 0 1-1.5-1.5V7.6c2.36 1.24 4.71 2.5 7.07 3.75a5.622 5.622 0 0 0 1.35.6a2.872 2.872 0 0 0 2-.41c1.45-.76 2.89-1.53 4.34-2.29c1.04-.56 2.07-1.1 3.11-1.65Z"
                    />
                  </svg>
                </a> */}
                <a href={lisandra}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className={`${style.card}`}>
            <img src={federico} alt="avatar" loading="lazy" />
            <div className={style.cardContent}>
              <p className={style.cardTitle}>Federico Wajnerman</p>
              {/* <p className={`fw-regular`}>CEO</p> */}
              <p className={`fw-regular`}>{t("team.federicot")}</p>

              <p className={`my-5 fw-light text-center ${style.cardDescription}`}>
              {t("team.federico")}
              </p>
              <div className={style.icons}>
                {/* <a to="">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19.435 4.065H4.565a2.5 2.5 0 0 0-2.5 2.5v10.87a2.5 2.5 0 0 0 2.5 2.5h14.87a2.5 2.5 0 0 0 2.5-2.5V6.565a2.5 2.5 0 0 0-2.5-2.5Zm-14.87 1h14.87a1.489 1.489 0 0 1 1.49 1.39c-2.47 1.32-4.95 2.63-7.43 3.95a6.172 6.172 0 0 1-1.06.53a2.083 2.083 0 0 1-1.67-.39c-1.42-.75-2.84-1.51-4.25-2.26c-1.14-.6-2.3-1.21-3.44-1.82a1.491 1.491 0 0 1 1.49-1.4Zm16.37 12.37a1.5 1.5 0 0 1-1.5 1.5H4.565a1.5 1.5 0 0 1-1.5-1.5V7.6c2.36 1.24 4.71 2.5 7.07 3.75a5.622 5.622 0 0 0 1.35.6a2.872 2.872 0 0 0 2-.41c1.45-.76 2.89-1.53 4.34-2.29c1.04-.56 2.07-1.1 3.11-1.65Z"
                    />
                  </svg>
                </a> */}
                <a href={lifederico}>
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#000000"
                      d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
