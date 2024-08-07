import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./Hero.module.css";

const Hero = ({
  className = "",
  contactUs,
  headerHeight,
  headerBackgroundImage,
  textOpacity,
  textOpacity1,
  buttonsOpacity,
  onTextContainerClick1,
  onCrimeReportsTextClick,
  onTextContainerClick3,
  onTextContainerClick2,
  onContactUsTextClick,
}) => {
  const heroStyle = useMemo(() => {
    return {
      height: headerHeight,
      backgroundImage: headerBackgroundImage,
    };
  }, [headerHeight, headerBackgroundImage]);

  const aboutUsStyle = useMemo(() => {
    return {
      opacity: textOpacity,
    };
  }, [textOpacity]);

  const crimeResponsesStyle = useMemo(() => {
    return {
      opacity: textOpacity1,
    };
  }, [textOpacity1]);

  const contactUsStyle = useMemo(() => {
    return {
      opacity: buttonsOpacity,
    };
  }, [buttonsOpacity]);

  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/home");
  }, [navigate]);

  const onTextContainerClick4 = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextContainerClick5 = useCallback(() => {
    navigate("/crime-reports");
  }, [navigate]);

  const onTextContainerClick6 = useCallback(() => {
    navigate("/crime-responses");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={[styles.hero, className].join(" ")} style={heroStyle}>
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
            <div className={styles.aboutUs} style={aboutUsStyle}>
              About Us
            </div>
          </div>
          <div className={styles.text} onClick={onTextContainerClick2}>
            <div className={styles.aboutUs} onClick={onCrimeReportsTextClick}>
              Crime Reports
            </div>
          </div>
          <div className={styles.text} onClick={onTextContainerClick3}>
            <div
              className={styles.crimeResponses}
              style={crimeResponsesStyle}
            >{`Crime Response's `}</div>
          </div>
          <div className={styles.text4} onClick={onTextContainerClick2}>
            <div
              className={styles.contactUs}
              style={contactUsStyle}
              onClick={onContactUsTextClick}
            >
              Contact Us
            </div>
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
      <b className={styles.contactUs1}>{contactUs}</b>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  contactUs: PropTypes.string,

  /** Style props */
  headerHeight: PropTypes.any,
  headerBackgroundImage: PropTypes.any,
  textOpacity: PropTypes.any,
  textOpacity1: PropTypes.any,
  buttonsOpacity: PropTypes.any,

  /** Action props */
  onTextContainerClick1: PropTypes.func,
  onCrimeReportsTextClick: PropTypes.func,
  onTextContainerClick3: PropTypes.func,
  onTextContainerClick2: PropTypes.func,
  onContactUsTextClick: PropTypes.func,
};

export default Hero;
