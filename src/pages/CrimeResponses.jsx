import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import InfoBlockJobs from "../components/InfoBlockJobs";
import Form from "../components/Form";
import Footer from "../components/Footer";
import "./CrimeResponses.css";

const CrimeResponses = () => {
  const navigate = useNavigate();

  const onTextContainerClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onCrimeReportsTextClick = useCallback(() => {
    navigate("/crime-reports");
  }, [navigate]);

  const onTextContainerClick1 = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="crime-responses">
      <Hero
        headerHeight="unset"
        headerBackgroundImage="url('/hero1@3x.png')"
        onTextContainerClick1={onTextContainerClick}
        textOpacity="0.6"
        onCrimeReportsTextClick={onCrimeReportsTextClick}
        textOpacity1="unset"
        onTextContainerClick2={onTextContainerClick1}
        buttonsOpacity="0.6"
        contactUs="Crime Responses"
      />
      <div className="info-blockjobs-side-bar">
        <InfoBlockJobs />
        <div className="side-bar">
          <div className="job-overwiew">
            <div className="job-overwiew-inner">
              <div className="map-pin-parent">
                <img className="map-pin-icon1" alt="" src="/mappin2.svg" />
                <div className="location-parent">
                  <div className="location">Location</div>
                  <div className="krachikarachi">{`KrachiKarachi `}</div>
                </div>
              </div>
            </div>
            <div className="map-pin-wrapper">
              <img className="map-pin-icon2" alt="" src="/mappin3.svg" />
            </div>
          </div>
          <Form />
        </div>
      </div>
      <Footer
        propPadding="100px 202px 60px"
        propPadding1="0px 202px 60px"
        group33="/group-331@2x.png"
      />
    </div>
  );
};

export default CrimeResponses;
