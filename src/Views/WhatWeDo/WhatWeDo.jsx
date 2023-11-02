import style from "./WhatWeDo.module.css";
import plants from "../../assets/Img/plants.jpg";
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
    <section
      className={`min-vh-100 d-flex align-items-center justify-content-center`}
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center mb-4">
            <h2 className="display-4 fw-regular mb-3" data-aos="fade-right">
              {t("what_we_do.title")}
            </h2>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={plants}
              alt="plant"
              className={`rounded-circle img-fluid ${style.customImg}`}
              style={{ maxWidth: "450px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
