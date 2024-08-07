import Card from "./Card";
import PropTypes from "prop-types";
import styles from "./Jobs.module.css";

const Jobs = ({ className = "" }) => {
  return (
    <div className={[styles.jobs, className].join(" ")}>
      <div className={styles.text}>
        <div className={styles.text1}>
          <b className={styles.recentCrimesHappened}>recent Crimes Happened</b>
          <div className={styles.stayInformedAnd}>
            Stay informed and vigilant with our comprehensive database of
            documented incidents. Our system provides detailed records of
            reported crimes, giving you insight into the safety of your
            community. By understanding the nature and frequency of local
            incidents, you can take proactive steps to protect yourself and your
            loved ones. Accessing this information empowers you to stay aware of
            potential threats and contributes to a safer environment for
            everyone. Stay connected, stay informed, and play a vital role in
            community safety.
          </div>
        </div>
        <div className={styles.viewAll}>View all</div>
      </div>
      <div className={styles.cards}>
        <Card
          minAgo="updated"
          icon="/icon1@2x.png"
          logo="/logo.svg"
          developerExpertInJavaPhyt="Crime Reports Of 2023"
          armstrongOHaraAndHilll="Karachi East, West, South, North"
          developer={`Hotels & Tourism`}
          fullTime="Full time"
          g135="/g1351@2x.png"
          prop="$40000-$42000"
          newYorkUSA="New-York, USA"
          register="See More"
          showIconText={false}
          showBriefcase22Icon
          showDeveloper
          iconTextVisible={false}
          iconTextVisible1={false}
          iconTextVisible2={false}
          cardPosition="unset"
          minAgoFontFamily="Poppins"
          developerExpertFontFamily="Poppins"
          armstrongOHaraAndFontFamily="Poppins"
          iconsTextWidth="593px"
          iconsTextHeight="24px"
          iconTextWidth="unset"
          iconTextHeight="unset"
          developerFontFamily="Poppins"
          developerWidth="unset"
          registerFontFamily="Poppins"
        />
        <Card
          minAgo="updated"
          icon="/icon1@2x.png"
          logo="/logo1.svg"
          developerExpertInJavaPhyt="Crime Reports Of 2022"
          armstrongOHaraAndHilll="Karachi East, West, South, North"
          developer="Media"
          fullTime="Part time"
          g135="/g1351@2x.png"
          prop="$28000-$32000"
          newYorkUSA="Los- Angeles, USA"
          register="See More"
          showIconText={false}
          showBriefcase22Icon
          showDeveloper
          iconTextVisible={false}
          iconTextVisible1={false}
          iconTextVisible2={false}
          cardPosition="unset"
          minAgoFontFamily="Poppins"
          developerExpertFontFamily="Poppins"
          armstrongOHaraAndFontFamily="Poppins"
          iconsTextWidth="593px"
          iconsTextHeight="24px"
          iconTextWidth="unset"
          iconTextHeight="unset"
          developerFontFamily="Poppins"
          developerWidth="unset"
          registerFontFamily="Poppins"
        />
        <Card
          minAgo="updated"
          icon="/icon1@2x.png"
          logo="/logo2.svg"
          developerExpertInJavaPhyt="Crime Reports Of 2021"
          armstrongOHaraAndHilll="Karachi East, West, South, North"
          developer="Construction"
          fullTime="Full time"
          g135="/g1351@2x.png"
          prop="$48000-$50000"
          newYorkUSA="Texas, USA"
          register="See More"
          showIconText={false}
          showBriefcase22Icon
          showDeveloper
          iconTextVisible={false}
          iconTextVisible1={false}
          iconTextVisible2={false}
          cardPosition="unset"
          minAgoFontFamily="Poppins"
          developerExpertFontFamily="Poppins"
          armstrongOHaraAndFontFamily="Poppins"
          iconsTextWidth="593px"
          iconsTextHeight="24px"
          iconTextWidth="unset"
          iconTextHeight="unset"
          developerFontFamily="Poppins"
          developerWidth="unset"
          registerFontFamily="Poppins"
        />
        <Card
          minAgo="24 min ago"
          icon="/icon1@2x.png"
          logo="/logo3.svg"
          developerExpertInJavaPhyt="Crime Reports Of 2020"
          armstrongOHaraAndHilll="Karachi East, West, South, North"
          developer="Commerce"
          fullTime="Full time"
          g135="/g1351@2x.png"
          prop="$42000-$48000"
          newYorkUSA="Florida, USA"
          register="See More"
          showIconText={false}
          showBriefcase22Icon
          showDeveloper
          iconTextVisible={false}
          iconTextVisible1={false}
          iconTextVisible2={false}
          cardPosition="unset"
          minAgoFontFamily="Poppins"
          developerExpertFontFamily="Poppins"
          armstrongOHaraAndFontFamily="Poppins"
          iconsTextWidth="593px"
          iconsTextHeight="24px"
          iconTextWidth="unset"
          iconTextHeight="unset"
          developerFontFamily="Poppins"
          developerWidth="unset"
          registerFontFamily="Poppins"
        />
        <Card
          minAgo="updated"
          icon="/icon1@2x.png"
          logo="/logo4.svg"
          developerExpertInJavaPhyt="Crime Reports Of 2019"
          armstrongOHaraAndHilll="Karachi East, West, South, North"
          developer="Commerce"
          fullTime="Full time"
          g135="/g1351@2x.png"
          prop="$38000-$40000"
          newYorkUSA="Boston, USA"
          register="See More"
          showIconText
          showBriefcase22Icon={false}
          showDeveloper={false}
          iconTextVisible={false}
          iconTextVisible1={false}
          iconTextVisible2={false}
          cardPosition="unset"
          minAgoFontFamily="Poppins"
          developerExpertFontFamily="Poppins"
          armstrongOHaraAndFontFamily="Poppins"
          iconsTextWidth="unset"
          iconsTextHeight="unset"
          iconTextWidth="111px"
          iconTextHeight="24px"
          developerFontFamily="Poppins"
          developerWidth="92px"
          registerFontFamily="Poppins"
        />
      </div>
    </div>
  );
};

Jobs.propTypes = {
  className: PropTypes.string,
};

export default Jobs;
