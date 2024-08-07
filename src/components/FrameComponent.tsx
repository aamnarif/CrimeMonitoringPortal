import PropTypes from "prop-types";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.crimesParent}>
        <b className={styles.crimes}>Crimes</b>
        <img
          className={styles.featherIconAlertCircle}
          alt=""
          src="/feathericon--alertcircle1.svg"
        />
      </div>
      <div className={styles.activePercentageParent}>
        <b className={styles.crimes}>Active Percentage</b>
        <img
          className={styles.featherIconAlertCircle}
          alt=""
          src="/feathericon--alertcircle1.svg"
        />
      </div>
      <div className={styles.groupParent}>
        <div className={styles.frame13221Parent}>
          <img
            className={styles.frame13221}
            alt=""
            src="/frame-1322-1@2x.png"
          />
          <div className={styles.groupChild} />
        </div>
        <b className={styles.b}>100</b>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.labelParent}>
          <div className={styles.label}>Reports</div>
          <div className={styles.label1}>330 users</div>
        </div>
      </div>
      <div className={styles.frameContainer}>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.labelParent}>
            <div className={styles.label}>Online</div>
            <div className={styles.label1}>9 users</div>
          </div>
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.rectangleWrapper}>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.labelParent}>
            <div className={styles.label}>Offline</div>
            <div className={styles.label1}>4 users</div>
          </div>
        </div>
      </div>
      <div className={styles.labelParent1}>
        <b className={styles.label6}>70</b>
        <div className={styles.label7}>Total</div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.rectangleWrapper}>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.labelParent}>
          <div className={styles.label}>Responses</div>
          <div className={styles.label1}>15 users</div>
        </div>
      </div>
      <div className={styles.frameChild1} />
      <div className={styles.rectangleParent}>
        <div className={styles.groupItem} />
        <div className={styles.groupInner} />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
