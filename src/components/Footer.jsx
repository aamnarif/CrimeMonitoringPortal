import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "", propPadding, propPadding1, group33 }) => {
  const footerStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const footer1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={`footer1 ${className}`} style={footerStyle}>
      <div className="footer2" style={footer1Style}>
        <div className="text-icons4">
          <div className="logo-text-icon1">
            <div className="logo4">
              <img className="logo-child2" alt="" src={group33} />
              <div className="crime-portal4">Crime Portal</div>
            </div>
            <div className="our-crime-monitoring1">
              Our Crime Monitoring Portal provides real-time crime data and
              empowers citizens to report incidents. Together, we enhance public
              safety and foster community collaboration.
            </div>
          </div>
          <div className="text60">
            <div className="pages1">Pages</div>
            <div className="text61">
              <div className="home5">Home</div>
              <div className="home5">About Us</div>
              <div className="home5">Crime Reports</div>
              <div className="home5">{`Crime Responses `}</div>
              <div className="home5">Contact Us</div>
            </div>
          </div>
          <div className="text62">
            <div className="pages1">Crime Categories</div>
            <div className="text61">
              <div className="murder1">Murder</div>
              <div className="murder1">Target Killing</div>
              <div className="murder1">Bomb Blast</div>
              <div className="murder1">{`High Way & Bank Robbery`}</div>
              <div className="murder1">{`Snatching `}</div>
              <div className="murder1">Gang Rape</div>
            </div>
          </div>
          <div className="text-input-button1">
            <div className="newsletter1">Newsletter</div>
            <div className="get-updates-of1">Get Updates Of Latest Crimes</div>
            <div className="input1">
              <div className="email-address1">Email Address</div>
            </div>
            <div className="button4">
              <b className="murder1">Subscribe now</b>
            </div>
          </div>
        </div>
        <div className="text64">
          <div className="copyright-crime-portal1">{` © Copyright Crime Portal  2024. `}</div>
          <div className="text65">
            <div className="privacy-policy4">Privacy Policy</div>
            <div className="privacy-policy4">{`Terms & Conditions`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  group33: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default Footer;
