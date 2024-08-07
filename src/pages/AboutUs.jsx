import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import "./AboutUs.css";

const AboutUs = () => {
  const navigate = useNavigate();

  const onCrimeReportsTextClick = useCallback(() => {
    navigate("/crime-reports");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/crime-responses");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  return (
    <div className="about-us3">
      <Hero
        headerHeight="322px"
        headerBackgroundImage="url('/hero@3x.png')"
        textOpacity="unset"
        onCrimeReportsTextClick={onCrimeReportsTextClick}
        onTextContainerClick3={onTextContainerClick}
        textOpacity1="0.6"
        buttonsOpacity="0.6"
        onContactUsTextClick={onContactUsTextClick}
        contactUs="About Us"
      />
      <div className="info-block1">
        <div className="text42">
          <b className="what-we-do-container">
            <p className="what-we-do">
              <span className="what">{`What `}</span>
              <span>We Do?</span>
            </p>
            <p className="p">{`   `}</p>
          </b>
          <div className="we-deliver-advanced-monitoring-wrapper">
            <div className="we-deliver-advanced">
              We deliver advanced monitoring solutions for comprehensive crime
              management. Our platform empowers communities with crime data
              insights, enabling proactive crime complaints and responses. Stay
              ahead of threats and protect your community.
            </div>
          </div>
        </div>
        <img
          className="default-design-a-image-that-is-icon"
          alt=""
          src="/default-design-a-image-that-is-showing-aesthetic-background-wi-0-1@2x.png"
        />
      </div>
      <div className="how-it-works">
        <div className="text43">
          <b className="how-it-works1">How it works</b>
          <div className="text-child" />
          <div className="discover-how-to">
            Discover how to effectively use our portal to report crimes, respond
            to incidents, and access valuable crime statistics in Karachi.
          </div>
        </div>
        <div className="cards6">
          <div className="card13">
            <div className="icon-bg">
              <img
                className="account2-1-icon"
                alt=""
                src="/account2-1@2x.png"
              />
            </div>
            <div className="text44">
              <b className="register-or-login">Register or Login</b>
              <div className="create-an-account">
                Create an account or log in to access our features.
              </div>
            </div>
          </div>
          <div className="card13">
            <div className="icon-bg">
              <img className="account2-1-icon" alt="" src="/cv1-1@2x.png" />
            </div>
            <div className="text44">
              <b className="register-or-login">Report Crime</b>
              <div className="easily-register-your">
                Easily register your complaint and report crimes through our
                intuitive interface.
              </div>
            </div>
          </div>
          <div className="card13">
            <div className="icon-bg">
              <img
                className="briefcase3-1-icon"
                alt=""
                src="/briefcase3-1.svg"
              />
            </div>
            <div className="text44">
              <b className="register-or-login">Response to Crimes</b>
              <div className="engage-with-the">
                Engage with the community by responding to crime reports and
                sharing information.
              </div>
            </div>
          </div>
          <div className="card13">
            <div className="icon-bg">
              <img
                className="account2-1-icon"
                alt=""
                src="/checkmark-1@2x.png"
              />
            </div>
            <div className="text44">
              <b className="register-or-login">View Crime Statistics</b>
              <div className="easily-register-your">
                Access detailed crime statistics and insights specific to
                Karachi.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="video">
        <div className="button-text">
          <b className="good-life-begins-container">
            <p className="what-we-do">{`Good Life Begins With `}</p>
            <p className="what-we-do">A Safe Community</p>
          </b>
        </div>
      </div>
      <div className="info-block-2">
        <div className="imgs1">
          <img className="img-icon6" alt="" src="/img6@2x.png" />
          <div className="imgs2">
            <img className="img-icon7" alt="" src="/img7@2x.png" />
            <img className="img-icon8" alt="" src="/img8@2x.png" />
          </div>
        </div>
        <div className="text-icons3">
          <div className="text-inner">
            <div className="text-inner">
              <div className="enhancing-community-safety-tog-parent">
                <b className="enhancing-community-safety-container">
                  <span>{`Enhancing Community `}</span>
                  <span className="safety-together">Safety Together</span>
                </b>
                <div className="in-our-shared1">{`In our shared mission to enhance community safety, collaboration is key. By working together, residents, law enforcement, and local organizations can create a proactive approach to crime prevention. `}</div>
              </div>
            </div>
          </div>
          <div className="icons-text2">
            <div className="row">
              <div className="icon-text3">
                <img
                  className="icon-text-child"
                  alt=""
                  src="/frame-484@2x.png"
                />
                <div className="safe-secure">{`Safe & Secure Community`}</div>
              </div>
              <div className="icon-text3">
                <img className="icon-text-item" alt="" src="/frame-4841.svg" />
                <div className="safe-secure">Response Optimization</div>
              </div>
            </div>
            <div className="row1">
              <div className="icon-text3">
                <img
                  className="icon-text-child"
                  alt=""
                  src="/frame-48411@2x.png"
                />
                <div className="safe-secure">Registering Complaints</div>
              </div>
              <div className="icon-text3">
                <img className="icon-text-item" alt="" src="/frame-4841.svg" />
                <div className="safe-secure">Predictive Policing Solutions</div>
              </div>
            </div>
          </div>
        </div>
        <img className="excellence1-1-icon" alt="" src="/excellence1-1.svg" />
      </div>
      <div className="blog2">
        <div className="text49">
          <div className="safe-secure">News and Blog</div>
          <div className="text-child" />
          <div className="crime-in-karachi1">
            Crime in Karachi: What’s Happening Now?
          </div>
        </div>
        <div className="cards7">
          <div className="text-inner">
            <div className="imgs1">
              <div className="imgs2">
                <div className="img-badge2">
                  <div className="badge10">
                    <div className="safe-secure">News</div>
                  </div>
                </div>
                <div className="text-icon6">
                  <div className="text50">
                    <div className="feb1">17 Feb</div>
                    <div className="cctv-footage-thief-container1">
                      <p className="what-we-do">
                        CCTV footage: Thief uses child as a cover while lifting
                        bike in Karachi
                      </p>
                    </div>
                  </div>
                  <div className="text-icon7">
                    <div className="read-more2">Read more</div>
                    <img
                      className="arrow-right-icon2"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="imgs2">
                <div className="img-badge3">
                  <div className="badge10">
                    <div className="safe-secure">Blog</div>
                  </div>
                </div>
                <div className="text-icon6">
                  <div className="text50">
                    <div className="feb1">24 Jan</div>
                    <div className="cctv-footage-thief-container1">
                      <p className="what-we-do">
                        Lyari gang war criminals among 25 arrested in Karachi
                      </p>
                    </div>
                  </div>
                  <div className="text-icon7">
                    <div className="read-more2">Read more</div>
                    <img
                      className="arrow-right-icon2"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-inner">
            <div className="imgs1">
              <div className="imgs2">
                <div className="img-badge2">
                  <div className="badge10">
                    <div className="safe-secure">News</div>
                  </div>
                </div>
                <div className="text-icon6">
                  <div className="text50">
                    <div className="feb1">17 Feb</div>
                    <div className="cctv-footage-thief-container1">
                      <p className="what-we-do">
                        CCTV footage: Thief uses child as a cover while lifting
                        bike in Karachi
                      </p>
                    </div>
                  </div>
                  <div className="text-icon7">
                    <div className="read-more2">Read more</div>
                    <img
                      className="arrow-right-icon2"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="imgs2">
                <div className="img-badge3">
                  <div className="badge10">
                    <div className="safe-secure">Blog</div>
                  </div>
                </div>
                <div className="text-icon6">
                  <div className="text50">
                    <div className="feb1">24 Jan</div>
                    <div className="cctv-footage-thief-container1">
                      <p className="what-we-do">
                        Lyari gang war criminals among 25 arrested in Karachi
                      </p>
                    </div>
                  </div>
                  <div className="text-icon7">
                    <div className="read-more2">Read more</div>
                    <img
                      className="arrow-right-icon2"
                      alt=""
                      src="/arrowright.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
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

export default AboutUs;
