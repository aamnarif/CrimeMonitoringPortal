import IconText from "./IconText";
import Input from "./Input";
import Button from "./Button";
import PropTypes from "prop-types";
import styles from "./TextIconsForm.module.css";

const TextIconsForm = ({ className = "" }) => {
  return (
    <div className={[styles.textIconsForm, className].join(" ")}>
      <div className={styles.textIcons}>
        <div className={styles.text}>
          <div className={styles.text1}>
            <b className={styles.connectWithUsContainer}>
              <p className={styles.connectWithUs}>{`Connect with Us `}</p>
              <p className={styles.stayInformedStay}>
                Stay Informed, Stay Safe
              </p>
            </b>
          </div>
          <div className={styles.forImmediateAssistance}>
            For immediate assistance or to report a crime, please use our online
            portal.
          </div>
        </div>
        <div className={styles.iconsText}>
          <IconText
            phone="/phone.svg"
            callForInquiry="Call for inquiry"
            prop="+92 ----------"
          />
          <IconText
            phone="/mail.svg"
            callForInquiry="Send us email"
            prop="crimeportal.com"
            propWidth="unset"
          />
          <IconText
            phone="/clock.svg"
            callForInquiry="Service"
            prop="24/7"
            propWidth="212px"
          />
          <IconText
            phone="/mappin.svg"
            callForInquiry="Location"
            prop="Karachi"
            propWidth="unset"
          />
        </div>
      </div>
      <div className={styles.form}>
        <div className={styles.text2}>
          <b className={styles.contactInfo}>Contact Info</b>
        </div>
        <div className={styles.inputsButton}>
          <div className={styles.inputs}>
            <Input
              labelText="First Name"
              startAdornment1="/startadornment.svg"
              placeholderText="Your name"
              endAdornment1="/startadornment.svg"
              selectarrow="/selectarrow.svg"
              endAdornment={false}
              hasValue
              selectArrow={false}
              helpText={false}
              startAdornment={false}
              label
              inputPosition="unset"
              inputWidth="240px"
              inputHeight="unset"
              labelWidth="unset"
              labelFontFamily="Poppins"
              labelFontWeight="600"
              contentBorder="unset"
              contentFlex="unset"
              placeholderFontFamily="Poppins"
              placeholderColor="#6c757d"
            />
            <Input
              labelText="Last Name"
              startAdornment1="/startadornment.svg"
              placeholderText="Your last name"
              endAdornment1="/startadornment.svg"
              selectarrow="/selectarrow.svg"
              endAdornment={false}
              hasValue
              selectArrow={false}
              helpText={false}
              startAdornment={false}
              label
              inputPosition="unset"
              inputWidth="240px"
              inputHeight="unset"
              labelWidth="unset"
              labelFontFamily="Poppins"
              labelFontWeight="600"
              contentBorder="unset"
              contentFlex="unset"
              placeholderFontFamily="Poppins"
              placeholderColor="#6c757d"
            />
          </div>
          <Input
            labelText="Email Address"
            startAdornment1="/startadornment.svg"
            placeholderText="Your E-mail address"
            endAdornment1="/startadornment.svg"
            selectarrow="/selectarrow.svg"
            endAdornment={false}
            hasValue
            selectArrow={false}
            helpText={false}
            startAdornment={false}
            label
            inputPosition="unset"
            inputWidth="504px"
            inputHeight="unset"
            labelWidth="unset"
            labelFontFamily="Poppins"
            labelFontWeight="600"
            contentBorder="unset"
            contentFlex="unset"
            placeholderFontFamily="Poppins"
            placeholderColor="#6c757d"
          />
          <div className={styles.inputButton}>
            <Input
              labelText="Message"
              startAdornment1="/startadornment.svg"
              placeholderText="Your message..."
              endAdornment1="/startadornment.svg"
              selectarrow="/selectarrow.svg"
              endAdornment={false}
              hasValue
              selectArrow={false}
              helpText={false}
              startAdornment={false}
              label
              inputPosition="unset"
              inputWidth="504px"
              inputHeight="178px"
              labelWidth="unset"
              labelFontFamily="Poppins"
              labelFontWeight="500"
              contentBorder="unset"
              contentFlex="1"
              placeholderFontFamily="Poppins"
              placeholderColor="#6c757d"
            />
            <Button
              register="Send Message"
              buttonPosition="unset"
              buttonWidth="248px"
              buttonTop="unset"
              buttonLeft="unset"
              registerFontFamily="Poppins"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TextIconsForm.propTypes = {
  className: PropTypes.string,
};

export default TextIconsForm;
