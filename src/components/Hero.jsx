import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({
  className = "",
  headerHeight,
  headerBackgroundImage,
  onTextContainerClick1,
  textOpacity,
  onCrimeReportsTextClick,
  onTextContainerClick3,
  textOpacity1,
  onTextContainerClick2,
  buttonsOpacity,
  onContactUsTextClick,
  contactUs,
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
    navigate("/");
  }, [navigate]);

  const onTextContainerClick4 = useCallback(() => {
    navigate("/about-us");
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
    <div className={`hero2 ${className}`} style={heroStyle}>
      <div className="header2">
        <div className="logo3">
          <img className="logo-child1" alt="" src="/group-33@2x.png" />
          <div className="crime-portal3">{`Crime Portal  `}</div>
        </div>
        <div className="menu2">
          <div className="text55" onClick={onTextContainerClick}>
            <div className="home4">Home</div>
          </div>
          <div className="text55" onClick={onTextContainerClick1}>
            <div className="about-us4" style={aboutUsStyle}>
              About Us
            </div>
          </div>
          <div className="text55" onClick={onTextContainerClick2}>
            <div className="about-us4" onClick={onCrimeReportsTextClick}>
              Crime Reports
            </div>
          </div>
          <div className="text55" onClick={onTextContainerClick3}>
            <div
              className="crime-responses4"
              style={crimeResponsesStyle}
            >{`Crime Response's `}</div>
          </div>
          <div className="text59" onClick={onTextContainerClick2}>
            <div
              className="contact-us4"
              style={contactUsStyle}
              onClick={onContactUsTextClick}
            >
              Contact Us
            </div>
          </div>
        </div>
        <div className="buttons3">
          <div className="login2" onClick={onLoginTextClick}>
            Login
          </div>
          <Button
            onButtonContainerClick={onButtonContainerClick}
            buttonPosition="unset"
            buttonWidth="unset"
            buttonTop="unset"
            buttonLeft="unset"
            register="Register"
            registerFontFamily="Poppins"
          />
        </div>
      </div>
      <b className="contact-us5">{contactUs}</b>
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
