import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./Banner.module.css";

const Banner = ({ className = "" }) => {
  return (
    <div className={[styles.banner, className].join(" ")}>
      <div className={styles.banner1}>
        <div className={styles.imgs}>
          <img className={styles.imgIcon} alt="" src="/img1@2x.png" />
          <img className={styles.imgIcon1} alt="" src="/img2@2x.png" />
          <img className={styles.imgIcon2} alt="" src="/img3@2x.png" />
          <img className={styles.imgIcon3} alt="" src="/img4@2x.png" />
          <img className={styles.imgIcon4} alt="" src="/img5@2x.png" />
        </div>
        <Button
          register="Search Crime"
          buttonPosition="absolute"
          buttonWidth="unset"
          buttonTop="316px"
          buttonLeft="65px"
          registerFontFamily="Poppins"
        />
        <div className={styles.text}>
          <b className={styles.unitingForSafety}>
            Uniting for Safety: Your Portal to Crime-Free Living
          </b>
          <div className={styles.insightIntoNeighborhood}>
            Insight into Neighborhood Security
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
