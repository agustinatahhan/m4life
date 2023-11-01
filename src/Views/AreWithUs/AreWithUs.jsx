import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./AreWithUs.module.css";
import conicet from "../../assets/Img/conicet.png";
import agredes from "../../assets/Img/agredes.jpeg";
import agrality from "../../assets/Img/agrality.png";
import ee from "../../assets/Img/ee.png";
import rizobacter from "../../assets/Img/rizobacter.png";
import sf500 from "../../assets/Img/SF500.png";
import avatar from "../../assets/Img/avatar.png";

const AreWithUs = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`min-vh-100 bg-light d-flex align-items-center justify-content-center`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <h2 class="display-5 fw-regular my-5">{t("with_us.mentors")}</h2>
            <div class="row row-cols-2">
              <div class="col my-3">
                <h4 class="fw-light mb-3">Lino Barañao</h4>
                <img
                  src={avatar}
                  className={`rounded-circle img-fluid ${style.imgMentors}`}
                  alt="..."
                />
              </div>
              <div class="col my-3">
                <h4 class="fw-light mb-3">Manuel Espinosa Urgel</h4>
                <img
                  src={avatar}
                  className={`rounded-circle img-fluid ${style.imgMentors}`}
                  alt="..."
                />
              </div>
              <div class="col my-3">
                <h4 class="fw-light mb-3">Mark Ramondt</h4>
                <img
                  src={avatar}
                  className={`rounded-circle img-fluid ${style.imgMentors}`}
                  alt="..."
                />
              </div>
              <div class="col my-3">
                <h4 class="fw-light mb-3">Matias Nardi</h4>
                <img
                  src={avatar}
                  className={`rounded-circle img-fluid ${style.imgMentors}`}
                  alt="..."
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h2 class="display-5 fw-regular my-5">{t("with_us.title")}</h2>
            <div class="row row-cols-2">
              <div class="col">
                <img
                  src={conicet}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
              <div class="col">
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
              </div>
              <div class="col">
                <img
                  src={sf500}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
              <div class="col">
                <img
                  src={agrality}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
              <div class="col">
                <img
                  src={ee}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
              <div class="col">
                <img
                  src={agrality}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
              <div class="col">
                <img
                  src={agrality}
                  className={`rounded img-fluid ${style.imgPartners}`}
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AreWithUs;
