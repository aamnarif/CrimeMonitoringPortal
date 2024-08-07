import Card2 from "./Card2";
import PropTypes from "prop-types";
import styles from "./Blog.module.css";

const Blog = ({ className = "" }) => {
  return (
    <div className={[styles.blog, className].join(" ")}>
      <div className={styles.text}>
        <div className={styles.newsAndBlog}>News and Blog Of Recent Crimes</div>
        <div className={styles.crimeInKarachi}>
          Crime in Karachi: What’s Happening Now?
        </div>
      </div>
      <div className={styles.cards}>
        <Card2
          news="News"
          feb="17 Feb"
          cCTVFootageThiefUsesChild="CCTV footage: Thief uses child as a cover while lifting bike in Karachi"
        />
        <Card2
          news="Blog"
          feb="24 Jan"
          cCTVFootageThiefUsesChild="Lyari gang war criminals among 25 arrested in Karachi"
          propBackgroundImage="url('/img-badge1@3x.png')"
        />
      </div>
    </div>
  );
};

Blog.propTypes = {
  className: PropTypes.string,
};

export default Blog;
