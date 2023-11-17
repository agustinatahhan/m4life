import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./AreWithUs.module.css";
import conicet from "../../assets/Img/conicet.png";
// import agredes from "../../assets/Img/agredes.jpeg";
// import agrality from "../../assets/Img/agrality.png";
// import ee from "../../assets/Img/ee.png";
// import rizobacter from "../../assets/Img/rizobacter.png";
import sf500 from "../../assets/Img/sf.png";
import mc from "../../assets/Img/mc.png";
// import avatar from "../../assets/Img/avatar.png";
import carlos from "../../assets/Img/carlos.jpg";
import cesar from "../../assets/Img/cesar.png";
import lino from "../../assets/Img/lino.png";
import nicolas from "../../assets/Img/nicolas.png";

const AreWithUs = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`min-vh-100 d-flex align-items-center justify-content-center ${style.bg}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 class="my-5">{t("with_us.mentors")}</h2>
            <div class="row row-cols-2" data-aos="fade-up">
              <div className={style.card}>
                <div className={style.profileImage}>
                  <img src={lino} alt="" />
                </div>
                <div className={style.textContainer}>
                  <p className={`fw-regular fs-5 text-center`}>Lino Barañao</p>
                  <p className={`fw-light text-center`}>{t("with_us.lino")}</p>
                </div>
              </div>

              <div className={style.card}>
                <div className={style.profileImage}>
                  <img src={carlos} alt="" />
                </div>
                <div className={style.textContainer}>
                  <p className={`fw-regular fs-5 text-center`}>Carlos Becco</p>
                  <p className={`fw-light text-center`}>
                    {t("with_us.carlos")}
                  </p>
                </div>
              </div>

              <div className={style.card}>
                <div className={style.profileImage}>
                  <img src={nicolas} alt="" />
                </div>
                <div className={style.textContainer}>
                  <p className={`fw-regular fs-5 text-center`}>Nicolás Adur</p>
                  <p className={`fw-light text-center`}>
                    {t("with_us.nicolas")}
                  </p>
                </div>
              </div>

              <div className={style.card}>
                <div className={style.profileImage}>
                  <img src={cesar} alt="" />
                </div>
                <div className={style.textContainer}>
                  <p className={`fw-regular fs-5 text-center`}>Cesar Arias</p>
                  <p className={`fw-light text-center`}>{t("with_us.cesar")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 class="my-5">{t("with_us.title")}</h2>
            <div class="row row-cols-2" data-aos="fade-up">
              <div class="col mb-5">
                <img
                  src={conicet}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
              <div class="col mb-5">
                <img
                  src={sf500}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
              <div class="col mb-5">
                <img
                  src={mc}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
              {/* <div class="col">
                <img
                  src={agredes}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
              <div class="col">
                <img
                  src={rizobacter}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div> */}
              {/* <div class="col">
                <img
                  src={ee}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreWithUs;
