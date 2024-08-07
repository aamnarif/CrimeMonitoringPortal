import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import TextIconsForm from "../components/TextIconsForm";
import Footer from "../components/Footer";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const onTextContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextContainerClick1 = useCallback(() => {
    navigate("/crime-reports");
  }, [navigate]);

  const onTextContainerClick2 = useCallback(() => {
    navigate("/crime-responses");
  }, [navigate]);

  return (
    <div className={styles.contactUs}>
      <Hero
        contactUs="Contact Us"
        onTextContainerClick1={onTextContainerClick}
        onTextContainerClick2={onTextContainerClick1}
        onTextContainerClick3={onTextContainerClick2}
      />
      <TextIconsForm />
      <div className={styles.mapIcon}>
        <div className={styles.map}>
          <img className={styles.mapPinIcon} alt="" src="/mappin1.svg" />
        </div>
      </div>
      <Footer group33="/group-33@2x.png" />
    </div>
  );
};

export default ContactUs;
