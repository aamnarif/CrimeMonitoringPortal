import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SideBarCarsBanner from "../components/SideBarCarsBanner";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./CrimeReports.module.css";

const CrimeReports = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onTextContainerClick1 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onCrimeResponsesTextClick = useCallback(() => {
    navigate("/crime-responses");
  }, [navigate]);

  const onTextContainerClick2 = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.crimeReports}>
      <div className={styles.hero}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.logoChild} alt="" src="/group-33@2x.png" />
            <div className={styles.crimePortal}>{`Crime Portal  `}</div>
          </div>
          <div className={styles.menu}>
            <div className={styles.text} onClick={onTextContainerClick}>
              <div className={styles.home}>Home</div>
            </div>
            <div className={styles.text} onClick={onTextContainerClick1}>
              <div className={styles.home}>About Us</div>
            </div>
            <div className={styles.text2}>
              <div className={styles.crimeReports1}>Crime Reports</div>
            </div>
            <div className={styles.text2}>
              <div
                className={styles.crimeResponses}
                onClick={onCrimeResponsesTextClick}
              >{`Crime Response's `}</div>
            </div>
            <div className={styles.text} onClick={onTextContainerClick2}>
              <div className={styles.home}>Contact Us</div>
            </div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.login} onClick={onLoginTextClick}>
              Login
            </div>
            <Button
              register="Register"
              buttonPosition="unset"
              buttonWidth="unset"
              buttonTop="unset"
              buttonLeft="unset"
              registerFontFamily="Poppins"
              onButtonContainerClick={onButtonContainerClick}
            />
          </div>
        </div>
        <b className={styles.crimeReports2}>Crime Reports</b>
      </div>
      <SideBarCarsBanner />
      <div className={styles.topCompany}>
        <div className={styles.text5}>
          <b className={styles.crimeStatistics}>Crime Statistics</b>
          <div className={styles.ourPortalDelivers}>
            Our portal delivers dynamic crime statistics, offering insights into
            registered complaints such as robberies, snatchings, bomb blasts,
            gang rapes, and more.
          </div>
        </div>
        <GroupComponent />
        <FrameComponent />
      </div>
      <Footer
        group33="/group-33@2x.png"
        propPadding="0px 202px 60px"
        propPadding1="100px 202px 60px"
      />
    </div>
  );
};

export default CrimeReports;
