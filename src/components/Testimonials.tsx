import PropTypes from "prop-types";
import styles from "./Testimonials.module.css";

const Testimonials = ({ className = "" }) => {
  return (
    <div className={[styles.testimonials, className].join(" ")}>
      <div className={styles.text}>
        <div className={styles.responseFromPeople}>
          Response From People On Complaints
        </div>
        <div className={styles.atEuLobortis}>
          At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit
          a massa elementum id scelerisque rhoncus. Lectus dolor blandit massa
          pretium id ultrices phasellus tortor. Risus risus lectus augue justo
          lacus viverra sit. Ultricies purus dolor viverra mi laoreet at cursus
          justo. Ultrices purus diam egestas amet faucibus tempor blandit. Elit
          velit mauris aliquam est diam. Leo sagittis consectetur diam morbi
          erat aenean. Vulputate praesent congue faucibus in euismod feugiat
          euismod volutpat. Adipiscing risus amet phasellus imperdiet eget vel
          pulvinar. Risus in felis faucibus sit. Scelerisque consequat iaculis
          mauris amet vel felis id tincidunt nunc.
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.starsText}>
            <div className={styles.starsText1}>
              <div className={styles.robberyIncidentReported}>
                Robbery Incident Reported
              </div>
            </div>
            <i className={styles.iWitnessedThe}>
              I witnessed the incident and immediately contacted the
              authorities. We need to work together to increase neighborhood
              watch programs to prevent further occurrences.
            </i>
          </div>
          <div className={styles.avatarText}>
            <div className={styles.avatar} />
            <div className={styles.starsText1}>
              <div className={styles.robberyIncidentReported}>Anonymous</div>
            </div>
          </div>
          <img className={styles.quotesIcon} alt="" src="/quotes.svg" />
        </div>
        <div className={styles.card}>
          <div className={styles.starsText}>
            <div className={styles.starsText1}>
              <div className={styles.snatchingIncidentOn}>
                Snatching Incident on Main Street
              </div>
            </div>
            <i className={styles.iWitnessedThe}>
              This is alarming! We should organize a community meeting to
              discuss safety measures and possibly install more street lights in
              the area.
            </i>
          </div>
          <div className={styles.avatarText}>
            <div className={styles.avatar1} />
            <div className={styles.starsText1}>
              <div className={styles.robberyIncidentReported}>Anonymous</div>
            </div>
          </div>
          <img className={styles.quotesIcon} alt="" src="/quotes.svg" />
        </div>
        <div className={styles.card}>
          <div className={styles.starsText}>
            <div className={styles.starsText1}>
              <div className={styles.robberyIncidentReported}>
                Addressing Gang Rape
              </div>
            </div>
            <i className={styles.iWitnessedThe}>
              This is a devastating incident that requires urgent action. We
              must support the victims and advocate for stronger community
              support services and educational programs on consent and safety.
              Let’s work together to raise awareness and ensure that such crimes
              are reported and addressed effectively.
            </i>
          </div>
          <div className={styles.avatarText}>
            <div className={styles.avatar1} />
            <div className={styles.starsText1}>
              <div className={styles.robberyIncidentReported}>Anonymous</div>
            </div>
          </div>
          <img className={styles.quotesIcon} alt="" src="/quotes.svg" />
        </div>
      </div>
    </div>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
