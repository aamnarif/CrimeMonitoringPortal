import Hero1 from "../components/Hero1";
import Jobs from "../components/Jobs";
import Card1 from "../components/Card1";
import InfoBlock from "../components/InfoBlock";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Hero1 />
      <Jobs />
      <div className={styles.category}>
        <div className={styles.text}>
          <b className={styles.browseByCategory}>Browse by Category</b>
          <div className={styles.atEuLobortis}>
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
        <div className={styles.cards}>
          <div className={styles.card}>
            <img
              className={styles.agriculture2Icon}
              alt=""
              src="/agriculture-2@2x.png"
            />
            <b className={styles.browseByCategory}>Agriculture</b>
            <div className={styles.badge}>
              <div className={styles.browseByCategory}>1254 jobs</div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.agriculture2Icon1}
              alt=""
              src="/agriculture-2.svg"
            />
            <b className={styles.browseByCategory}>Metal Production</b>
            <div className={styles.badge}>
              <div className={styles.browseByCategory}>816 jobs</div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.agriculture2Icon}
              alt=""
              src="/agriculture-21@2x.png"
            />
            <b className={styles.browseByCategory}>Commerce</b>
            <div className={styles.badge}>
              <div className={styles.browseByCategory}>2082 obs</div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.agriculture2Icon}
              alt=""
              src="/agriculture-22@2x.png"
            />
            <b className={styles.browseByCategory}>Construction</b>
            <div className={styles.badge}>
              <div className={styles.browseByCategory}>1520 jobs</div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.agriculture2Icon1}
              alt=""
              src="/agriculture-23.svg"
            />
            <b className={styles.browseByCategory}>{`Hotels & Tourism`}</b>
            <div className={styles.badge}>
              <div className={styles.browseByCategory}>1022 jobs</div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.agriculture2Icon}
              alt=""
              src="/agriculture-24@2x.png"
            />
            <b className={styles.browseByCategory}>Education</b>
            <div className={styles.badge}>
              <div className={styles.browseByCategory}>1496 jobs</div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.agriculture2Icon}
              alt=""
              src="/agriculture-25@2x.png"
            />
            <b className={styles.browseByCategory}>Financial Services</b>
            <div className={styles.badge}>
              <div className={styles.browseByCategory}>1529 jobs</div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              className={styles.agriculture2Icon}
              alt=""
              src="/agriculture-26@2x.png"
            />
            <b className={styles.browseByCategory}>Transport</b>
            <div className={styles.badge}>
              <div className={styles.browseByCategory}>1244 jobs</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.category1}>
        <div className={styles.text}>
          <b className={styles.browseByCategory}>Browse by Crime Category</b>
          <div className={styles.exploreCrimeTypes}>
            Explore Crime Types and Patterns
          </div>
        </div>
        <div className={styles.cardParent}>
          <Card1
            agriculture2="/agriculture-27@2x.png"
            agriculture="MURDER"
            jobs="20"
            showAgriculture2Icon={false}
            cardPosition="unset"
            agricultureFontFamily="Poppins"
          />
          <Card1
            agriculture="TARGETED KILLING"
            jobs="50"
            showAgriculture2Icon={false}
            cardPosition="unset"
            agricultureFontFamily="Poppins"
          />
          <Card1
            agriculture2="/agriculture-29@2x.png"
            agriculture="MURDER DURING ROBBERY"
            jobs="10"
            showAgriculture2Icon={false}
            cardPosition="unset"
            agricultureFontFamily="Poppins"
          />
          <Card1
            agriculture2="/agriculture-210@2x.png"
            agriculture="BOMB BLAST"
            jobs="2"
            showAgriculture2Icon={false}
            cardPosition="unset"
            agricultureFontFamily="Poppins"
          />
          <Card1
            agriculture2="/agriculture-211.svg"
            agriculture="HIGH WAY ROBBERY"
            jobs="30"
            showAgriculture2Icon={false}
            cardPosition="unset"
            agricultureFontFamily="Poppins"
          />
          <Card1
            agriculture2="/agriculture-212@2x.png"
            agriculture="BANK ROBBERY"
            jobs="10"
            showAgriculture2Icon={false}
            cardPosition="unset"
            agricultureFontFamily="Poppins"
          />
          <Card1
            agriculture2="/agriculture-29@2x.png"
            agriculture="CAR SNATCHING"
            jobs="25"
            showAgriculture2Icon={false}
            cardPosition="unset"
            agricultureFontFamily="Poppins"
          />
          <Card1
            agriculture2="/agriculture-213@2x.png"
            agriculture="GANG RAPE"
            jobs="12"
            showAgriculture2Icon={false}
            cardPosition="unset"
            agricultureFontFamily="Poppins"
          />
        </div>
      </div>
      <InfoBlock />
      <Banner />
      <Testimonials />
      <Blog />
      <div className={styles.footer}>
        <div className={styles.textIcons}>
          <div className={styles.logoTextIcon}>
            <div className={styles.logo}>
              <img
                className={styles.logoChild}
                alt=""
                src="/group-331@2x.png"
              />
              <div className={styles.crimePortal}>Crime Portal</div>
            </div>
            <div className={styles.ourCrimeMonitoring}>
              Our Crime Monitoring Portal provides real-time crime data and
              empowers citizens to report incidents. Together, we enhance public
              safety and foster community collaboration.
            </div>
          </div>
          <div className={styles.text1}>
            <div className={styles.pages}>Pages</div>
            <div className={styles.text2}>
              <div className={styles.aboutUs}>Home</div>
              <div className={styles.aboutUs}>About Us</div>
              <div className={styles.aboutUs}>Crime Reports</div>
              <div className={styles.aboutUs}>{`Crime Responses `}</div>
              <div className={styles.aboutUs}>Contact Us</div>
            </div>
          </div>
          <div className={styles.text3}>
            <div className={styles.pages}>Crime Categories</div>
            <div className={styles.text2}>
              <div className={styles.browseByCategory}>Murder</div>
              <div className={styles.browseByCategory}>Target Killing</div>
              <div className={styles.browseByCategory}>Bomb Blast</div>
              <div
                className={styles.browseByCategory}
              >{`High Way & Bank Robbery`}</div>
              <div className={styles.browseByCategory}>{`Snatching `}</div>
              <div className={styles.browseByCategory}>Gang Rape</div>
            </div>
          </div>
          <div className={styles.textInputButton}>
            <div className={styles.newsletter}>Newsletter</div>
            <div className={styles.getUpdatesOf}>
              Get Updates Of Latest Crimes
            </div>
            <div className={styles.input}>
              <div className={styles.emailAddress}>Email Address</div>
            </div>
            <div className={styles.button}>
              <b className={styles.browseByCategory}>Subscribe now</b>
            </div>
          </div>
        </div>
        <div className={styles.text5}>
          <div
            className={styles.copyrightCrimePortal}
          >{` © Copyright Crime Portal  2024. `}</div>
          <div className={styles.text6}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.privacyPolicy}>{`Terms & Conditions`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
