import Row from "./Row";
import PropTypes from "prop-types";
import styles from "./InfoBlock1.module.css";

const InfoBlock1 = ({ className = "" }) => {
  return (
    <div className={[styles.infoBlock2, className].join(" ")}>
      <div className={styles.imgs}>
        <img className={styles.imgIcon} alt="" src="/img6@2x.png" />
        <div className={styles.imgs1}>
          <img className={styles.imgIcon1} alt="" src="/img7@2x.png" />
          <img className={styles.imgIcon2} alt="" src="/img8@2x.png" />
        </div>
      </div>
      <div className={styles.textIcons}>
        <div className={styles.text}>
          <div className={styles.text}>
            <div className={styles.enhancingCommunitySafetyTogParent}>
              <b className={styles.enhancingCommunitySafetyContainer}>
                <span>{`Enhancing Community `}</span>
                <span className={styles.safetyTogether}>Safety Together</span>
              </b>
              <div
                className={styles.inOurShared}
              >{`In our shared mission to enhance community safety, collaboration is key. By working together, residents, law enforcement, and local organizations can create a proactive approach to crime prevention. `}</div>
            </div>
          </div>
        </div>
        <div className={styles.iconsText}>
          <Row
            frame484="/frame-484@2x.png"
            safeSecureCommunity={`Safe & Secure Community`}
            responseOptimization="Response Optimization"
          />
          <Row
            frame484="/frame-4841@2x.png"
            safeSecureCommunity="Registering Complaints"
            responseOptimization="Predictive Policing Solutions"
            propHeight="unset"
          />
        </div>
      </div>
      <img
        className={styles.excellence11Icon}
        alt=""
        src="/excellence1-1.svg"
      />
    </div>
  );
};

InfoBlock1.propTypes = {
  className: PropTypes.string,
};

export default InfoBlock1;
