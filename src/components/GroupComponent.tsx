import PropTypes from "prop-types";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.lineParent}>
        <div className={styles.frameChild} />
        <div className={styles.provisionsMonth}>Provisions Month</div>
        <div className={styles.march2024Parent}>
          <div className={styles.march2024}>March 2024</div>
          <img
            className={styles.featherIconCalendar}
            alt=""
            src="/feathericon--calendar.svg"
          />
        </div>
        <div className={styles.featherIconMoreHorizontalWrapper}>
          <img
            className={styles.featherIconCalendar}
            alt=""
            src="/feathericon--morehorizontal.svg"
          />
        </div>
      </div>
      <div className={styles.totalVisitsParent}>
        <b className={styles.totalVisits}>Total visits</b>
        <img
          className={styles.featherIconAlertCircle}
          alt=""
          src="/feathericon--alertcircle.svg"
        />
      </div>
      <div className={styles.shapeParent}>
        <img className={styles.shapeIcon} alt="" src="/shape.svg" />
        <div className={styles.mParent}>
          <div className={styles.m}>260M</div>
          <div className={styles.m1}>220M</div>
          <div className={styles.m2}>180M</div>
          <div className={styles.m3}>140M</div>
        </div>
        <div className={styles.lineGroup}>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
          <div className={styles.lineDiv} />
        </div>
        <img className={styles.groupIcon} alt="" src="/group-3.svg" />
        <div className={styles.parent}>
          <div className={styles.div}>1</div>
          <div className={styles.div1}>5</div>
          <div className={styles.div2}>10</div>
          <div className={styles.div3}>15</div>
          <div className={styles.div4}>20</div>
          <div className={styles.div5}>25</div>
          <div className={styles.div6}>30</div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.groupChild1} />
          <div className={styles.tooltip}>
            <img className={styles.shapeIcon1} alt="" src="/shape1.svg" />
            <div className={styles.labelParent}>
              <div className={styles.label}>This Month</div>
              <b className={styles.label1}>22, 123</b>
              <div className={styles.label2}>May</div>
            </div>
          </div>
          <div className={styles.selector} />
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
