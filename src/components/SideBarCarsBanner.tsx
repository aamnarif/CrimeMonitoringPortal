import Card from "./Card";
import PropTypes from "prop-types";
import styles from "./SideBarCarsBanner.module.css";

const SideBarCarsBanner = ({ className = "" }) => {
  return (
    <div className={[styles.sideBarCarsBanner, className].join(" ")}>
      <div className={styles.cards}>
        <div className={styles.cards1}>
          <Card
            minAgo="updated"
            icon="/icon@2x.png"
            logo="/logo.svg"
            developerExpertInJavaPhyt="Crime Reports Of 2023"
            armstrongOHaraAndHilll="Karachi East, West, South, North"
            developer={`Hotels & Tourism`}
            fullTime="Full time"
            g135="/g135@2x.png"
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
            icon="/icon@2x.png"
            logo="/logo1.svg"
            developerExpertInJavaPhyt="Crime Reports Of 2022"
            armstrongOHaraAndHilll="Karachi East, West, South, North"
            developer="Media"
            fullTime="Part time"
            g135="/g135@2x.png"
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
            icon="/icon@2x.png"
            logo="/logo2.svg"
            developerExpertInJavaPhyt="Crime Reports Of 2021"
            armstrongOHaraAndHilll="Karachi East, West, South, North"
            developer="Construction"
            fullTime="Full time"
            g135="/g135@2x.png"
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
            icon="/icon@2x.png"
            logo="/logo3.svg"
            developerExpertInJavaPhyt="Crime Reports Of 2020"
            armstrongOHaraAndHilll="Karachi East, West, South, North"
            developer="Commerce"
            fullTime="Full time"
            g135="/g135@2x.png"
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
            icon="/icon@2x.png"
            logo="/logo4.svg"
            developerExpertInJavaPhyt="Crime Reports Of 2019"
            armstrongOHaraAndHilll="Karachi East, West, South, North"
            developer="Commerce"
            fullTime="Full time"
            g135="/g135@2x.png"
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
    </div>
  );
};

SideBarCarsBanner.propTypes = {
  className: PropTypes.string,
};

export default SideBarCarsBanner;
