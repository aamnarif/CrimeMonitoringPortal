import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./InfoBlock.module.css";

const InfoBlock = ({ className = "" }) => {
  return (
    <div className={[styles.infoBlock, className].join(" ")}>
      <div className={styles.imgTextButtons}>
        <img className={styles.imgIcon} alt="" src="/img@2x.png" />
        <div className={styles.textButtons}>
          <div className={styles.text}>
            <b className={styles.enhancingCommunitySafety}>
              Enhancing Community Safety Together
            </b>
            <div className={styles.inOurShared}>
              In our shared mission to enhance community safety, collaboration
              is key. By working together, residents, law enforcement, and local
              organizations can create a proactive approach to crime prevention.
              Our platform encourages open communication and reporting,
              empowering everyone to contribute to a safer environment. With
              access to real-time data and resources, community members can stay
              informed about potential risks. Together, we can build a resilient
              community that prioritizes safety and well-being. Join us in
              fostering a culture of vigilance and support, where everyone plays
              a role in keeping our neighborhoods secure.
            </div>
          </div>
          <div className={styles.buttons}>
            <Button
              register="Search Crime"
              buttonPosition="unset"
              buttonWidth="unset"
              buttonTop="unset"
              buttonLeft="unset"
              registerFontFamily="Poppins"
            />
            <div className={styles.learnMore}>Learn more</div>
          </div>
        </div>
      </div>
      <div className={styles.counter}>
        <div className={styles.text1}>
          <b className={styles.b}>12+</b>
          <div className={styles.crimeReporting}>Crime Reporting</div>
        </div>
        <div className={styles.text2}>
          <b className={styles.b}>200+</b>
          <div className={styles.crimeReporting}>Active cases</div>
        </div>
        <div className={styles.text3}>
          <b className={styles.b}>18+</b>
          <div className={styles.crimeReporting}>{`Crime Areas `}</div>
        </div>
      </div>
    </div>
  );
};

InfoBlock.propTypes = {
  className: PropTypes.string,
};

export default InfoBlock;
