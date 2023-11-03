import style from "./OurProduct.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import lab from "../../assets/Img/lab1.jpeg";
const OurProduct = () => {
  const { t } = useTranslation("global");

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      className={`min-vh-100 d-flex align-items-center justify-content-center ${style.bg}`}
      id="ourproduct"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 text-center mb-4 mt-5" data-aos="fade-right">
            <h2 className="display-3 fw-bold mb-4 text-white">
              {t("our_product.title")}
            </h2>
            <p className="fs-5 fw-regular text-center text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati eius odit autem id ipsum molestias, minima atque
              deserunt ipsam omnis delectus error fuga, repellat est placeat
              nostrum vel optio facilis! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Deleniti esse eos totam. Dolorem nostrum qui
              saepe, obcaecati autem at, dolorum omnis libero atque iste amet
              soluta sint impedit. Velit, asperiores. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Iure, possimus explicabo architecto
              fugiat numquam amet alias! Consequuntur id placeat quam quisquam
              hic soluta, ex ipsam, porro, voluptas reiciendis sit quia. Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              consequuntur expedita vero corporis sed rerum velit autem
              distinctio rem, dicta maiores, cumque ut deleniti adipisci? A fuga
              accusantium et repellendus? 
            </p>
          </div>
          <div className="col-lg-6 text-center mb-5">
            <img src={lab} alt="plant" className={style.imgLab} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProduct;
