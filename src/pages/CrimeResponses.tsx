import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import InfoBlockJobs from "../components/InfoBlockJobs";
import Form from "../components/Form";
import Footer from "../components/Footer";
import styles from "./CrimeResponses.module.css";

const CrimeResponses = () => {
  const navigate = useNavigate();

  const onTextContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCrimeReportsTextClick = useCallback(() => {
    navigate("/crime-reports");
  }, [navigate]);

  const onTextContainerClick1 = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className={styles.crimeResponses}>
      <Hero
        contactUs="Crime Responses"
        headerHeight="unset"
        headerBackgroundImage="url('/hero1@3x.png')"
        textOpacity="0.6"
        textOpacity1="unset"
        buttonsOpacity="0.6"
        onTextContainerClick1={onTextContainerClick}
        onCrimeReportsTextClick={onCrimeReportsTextClick}
        onTextContainerClick2={onTextContainerClick1}
      />
      <div className={styles.infoBlockjobsSideBar}>
        <InfoBlockJobs />
        <div className={styles.sideBar}>
          <div className={styles.jobOverwiew}>
            <div className={styles.jobOverwiewInner}>
              <div className={styles.mapPinParent}>
                <img className={styles.mapPinIcon} alt="" src="/mappin2.svg" />
                <div className={styles.locationParent}>
                  <div className={styles.location}>Location</div>
                  <div className={styles.krachikarachi}>{`KrachiKarachi `}</div>
                </div>
              </div>
            </div>
            <div className={styles.mapPinWrapper}>
              <img className={styles.mapPinIcon1} alt="" src="/mappin3.svg" />
            </div>
          </div>
          <Form />
        </div>
      </div>
      <Footer
        group33="/group-331@2x.png"
        propPadding="100px 202px 60px"
        propPadding1="0px 202px 60px"
      />
    </div>
  );
};

export default CrimeResponses;
