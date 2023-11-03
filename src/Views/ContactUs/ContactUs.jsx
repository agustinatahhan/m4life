import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import style from "./ContactUs.module.css";
const ContactUs = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className={`min-vh-100 d-flex align-items-center justify-content-center ${style.formContainer}`}
    >
      <div className={`container p-4 rounded mt-5 ${style.contentWidth}`}>
        <div className={`mb-4`}>
          <h3 className="fw-bold display-4 text-start text-white mt-5">{t("contact.title")}</h3>
          <p className="text-start fs-5 text-white mt-3">{t("contact.description")}</p>
        </div>
        <form className={`p-4 rounded mt-5 ${style.form}`}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder={t("contact.name")}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder={t("contact.email")}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              rows="3"
              placeholder={t("contact.message")}
              required
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-light" type="submit">
              {t("contact.send")}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
