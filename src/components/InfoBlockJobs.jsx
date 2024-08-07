import Complaint from "./Complaint";
import Complaint1 from "./Complaint1";
import PropTypes from "prop-types";
import "./InfoBlockJobs.css";

const InfoBlockJobs = ({ className = "" }) => {
  return (
    <div className={`info-block-jobs ${className}`}>
      <div className="complaint-1-parent">
        <Complaint complaint="Complaint" prop="1" />
        <Complaint
          propTop="72px"
          complaint="Complaint "
          propWidth="206px"
          prop="2"
        />
        <Complaint
          propTop="144px"
          complaint="Complaint "
          propWidth="calc(100% - 185px)"
          prop="3"
        />
        <Complaint1 complaint="Complaint" prop="4" />
      </div>
      <div className="complaint-1-group">
        <Complaint
          propTop="0px"
          complaint="Complaint "
          propWidth="calc(100% - 178px)"
          prop="5"
        />
        <Complaint
          propTop="72px"
          complaint="Complaint  "
          propWidth="141px"
          prop="6"
        />
        <Complaint
          propTop="144px"
          complaint="Complaint  "
          propWidth="calc(100% - 185px)"
          prop="7"
        />
        <Complaint1 complaint="Complaint " prop="8" />
      </div>
      <div className="active-subs-parent">
        <div className="active-subs">
          <b className="complaint-box">Complaint Box</b>
          <div className="div12">3</div>
          <div className="line" />
        </div>
        <div className="highest-subs">
          <b className="compliants">Compliants</b>
          <div className="div13">99</div>
          <div className="line1" />
        </div>
        <div className="lowest-subs">
          <b className="resolved-complaints">Resolved Complaints</b>
          <div className="div14">56</div>
          <div className="line2" />
        </div>
      </div>
      <div className="tabs-bg-parent">
        <div className="tabs-bg" />
        <div className="upcoming-bills">
          <div className="rectangle10" />
          <div className="people-responses">People Responses</div>
        </div>
        <div className="rectangle11" />
        <div className="complaints">Complaints</div>
      </div>
    </div>
  );
};

InfoBlockJobs.propTypes = {
  className: PropTypes.string,
};

export default InfoBlockJobs;
