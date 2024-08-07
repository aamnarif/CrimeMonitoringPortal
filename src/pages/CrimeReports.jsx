import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Footer from "../components/Footer";
import "./CrimeReports.css";

const CrimeReports = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onTextContainerClick1 = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onCrimeResponsesTextClick = useCallback(() => {
    navigate("/crime-responses");
  }, [navigate]);

  const onTextContainerClick2 = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className="crime-reports">
      <div className="hero">
        <div className="header">
          <div className="logo">
            <img className="logo-child" alt="" src="/group-33@2x.png" />
            <div className="crime-portal">{`Crime Portal  `}</div>
          </div>
          <div className="menu">
            <div className="text3" onClick={onTextContainerClick}>
              <div className="home">Home</div>
            </div>
            <div className="text3" onClick={onTextContainerClick1}>
              <div className="home">About Us</div>
            </div>
            <div className="text5">
              <div className="crime-reports1">Crime Reports</div>
            </div>
            <div className="text5">
              <div
                className="crime-responses1"
                onClick={onCrimeResponsesTextClick}
              >{`Crime Response's `}</div>
            </div>
            <div className="text3" onClick={onTextContainerClick2}>
              <div className="home">Contact Us</div>
            </div>
          </div>
          <div className="buttons">
            <div className="login" onClick={onLoginTextClick}>
              Login
            </div>
            <Button
              onButtonContainerClick={onButtonContainerClick}
              buttonPosition="unset"
              buttonWidth="unset"
              buttonTop="unset"
              buttonLeft="unset"
              register="Register"
              registerFontFamily="Poppins"
            />
          </div>
        </div>
        <b className="crime-reports2">Crime Reports</b>
      </div>
      <div className="side-bar-cars-banner">
        <div className="cards">
          <div className="cards1">
            <Card
              cardPosition="unset"
              minAgo="updated"
              minAgoFontFamily="Poppins"
              icon="/icon@2x.png"
              logo="/logo.svg"
              developerExpertInJavaPhyt="Crime Reports Of 2023"
              developerExpertFontFamily="Poppins"
              armstrongOHaraAndHilll="Karachi East, West, South, North"
              armstrongOHaraAndFontFamily="Poppins"
              iconsTextWidth="593px"
              iconsTextHeight="24px"
              showIconText={false}
              iconTextWidth="unset"
              iconTextHeight="unset"
              showBriefcase22Icon
              developer={`Hotels & Tourism`}
              showDeveloper
              developerFontFamily="Poppins"
              developerWidth="unset"
              iconTextVisible={false}
              fullTime="Full time"
              iconTextVisible1={false}
              g135="/g135@2x.png"
              prop="$40000-$42000"
              iconTextVisible2={false}
              newYorkUSA="New-York, USA"
              register="See More"
              registerFontFamily="Poppins"
            />
            <Card
              cardPosition="unset"
              minAgo="updated"
              minAgoFontFamily="Poppins"
              icon="/icon@2x.png"
              logo="/logo1.svg"
              developerExpertInJavaPhyt="Crime Reports Of 2022"
              developerExpertFontFamily="Poppins"
              armstrongOHaraAndHilll="Karachi East, West, South, North"
              armstrongOHaraAndFontFamily="Poppins"
              iconsTextWidth="593px"
              iconsTextHeight="24px"
              showIconText={false}
              iconTextWidth="unset"
              iconTextHeight="unset"
              showBriefcase22Icon
              developer="Media"
              showDeveloper
              developerFontFamily="Poppins"
              developerWidth="unset"
              iconTextVisible={false}
              fullTime="Part time"
              iconTextVisible1={false}
              g135="/g135@2x.png"
              prop="$28000-$32000"
              iconTextVisible2={false}
              newYorkUSA="Los- Angeles, USA"
              register="See More"
              registerFontFamily="Poppins"
            />
            <Card
              cardPosition="unset"
              minAgo="updated"
              minAgoFontFamily="Poppins"
              icon="/icon@2x.png"
              logo="/logo2.svg"
              developerExpertInJavaPhyt="Crime Reports Of 2021"
              developerExpertFontFamily="Poppins"
              armstrongOHaraAndHilll="Karachi East, West, South, North"
              armstrongOHaraAndFontFamily="Poppins"
              iconsTextWidth="593px"
              iconsTextHeight="24px"
              showIconText={false}
              iconTextWidth="unset"
              iconTextHeight="unset"
              showBriefcase22Icon
              developer="Construction"
              showDeveloper
              developerFontFamily="Poppins"
              developerWidth="unset"
              iconTextVisible={false}
              fullTime="Full time"
              iconTextVisible1={false}
              g135="/g135@2x.png"
              prop="$48000-$50000"
              iconTextVisible2={false}
              newYorkUSA="Texas, USA"
              register="See More"
              registerFontFamily="Poppins"
            />
            <Card
              cardPosition="unset"
              minAgo="24 min ago"
              minAgoFontFamily="Poppins"
              icon="/icon@2x.png"
              logo="/logo3.svg"
              developerExpertInJavaPhyt="Crime Reports Of 2020"
              developerExpertFontFamily="Poppins"
              armstrongOHaraAndHilll="Karachi East, West, South, North"
              armstrongOHaraAndFontFamily="Poppins"
              iconsTextWidth="593px"
              iconsTextHeight="24px"
              showIconText={false}
              iconTextWidth="unset"
              iconTextHeight="unset"
              showBriefcase22Icon
              developer="Commerce"
              showDeveloper
              developerFontFamily="Poppins"
              developerWidth="unset"
              iconTextVisible={false}
              fullTime="Full time"
              iconTextVisible1={false}
              g135="/g135@2x.png"
              prop="$42000-$48000"
              iconTextVisible2={false}
              newYorkUSA="Florida, USA"
              register="See More"
              registerFontFamily="Poppins"
            />
            <Card
              cardPosition="unset"
              minAgo="updated"
              minAgoFontFamily="Poppins"
              icon="/icon@2x.png"
              logo="/logo4.svg"
              developerExpertInJavaPhyt="Crime Reports Of 2019"
              developerExpertFontFamily="Poppins"
              armstrongOHaraAndHilll="Karachi East, West, South, North"
              armstrongOHaraAndFontFamily="Poppins"
              iconsTextWidth="unset"
              iconsTextHeight="unset"
              showIconText
              iconTextWidth="111px"
              iconTextHeight="24px"
              showBriefcase22Icon={false}
              developer="Commerce"
              showDeveloper={false}
              developerFontFamily="Poppins"
              developerWidth="92px"
              iconTextVisible={false}
              fullTime="Full time"
              iconTextVisible1={false}
              g135="/g135@2x.png"
              prop="$38000-$40000"
              iconTextVisible2={false}
              newYorkUSA="Boston, USA"
              register="See More"
              registerFontFamily="Poppins"
            />
          </div>
        </div>
      </div>
      <div className="top-company">
        <div className="text8">
          <b className="crime-statistics">Crime Statistics</b>
          <div className="our-portal-delivers">
            Our portal delivers dynamic crime statistics, offering insights into
            registered complaints such as robberies, snatchings, bomb blasts,
            gang rapes, and more.
          </div>
        </div>
        <div className="frame-parent">
          <div className="line-parent">
            <div className="frame-child" />
            <div className="provisions-month">Provisions Month</div>
            <div className="march-2024-parent">
              <div className="march-2024">March 2024</div>
              <img
                className="feather-icon-calendar"
                alt=""
                src="/feathericon--calendar.svg"
              />
            </div>
            <div className="feather-icon-more-horizontal-wrapper">
              <img
                className="feather-icon-calendar"
                alt=""
                src="/feathericon--morehorizontal.svg"
              />
            </div>
          </div>
          <div className="total-visits-parent">
            <b className="total-visits">Total visits</b>
            <img
              className="feather-icon-alert-circle"
              alt=""
              src="/feathericon--alertcircle.svg"
            />
          </div>
          <div className="shape-parent">
            <img className="shape-icon" alt="" src="/shape.svg" />
            <div className="m-parent">
              <div className="m">260M</div>
              <div className="m1">220M</div>
              <div className="m2">180M</div>
              <div className="m3">140M</div>
            </div>
            <div className="line-group">
              <div className="group-child" />
              <div className="group-item" />
              <div className="group-inner" />
              <div className="line-div" />
            </div>
            <img className="group-icon" alt="" src="/group-3.svg" />
            <div className="parent">
              <div className="div">1</div>
              <div className="div1">5</div>
              <div className="div2">10</div>
              <div className="div3">15</div>
              <div className="div4">20</div>
              <div className="div5">25</div>
              <div className="div6">30</div>
            </div>
            <div className="line-container">
              <div className="group-child1" />
              <div className="tooltip">
                <img className="shape-icon1" alt="" src="/shape1.svg" />
                <div className="label-parent">
                  <div className="label">This Month</div>
                  <b className="label1">22, 123</b>
                  <div className="label2">May</div>
                </div>
              </div>
              <div className="selector" />
            </div>
          </div>
        </div>
        <div className="frame-group">
          <div className="crimes-parent">
            <b className="total-visits">Crimes</b>
            <img
              className="feather-icon-alert-circle"
              alt=""
              src="/feathericon--alertcircle1.svg"
            />
          </div>
          <div className="active-percentage-parent">
            <b className="total-visits">Active Percentage</b>
            <img
              className="feather-icon-alert-circle"
              alt=""
              src="/feathericon--alertcircle1.svg"
            />
          </div>
          <div className="group-parent">
            <div className="frame-1322-1-parent">
              <img className="frame-1322-1" alt="" src="/frame-1322-1@2x.png" />
              <div className="ellipse-div" />
            </div>
            <b className="b">100</b>
          </div>
          <div className="frame-container">
            <div className="rectangle-wrapper">
              <div className="frame-item" />
            </div>
            <div className="label-group">
              <div className="march-2024">Reports</div>
              <div className="label4">330 users</div>
            </div>
          </div>
          <div className="frame-div">
            <div className="frame-parent1">
              <div className="rectangle-wrapper">
                <div className="frame-item" />
              </div>
              <div className="label-group">
                <div className="march-2024">Online</div>
                <div className="label4">9 users</div>
              </div>
            </div>
            <div className="frame-parent1">
              <div className="rectangle-wrapper">
                <div className="rectangle-div" />
              </div>
              <div className="label-group">
                <div className="march-2024">Offline</div>
                <div className="label4">4 users</div>
              </div>
            </div>
          </div>
          <div className="label-parent2">
            <b className="label9">70</b>
            <div className="label10">Total</div>
          </div>
          <div className="frame-parent3">
            <div className="rectangle-wrapper">
              <div className="frame-child1" />
            </div>
            <div className="label-group">
              <div className="march-2024">Responses</div>
              <div className="label4">15 users</div>
            </div>
          </div>
          <div className="frame-child2" />
          <div className="rectangle-parent">
            <div className="group-child2" />
            <div className="group-child3" />
          </div>
        </div>
      </div>
      <Footer
        propPadding="0px 202px 60px"
        propPadding1="100px 202px 60px"
        group33="/group-33@2x.png"
      />
    </div>
  );
};

export default CrimeReports;
