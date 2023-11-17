import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Confetti from "react-dom-confetti";
import { useTranslation } from "react-i18next";
import style from "./ContactUs.module.css";
const ContactUs = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);

  const form = useRef();

  const [showConfetti, setShowConfetti] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ni1mio8",
        "template_ndxg637",
        form.current,
        "pGibZsw5XtrWMlGFu"
      )
      .then(
        (result) => {
          console.log(result.text);
          clearForm();
          setShowConfetti(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const clearForm = () => {
    form.current.user_name.value = "";
    form.current.user_email.value = "";
    form.current.message.value = "";
  };

  const confettiConfig = {
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  };

  return (
    <section
      className={`min-vh-100 d-flex align-items-center justify-content-center ${style.formContainer}`}
    >
      <div className={`container p-4 rounded mt-5 ${style.contentWidth}`}>
        <div className={`mb-4`}>
          <h3 className="fw-bold display-4 text-start text-white mt-5">
            {t("contact.title")}
          </h3>
          <p className="text-start fs-5 text-white mt-3">
            {t("contact.description")}
          </p>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className={`p-4 rounded mt-5 ${style.form}`}
        >
          <div className="mb-3">
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder={t("contact.name")}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder={t("contact.email")}
              required
            />
          </div>
          <div className="mb-3">
            <textarea
              name="message"
              className="form-control"
              rows="3"
              placeholder={t("contact.message")}
              required
            />
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button value="Send" className="btn btn-light" type="submit">
              {t("contact.send")}
            </button>
          </div>
        </form>
        <Confetti active={showConfetti} config={confettiConfig} />
      </div>
    </section>
  );
};

export default ContactUs;
