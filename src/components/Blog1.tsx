import Card2 from "./Card2";
import PropTypes from "prop-types";
import styles from "./Blog1.module.css";

const Blog1 = ({ className = "" }) => {
  return (
    <div className={[styles.blog, className].join(" ")}>
      <div className={styles.text}>
        <div className={styles.newsAndBlog}>News and Blog</div>
        <div className={styles.textChild} />
        <div className={styles.crimeInKarachi}>
          Crime in Karachi: What’s Happening Now?
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.cards}>
            <Card2
              news="News"
              feb="17 Feb"
              cCTVFootageThiefUsesChild="CCTV footage: Thief uses child as a cover while lifting bike in Karachi"
              propBackgroundImage="url('/img-badge2@3x.png')"
            />
            <Card2
              news="Blog"
              feb="24 Jan"
              cCTVFootageThiefUsesChild="Lyari gang war criminals among 25 arrested in Karachi"
              propBackgroundImage="url('/img-badge3@3x.png')"
            />
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cards}>
            <Card2
              news="News"
              feb="17 Feb"
              cCTVFootageThiefUsesChild="CCTV footage: Thief uses child as a cover while lifting bike in Karachi"
              propBackgroundImage="url('/img-badge2@3x.png')"
            />
            <Card2
              news="Blog"
              feb="24 Jan"
              cCTVFootageThiefUsesChild="Lyari gang war criminals among 25 arrested in Karachi"
              propBackgroundImage="url('/img-badge3@3x.png')"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Blog1.propTypes = {
  className: PropTypes.string,
};

export default Blog1;
