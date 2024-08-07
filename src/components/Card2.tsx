import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Card2.module.css";

const Card2 = ({
  className = "",
  news,
  feb,
  cCTVFootageThiefUsesChild,
  propBackgroundImage,
}) => {
  const imgBadgeStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={[styles.card, className].join(" ")}>
      <div className={styles.imgBadge} style={imgBadgeStyle}>
        <div className={styles.badge}>
          <div className={styles.news}>{news}</div>
        </div>
      </div>
      <div className={styles.textIcon}>
        <div className={styles.text}>
          <div className={styles.feb}>{feb}</div>
          <div className={styles.cctvFootageThiefContainer}>
            <p className={styles.cctvFootageThief}>
              {cCTVFootageThiefUsesChild}
            </p>
          </div>
        </div>
        <div className={styles.textIcon1}>
          <div className={styles.readMore}>Read more</div>
          <img className={styles.arrowRightIcon} alt="" src="/arrowright.svg" />
        </div>
      </div>
    </div>
  );
};

Card2.propTypes = {
  className: PropTypes.string,
  news: PropTypes.string,
  feb: PropTypes.string,
  cCTVFootageThiefUsesChild: PropTypes.string,

  /** Style props */
  propBackgroundImage: PropTypes.any,
};

export default Card2;
