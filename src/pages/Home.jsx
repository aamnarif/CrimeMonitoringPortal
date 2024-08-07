import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Card from "../components/Card";
import Card1 from "../components/Card1";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  const onButtonContainerClick = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onTextContainerClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onTextContainerClick1 = useCallback(() => {
    navigate("/crime-reports");
  }, [navigate]);

  const onTextContainerClick2 = useCallback(() => {
    navigate("/crime-responses");
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate("/contact-us");
  }, [navigate]);

  const onLoginTextClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className="home1">
      <div className="hero1">
        <div className="header1">
          <div className="logo1">
            <img className="logo-item" alt="" src="/group-33@2x.png" />
            <div className="crime-portal1">{`Crime Portal  `}</div>
          </div>
          <div className="menu1">
            <div className="text9">
              <div className="search-crime">Home</div>
            </div>
            <div className="text10" onClick={onTextContainerClick}>
              <div className="about-us1">About Us</div>
            </div>
            <div className="text10" onClick={onTextContainerClick1}>
              <div className="about-us1">Crime Reports</div>
            </div>
            <div className="text10" onClick={onTextContainerClick2}>
              <div className="crime-responses2">{`Crime Response's `}</div>
            </div>
            <div className="text9">
              <div className="contact-us2" onClick={onContactUsTextClick}>
                Contact Us
              </div>
            </div>
          </div>
          <div className="buttons1">
            <div className="login1" onClick={onLoginTextClick}>
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
        <div className="textinputs-icons">
          <div className="text-inputs">
            <div className="text14">
              <div className="text15">
                <b className="report-track-prevent">
                  Report, Track, Prevent – For a Safer Tomorrow
                </b>
                <div className="safeguarding-together-your">
                  Safeguarding Together: Your Bridge to a Secure Environment
                </div>
              </div>
            </div>
            <div className="search">
              <div className="text-iconsbg">
                <div className="text-icons1">
                  <div className="text16">
                    <div className="crime-title">Crime Title</div>
                  </div>
                  <div className="text-icon">
                    <div className="crime-title">Select Location</div>
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                  <div className="text-icon1">
                    <div className="crime-title">Select Category</div>
                    <img
                      className="chevron-down-icon"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="button">
                <img className="search-icon" alt="" src="/search.svg" />
                <div className="search-crime">Search Crime</div>
              </div>
            </div>
          </div>
          <div className="icons-text1">
            <div className="icon-text">
              <div className="iconbg">
                <img
                  className="briefcase2-2-icon"
                  alt=""
                  src="/briefcase2-21.svg"
                />
              </div>
              <div className="text15">
                <b className="browse-by-category">25,850</b>
                <div className="cases">Cases</div>
              </div>
            </div>
            <div className="icon-text">
              <div className="iconbg">
                <img className="g2079-icon" alt="" src="/g2079@2x.png" />
              </div>
              <div className="text15">
                <b className="browse-by-category">10,250</b>
                <div className="cases">People</div>
              </div>
            </div>
            <div className="icon-text">
              <div className="iconbg2">
                <img className="city-1-icon" alt="" src="/city-1.svg" />
                <img
                  className="building-1-icon"
                  alt=""
                  src="/building-1@2x.png"
                />
              </div>
              <div className="text15">
                <b className="browse-by-category">18,400</b>
                <div className="cases">Areas Located</div>
              </div>
            </div>
          </div>
        </div>
        <div className="logos" />
      </div>
      <div className="jobs">
        <div className="text20">
          <div className="text21">
            <b className="recent-crimes-happened">recent Crimes Happened</b>
            <div className="stay-informed-and">
              Stay informed and vigilant with our comprehensive database of
              documented incidents. Our system provides detailed records of
              reported crimes, giving you insight into the safety of your
              community. By understanding the nature and frequency of local
              incidents, you can take proactive steps to protect yourself and
              your loved ones. Accessing this information empowers you to stay
              aware of potential threats and contributes to a safer environment
              for everyone. Stay connected, stay informed, and play a vital role
              in community safety.
            </div>
          </div>
          <div className="view-all">View all</div>
        </div>
        <div className="cards2">
          <Card
            cardPosition="unset"
            minAgo="updated"
            minAgoFontFamily="Poppins"
            icon="/icon1@2x.png"
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
            g135="/g1351@2x.png"
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
            icon="/icon1@2x.png"
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
            g135="/g1351@2x.png"
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
            icon="/icon1@2x.png"
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
            g135="/g1351@2x.png"
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
            icon="/icon1@2x.png"
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
            g135="/g1351@2x.png"
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
            icon="/icon1@2x.png"
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
            g135="/g1351@2x.png"
            prop="$38000-$40000"
            iconTextVisible2={false}
            newYorkUSA="Boston, USA"
            register="See More"
            registerFontFamily="Poppins"
          />
        </div>
      </div>
      <div className="category">
        <div className="text-inputs">
          <b className="browse-by-category">Browse by Category</b>
          <div className="at-eu-lobortis">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque rhoncus. Lectus dolor
            blandit massa pretium id ultrices phasellus tortor. Risus risus
            lectus augue justo lacus viverra sit. Ultricies purus dolor viverra
            mi laoreet at cursus justo. Ultrices purus diam egestas amet
            faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo
            sagittis consectetur diam morbi erat aenean. Vulputate praesent
            congue faucibus in euismod feugiat euismod volutpat. Adipiscing
            risus amet phasellus imperdiet eget vel pulvinar. Risus in felis
            faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id
            tincidunt nunc.
          </div>
        </div>
        <div className="cards3">
          <div className="card">
            <img
              className="agriculture-2-icon"
              alt=""
              src="/agriculture-2@2x.png"
            />
            <b className="browse-by-category">Agriculture</b>
            <div className="badge">
              <div className="browse-by-category">1254 jobs</div>
            </div>
          </div>
          <div className="card">
            <img
              className="agriculture-2-icon1"
              alt=""
              src="/agriculture-21.svg"
            />
            <b className="browse-by-category">Metal Production</b>
            <div className="badge">
              <div className="browse-by-category">816 jobs</div>
            </div>
          </div>
          <div className="card">
            <img
              className="agriculture-2-icon"
              alt=""
              src="/agriculture-211@2x.png"
            />
            <b className="browse-by-category">Commerce</b>
            <div className="badge">
              <div className="browse-by-category">2082 obs</div>
            </div>
          </div>
          <div className="card">
            <img
              className="agriculture-2-icon"
              alt=""
              src="/agriculture-22@2x.png"
            />
            <b className="browse-by-category">Construction</b>
            <div className="badge">
              <div className="browse-by-category">1520 jobs</div>
            </div>
          </div>
          <div className="card">
            <img
              className="agriculture-2-icon1"
              alt=""
              src="/agriculture-23.svg"
            />
            <b className="browse-by-category">{`Hotels & Tourism`}</b>
            <div className="badge">
              <div className="browse-by-category">1022 jobs</div>
            </div>
          </div>
          <div className="card">
            <img
              className="agriculture-2-icon"
              alt=""
              src="/agriculture-24@2x.png"
            />
            <b className="browse-by-category">Education</b>
            <div className="badge">
              <div className="browse-by-category">1496 jobs</div>
            </div>
          </div>
          <div className="card">
            <img
              className="agriculture-2-icon"
              alt=""
              src="/agriculture-25@2x.png"
            />
            <b className="browse-by-category">Financial Services</b>
            <div className="badge">
              <div className="browse-by-category">1529 jobs</div>
            </div>
          </div>
          <div className="card">
            <img
              className="agriculture-2-icon"
              alt=""
              src="/agriculture-26@2x.png"
            />
            <b className="browse-by-category">Transport</b>
            <div className="badge">
              <div className="browse-by-category">1244 jobs</div>
            </div>
          </div>
        </div>
      </div>
      <div className="category1">
        <div className="text-inputs">
          <b className="browse-by-category">Browse by Crime Category</b>
          <div className="explore-crime-types">
            Explore Crime Types and Patterns
          </div>
        </div>
        <div className="card-parent">
          <Card1
            cardPosition="unset"
            agriculture2="/agriculture-27@2x.png"
            showAgriculture2Icon={false}
            agriculture="MURDER"
            agricultureFontFamily="Poppins"
            jobs="20"
          />
          <Card1
            cardPosition="unset"
            showAgriculture2Icon={false}
            agriculture="TARGETED KILLING"
            agricultureFontFamily="Poppins"
            jobs="50"
          />
          <Card1
            cardPosition="unset"
            agriculture2="/agriculture-29@2x.png"
            showAgriculture2Icon={false}
            agriculture="MURDER DURING ROBBERY"
            agricultureFontFamily="Poppins"
            jobs="10"
          />
          <Card1
            cardPosition="unset"
            agriculture2="/agriculture-210@2x.png"
            showAgriculture2Icon={false}
            agriculture="BOMB BLAST"
            agricultureFontFamily="Poppins"
            jobs="2"
          />
          <Card1
            cardPosition="unset"
            agriculture2="/agriculture-2111.svg"
            showAgriculture2Icon={false}
            agriculture="HIGH WAY ROBBERY"
            agricultureFontFamily="Poppins"
            jobs="30"
          />
          <Card1
            cardPosition="unset"
            agriculture2="/agriculture-212@2x.png"
            showAgriculture2Icon={false}
            agriculture="BANK ROBBERY"
            agricultureFontFamily="Poppins"
            jobs="10"
          />
          <Card1
            cardPosition="unset"
            agriculture2="/agriculture-29@2x.png"
            showAgriculture2Icon={false}
            agriculture="CAR SNATCHING"
            agricultureFontFamily="Poppins"
            jobs="25"
          />
          <Card1
            cardPosition="unset"
            agriculture2="/agriculture-213@2x.png"
            showAgriculture2Icon={false}
            agriculture="GANG RAPE"
            agricultureFontFamily="Poppins"
            jobs="12"
          />
        </div>
      </div>
      <div className="info-block">
        <div className="img-text-buttons">
          <img className="img-icon" alt="" src="/img@2x.png" />
          <div className="text-buttons">
            <div className="text21">
              <b className="enhancing-community-safety">
                Enhancing Community Safety Together
              </b>
              <div className="in-our-shared">
                In our shared mission to enhance community safety, collaboration
                is key. By working together, residents, law enforcement, and
                local organizations can create a proactive approach to crime
                prevention. Our platform encourages open communication and
                reporting, empowering everyone to contribute to a safer
                environment. With access to real-time data and resources,
                community members can stay informed about potential risks.
                Together, we can build a resilient community that prioritizes
                safety and well-being. Join us in fostering a culture of
                vigilance and support, where everyone plays a role in keeping
                our neighborhoods secure.
              </div>
            </div>
            <div className="buttons2">
              <Button
                buttonPosition="unset"
                buttonWidth="unset"
                buttonTop="unset"
                buttonLeft="unset"
                register="Search Crime"
                registerFontFamily="Poppins"
              />
              <div className="learn-more">Learn more</div>
            </div>
          </div>
        </div>
        <div className="counter">
          <div className="text24">
            <b className="browse-by-category">12+</b>
            <div className="crime-reporting">Crime Reporting</div>
          </div>
          <div className="text25">
            <b className="browse-by-category">200+</b>
            <div className="crime-reporting">Active cases</div>
          </div>
          <div className="text26">
            <b className="browse-by-category">18+</b>
            <div className="crime-reporting">{`Crime Areas `}</div>
          </div>
        </div>
      </div>
      <div className="banner">
        <div className="banner1">
          <div className="imgs">
            <img className="img-icon1" alt="" src="/img1@2x.png" />
            <img className="img-icon2" alt="" src="/img2@2x.png" />
            <img className="img-icon3" alt="" src="/img3@2x.png" />
            <img className="img-icon4" alt="" src="/img4@2x.png" />
            <img className="img-icon5" alt="" src="/img5@2x.png" />
          </div>
          <Button
            buttonPosition="absolute"
            buttonWidth="unset"
            buttonTop="316px"
            buttonLeft="65px"
            register="Search Crime"
            registerFontFamily="Poppins"
          />
          <div className="text27">
            <b className="uniting-for-safety">
              Uniting for Safety: Your Portal to Crime-Free Living
            </b>
            <div className="insight-into-neighborhood">
              Insight into Neighborhood Security
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials">
        <div className="text-inputs">
          <div className="search-crime">Response From People On Complaints</div>
          <div className="at-eu-lobortis">
            At eu lobortis pretium tincidunt amet lacus ut aenean aliquet.
            Blandit a massa elementum id scelerisque rhoncus. Lectus dolor
            blandit massa pretium id ultrices phasellus tortor. Risus risus
            lectus augue justo lacus viverra sit. Ultricies purus dolor viverra
            mi laoreet at cursus justo. Ultrices purus diam egestas amet
            faucibus tempor blandit. Elit velit mauris aliquam est diam. Leo
            sagittis consectetur diam morbi erat aenean. Vulputate praesent
            congue faucibus in euismod feugiat euismod volutpat. Adipiscing
            risus amet phasellus imperdiet eget vel pulvinar. Risus in felis
            faucibus sit. Scelerisque consequat iaculis mauris amet vel felis id
            tincidunt nunc.
          </div>
        </div>
        <div className="cards4">
          <div className="card8">
            <div className="stars-text">
              <div className="stars-text1">
                <div className="robbery-incident-reported">
                  Robbery Incident Reported
                </div>
              </div>
              <i className="i-witnessed-the">
                I witnessed the incident and immediately contacted the
                authorities. We need to work together to increase neighborhood
                watch programs to prevent further occurrences.
              </i>
            </div>
            <div className="avatar-text">
              <div className="avatar" />
              <div className="stars-text1">
                <div className="robbery-incident-reported">Anonymous</div>
              </div>
            </div>
            <img className="quotes-icon" alt="" src="/quotes.svg" />
          </div>
          <div className="card8">
            <div className="stars-text">
              <div className="stars-text1">
                <div className="snatching-incident-on">
                  Snatching Incident on Main Street
                </div>
              </div>
              <i className="i-witnessed-the">
                This is alarming! We should organize a community meeting to
                discuss safety measures and possibly install more street lights
                in the area.
              </i>
            </div>
            <div className="avatar-text">
              <div className="avatar1" />
              <div className="stars-text1">
                <div className="robbery-incident-reported">Anonymous</div>
              </div>
            </div>
            <img className="quotes-icon" alt="" src="/quotes.svg" />
          </div>
          <div className="card8">
            <div className="stars-text">
              <div className="stars-text1">
                <div className="robbery-incident-reported">
                  Addressing Gang Rape
                </div>
              </div>
              <i className="i-witnessed-the">
                This is a devastating incident that requires urgent action. We
                must support the victims and advocate for stronger community
                support services and educational programs on consent and safety.
                Let’s work together to raise awareness and ensure that such
                crimes are reported and addressed effectively.
              </i>
            </div>
            <div className="avatar-text">
              <div className="avatar1" />
              <div className="stars-text1">
                <div className="robbery-incident-reported">Anonymous</div>
              </div>
            </div>
            <img className="quotes-icon" alt="" src="/quotes.svg" />
          </div>
        </div>
      </div>
      <div className="blog">
        <div className="text21">
          <div className="search-crime">News and Blog Of Recent Crimes</div>
          <div className="crime-in-karachi">
            Crime in Karachi: What’s Happening Now?
          </div>
        </div>
        <div className="cards5">
          <div className="card11">
            <div className="img-badge">
              <div className="badge8">
                <div className="search-crime">News</div>
              </div>
            </div>
            <div className="text-icon2">
              <div className="text33">
                <div className="feb">17 Feb</div>
                <div className="cctv-footage-thief-container">
                  <p className="cctv-footage-thief">
                    CCTV footage: Thief uses child as a cover while lifting bike
                    in Karachi
                  </p>
                </div>
              </div>
              <div className="text-icon3">
                <div className="read-more">Read more</div>
                <img
                  className="arrow-right-icon"
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
          </div>
          <div className="card11">
            <div className="img-badge1">
              <div className="badge8">
                <div className="search-crime">Blog</div>
              </div>
            </div>
            <div className="text-icon2">
              <div className="text33">
                <div className="feb">24 Jan</div>
                <div className="cctv-footage-thief-container">
                  <p className="cctv-footage-thief">
                    Lyari gang war criminals among 25 arrested in Karachi
                  </p>
                </div>
              </div>
              <div className="text-icon3">
                <div className="read-more">Read more</div>
                <img
                  className="arrow-right-icon"
                  alt=""
                  src="/arrowright.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="text-icons2">
          <div className="logo-text-icon">
            <div className="logo2">
              <img className="logo-item" alt="" src="/group-331@2x.png" />
              <div className="search-crime">Crime Portal</div>
            </div>
            <div className="our-crime-monitoring">
              Our Crime Monitoring Portal provides real-time crime data and
              empowers citizens to report incidents. Together, we enhance public
              safety and foster community collaboration.
            </div>
          </div>
          <div className="text35">
            <div className="robbery-incident-reported">Pages</div>
            <div className="text36">
              <div className="home3">Home</div>
              <div className="home3">About Us</div>
              <div className="home3">Crime Reports</div>
              <div className="home3">{`Crime Responses `}</div>
              <div className="home3">Contact Us</div>
            </div>
          </div>
          <div className="card11">
            <div className="robbery-incident-reported">Crime Categories</div>
            <div className="text36">
              <div className="browse-by-category">Murder</div>
              <div className="browse-by-category">Target Killing</div>
              <div className="browse-by-category">Bomb Blast</div>
              <div className="browse-by-category">{`High Way & Bank Robbery`}</div>
              <div className="browse-by-category">{`Snatching `}</div>
              <div className="browse-by-category">Gang Rape</div>
            </div>
          </div>
          <div className="text-input-button">
            <div className="newsletter">Newsletter</div>
            <div className="get-updates-of">Get Updates Of Latest Crimes</div>
            <div className="input">
              <div className="email-address">Email Address</div>
            </div>
            <div className="button1">
              <b className="browse-by-category">Subscribe now</b>
            </div>
          </div>
        </div>
        <div className="text39">
          <div className="copyright-crime-portal">{` © Copyright Crime Portal  2024. `}</div>
          <div className="text40">
            <div className="terms-conditions">Privacy Policy</div>
            <div className="terms-conditions">{`Terms & Conditions`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
