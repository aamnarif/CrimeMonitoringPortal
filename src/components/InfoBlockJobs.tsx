import Complaint from "./Complaint";
import Complaint1 from "./Complaint1";
import PropTypes from "prop-types";
import styles from "./InfoBlockJobs.module.css";

const InfoBlockJobs = ({ className = "" }) => {
  return (
    <div className={[styles.infoBlockJobs, className].join(" ")}>
      <div className={styles.complaint1Parent}>
        <Complaint complaint="Complaint" prop="1" />
        <Complaint
          complaint="Complaint "
          prop="2"
          propTop="72px"
          propWidth="206px"
        />
        <Complaint
          complaint="Complaint "
          prop="3"
          propTop="144px"
          propWidth="calc(100% - 185px)"
        />
        <Complaint1 complaint="Complaint" prop="4" />
      </div>
      <div className={styles.complaint1Group}>
        <Complaint
          complaint="Complaint "
          prop="5"
          propTop="0px"
          propWidth="calc(100% - 178px)"
        />
        <Complaint
          complaint="Complaint  "
          prop="6"
          propTop="72px"
          propWidth="141px"
        />
        <Complaint
          complaint="Complaint  "
          prop="7"
          propTop="144px"
          propWidth="calc(100% - 185px)"
        />
        <Complaint1 complaint="Complaint " prop="8" />
      </div>
      <div className={styles.activeSubsParent}>
        <div className={styles.activeSubs}>
          <b className={styles.complaintBox}>Complaint Box</b>
          <div className={styles.div}>3</div>
          <div className={styles.line} />
        </div>
        <div className={styles.highestSubs}>
          <b className={styles.compliants}>Compliants</b>
          <div className={styles.div1}>99</div>
          <div className={styles.line1} />
        </div>
        <div className={styles.lowestSubs}>
          <b className={styles.resolvedComplaints}>Resolved Complaints</b>
          <div className={styles.div2}>56</div>
          <div className={styles.line2} />
        </div>
      </div>
      <div className={styles.tabsBgParent}>
        <div className={styles.tabsBg} />
        <div className={styles.upcomingBills}>
          <div className={styles.rectangle} />
          <div className={styles.peopleResponses}>People Responses</div>
        </div>
        <div className={styles.rectangle1} />
        <div className={styles.complaints}>Complaints</div>
      </div>
    </div>
  );
};

InfoBlockJobs.propTypes = {
  className: PropTypes.string,
};

export default InfoBlockJobs;
