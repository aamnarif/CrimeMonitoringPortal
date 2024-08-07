import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import InfoBlock1 from "../components/InfoBlock1";
import Blog1 from "../components/Blog1";
import Footer from "../components/Footer";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onCrimeReportsTextClick = useCallback(() => {
    navigate("/crime-reports");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/crime-responses");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className={styles.aboutUs}>
      <Hero
        contactUs="About Us"
        headerHeight="322px"
        headerBackgroundImage="url('/hero@3x.png')"
        textOpacity="unset"
        textOpacity1="0.6"
        buttonsOpacity="0.6"
        onCrimeReportsTextClick={onCrimeReportsTextClick}
        onTextContainerClick3={onTextContainerClick}
        onContactUsTextClick={onContactUsTextClick}
      />
      <div className={styles.infoBlock}>
        <div className={styles.text}>
          <b className={styles.whatWeDoContainer}>
            <p className={styles.whatWeDo}>
              <span className={styles.what}>{`What `}</span>
              <span>We Do?</span>
            </p>
            <p className={styles.p}>{`   `}</p>
          </b>
          <div className={styles.weDeliverAdvancedMonitoringWrapper}>
            <div className={styles.weDeliverAdvanced}>
              We deliver advanced monitoring solutions for comprehensive crime
              management. Our platform empowers communities with crime data
              insights, enabling proactive crime complaints and responses. Stay
              ahead of threats and protect your community.
            </div>
          </div>
        </div>
        <img
          className={styles.defaultDesignAImageThatIsIcon}
          alt=""
          src="/default-design-a-image-that-is-showing-aesthetic-background-wi-0-1@2x.png"
        />
      </div>
      <HowItWorks />
      <div className={styles.video}>
        <div className={styles.buttonText}>
          <b className={styles.goodLifeBeginsContainer}>
            <p className={styles.whatWeDo}>{`Good Life Begins With `}</p>
            <p className={styles.whatWeDo}>A Safe Community</p>
          </b>
        </div>
      </div>
      <InfoBlock1 />
      <Blog1 />
      <Footer
        group33="/group-33@2x.png"
        propPadding="0px 202px 60px"
        propPadding1="100px 202px 60px"
      />
    </div>
  );
};

export default AboutUs;
