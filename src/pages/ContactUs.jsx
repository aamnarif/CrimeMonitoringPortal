import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import IconText from "../components/IconText";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  const navigate = useNavigate();

  const onTextContainerClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);

  const onTextContainerClick1 = useCallback(() => {
    navigate("/crime-reports");
  }, [navigate]);

  const onTextContainerClick2 = useCallback(() => {
    navigate("/crime-responses");
  }, [navigate]);

  return (
    <div className="contact-us">
      <Hero
        onTextContainerClick1={onTextContainerClick}
        onTextContainerClick2={onTextContainerClick1}
        onTextContainerClick3={onTextContainerClick2}
        contactUs="Contact Us"
      />
      <div className="text-icons-form">
        <div className="text-icons">
          <div className="text">
            <div className="text1">
              <b className="connect-with-us-container">
                <p className="connect-with-us">{`Connect with Us `}</p>
                <p className="stay-informed-stay">Stay Informed, Stay Safe</p>
              </b>
            </div>
            <div className="for-immediate-assistance">
              For immediate assistance or to report a crime, please use our
              online portal.
            </div>
          </div>
          <div className="icons-text">
            <IconText
              phone="/phone.svg"
              callForInquiry="Call for inquiry"
              prop="+92 ----------"
            />
            <IconText
              propWidth="unset"
              phone="/mail.svg"
              callForInquiry="Send us email"
              prop="crimeportal.com"
            />
            <IconText
              propWidth="212px"
              phone="/clock.svg"
              callForInquiry="Service"
              prop="24/7"
            />
            <IconText
              propWidth="unset"
              phone="/mappin.svg"
              callForInquiry="Location"
              prop="Karachi"
            />
          </div>
        </div>
        <div className="form">
          <div className="text2">
            <b className="contact-info">Contact Info</b>
          </div>
          <div className="inputs-button">
            <div className="inputs">
              <Input
                labelText="First Name"
                endAdornment={false}
                hasValue
                selectArrow={false}
                helpText={false}
                startAdornment={false}
                placeholderText="Your name"
                label
                inputPosition="unset"
                inputWidth="240px"
                inputHeight="unset"
                labelWidth="unset"
                labelFontFamily="Poppins"
                labelFontWeight="600"
                contentBorder="unset"
                contentFlex="unset"
                startAdornment1="/startadornment.svg"
                placeholderFontFamily="Poppins"
                placeholderColor="#6c757d"
                endAdornment1="/startadornment.svg"
                selectarrow="/selectarrow.svg"
              />
              <Input
                labelText="Last Name"
                endAdornment={false}
                hasValue
                selectArrow={false}
                helpText={false}
                startAdornment={false}
                placeholderText="Your last name"
                label
                inputPosition="unset"
                inputWidth="240px"
                inputHeight="unset"
                labelWidth="unset"
                labelFontFamily="Poppins"
                labelFontWeight="600"
                contentBorder="unset"
                contentFlex="unset"
                startAdornment1="/startadornment.svg"
                placeholderFontFamily="Poppins"
                placeholderColor="#6c757d"
                endAdornment1="/startadornment.svg"
                selectarrow="/selectarrow.svg"
              />
            </div>
            <Input
              labelText="Email Address"
              endAdornment={false}
              hasValue
              selectArrow={false}
              helpText={false}
              startAdornment={false}
              placeholderText="Your E-mail address"
              label
              inputPosition="unset"
              inputWidth="504px"
              inputHeight="unset"
              labelWidth="unset"
              labelFontFamily="Poppins"
              labelFontWeight="600"
              contentBorder="unset"
              contentFlex="unset"
              startAdornment1="/startadornment.svg"
              placeholderFontFamily="Poppins"
              placeholderColor="#6c757d"
              endAdornment1="/startadornment.svg"
              selectarrow="/selectarrow.svg"
            />
            <div className="input-button">
              <Input
                labelText="Message"
                endAdornment={false}
                hasValue
                selectArrow={false}
                helpText={false}
                startAdornment={false}
                placeholderText="Your message..."
                label
                inputPosition="unset"
                inputWidth="504px"
                inputHeight="178px"
                labelWidth="unset"
                labelFontFamily="Poppins"
                labelFontWeight="500"
                contentBorder="unset"
                contentFlex="1"
                startAdornment1="/startadornment.svg"
                placeholderFontFamily="Poppins"
                placeholderColor="#6c757d"
                endAdornment1="/startadornment.svg"
                selectarrow="/selectarrow.svg"
              />
              <Button
                buttonPosition="unset"
                buttonWidth="248px"
                buttonTop="unset"
                buttonLeft="unset"
                register="Send Message"
                registerFontFamily="Poppins"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="map-icon">
        <div className="map">
          <img className="map-pin-icon" alt="" src="/mappin1.svg" />
        </div>
      </div>
      <Footer group33="/group-33@2x.png" />
    </div>
  );
};

export default ContactUs;
