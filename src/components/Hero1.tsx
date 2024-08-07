import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import IconText1 from "./IconText1";
import PropTypes from "prop-types";
import styles from "./Hero1.module.css";

const Hero1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextContainerClick1 = useCallback(() => {
    navigate("/crime-reports");
  }, [navigate]);

  const onTextContainerClick2 = useCallback(() => {
    navigate("/crime-responses");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={[styles.hero, className].join(" ")}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img className={styles.logoChild} alt="" src="/group-33@2x.png" />
          <div className={styles.crimePortal}>{`Crime Portal  `}</div>
        </div>
        <div className={styles.menu}>
          <div className={styles.text}>
            <div className={styles.home}>Home</div>
          </div>
          <div className={styles.text1} onClick={onTextContainerClick}>
            <div className={styles.aboutUs}>About Us</div>
          </div>
          <div className={styles.text1} onClick={onTextContainerClick1}>
            <div className={styles.aboutUs}>Crime Reports</div>
          </div>
          <div className={styles.text1} onClick={onTextContainerClick2}>
            <div className={styles.crimeResponses}>{`Crime Response's `}</div>
          </div>
          <div className={styles.text}>
            <div className={styles.contactUs} onClick={onContactUsTextClick}>
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
      <div className={styles.textinputsIcons}>
        <div className={styles.textInputs}>
          <div className={styles.text5}>
            <div className={styles.text6}>
              <b className={styles.reportTrackPrevent}>
                Report, Track, Prevent – For a Safer Tomorrow
              </b>
              <div className={styles.safeguardingTogetherYour}>
                Safeguarding Together: Your Bridge to a Secure Environment
              </div>
            </div>
          </div>
          <div className={styles.search}>
            <div className={styles.textIconsbg}>
              <div className={styles.textIcons}>
                <div className={styles.text7}>
                  <div className={styles.crimeTitle}>Crime Title</div>
                </div>
                <div className={styles.textIcon}>
                  <div className={styles.crimeTitle}>Select Location</div>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
                <div className={styles.textIcon1}>
                  <div className={styles.crimeTitle}>Select Category</div>
                  <img
                    className={styles.chevronDownIcon}
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <img className={styles.searchIcon} alt="" src="/search.svg" />
              <div className={styles.home}>Search Crime</div>
            </div>
          </div>
        </div>
        <div className={styles.iconsText}>
          <IconText1
            briefcase22="/briefcase2-21.svg"
            prop="25,850"
            cases="Cases"
          />
          <IconText1
            briefcase22="/g2079@2x.png"
            prop="10,250"
            cases="People"
            propOverflow="unset"
          />
          <div className={styles.iconText}>
            <div className={styles.iconbg}>
              <img className={styles.city1Icon} alt="" src="/city-1.svg" />
              <img
                className={styles.building1Icon}
                alt=""
                src="/building-1@2x.png"
              />
            </div>
            <div className={styles.text6}>
              <b className={styles.b}>18,400</b>
              <div className={styles.areasLocated}>Areas Located</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.logos} />
    </div>
  );
};

Hero1.propTypes = {
  className: PropTypes.string,
};

export default Hero1;
