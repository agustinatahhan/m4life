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
      <div className={`container p-5 rounded ${style.form}`}>
        <h3 className="fw-light fs-1 mb-4">{t("contact.title")}</h3>
        <div class="mb-3">
          <input
            type="name"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder={t("contact.name")}
            required
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder={t("contact.email")}
            required
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder={t("contact.message")}
            required
          />
        </div>
        <div class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-dark" type="button">
            {t("contact.send")}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
