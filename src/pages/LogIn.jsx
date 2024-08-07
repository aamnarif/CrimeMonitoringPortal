import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Input01BasicButton01Regular01Basic01Primary from "../components/Input01BasicButton01Regular01Basic01Primary";
import "./LogIn.css";

const LogIn = () => {
  const navigate = useNavigate();

  const onInput05TextField01OneLine01ContainerClick = useCallback(() => {
    navigate("/log-in1");
  }, [navigate]);

  return (
    <div className="log-in">
      <div className="terms-and-conditions-container">
        <b className="terms-and-conditions">Terms and Conditions</b>
        <span className="span">{` | `}</span>
        <b className="terms-and-conditions">Privacy Policy</b>
        <span className="span">{` | `}</span>
        <b className="terms-and-conditions">Security Policy</b>
      </div>
      <div className="log-in1">
        <div className="log-in-wrapper">
          <div className="group">
            <div className="group">
              <div className="input05textfield01oneline02">
                <div
                  className="input05textfield01oneline01"
                  onClick={onInput05TextField01OneLine01ContainerClick}
                >
                  <div className="rectangle" />
                  <div className="usernamebankname">username@bankname</div>
                  <div className="right-icon">times</div>
                  <div className="left-icon">search</div>
                </div>
                <b className="id">ID</b>
              </div>
              <b className="log-in-your">Log In Your Account</b>
            </div>
          </div>
        </div>
        <Input01BasicButton01Regular01Basic01Primary
          input01BasicButton01RegulWidth="300px"
          input01BasicButton01RegulPosition="absolute"
          input01BasicButton01RegulTop="calc(50% + 69px)"
          input01BasicButton01RegulLeft="calc(50% - 150px)"
          rectangleBackgroundColor="#309689"
          button="Log in"
          buttonLeft="131px"
          buttonTextAlign="center"
        />
        <div className="input05textfield01oneline021">
          <div className="input05textfield01oneline011">
            <div className="rectangle" />
            <div className="password">Password</div>
            <div className="right-icon">times</div>
            <div className="left-icon">search</div>
          </div>
          <b className="id">Password</b>
        </div>
      </div>
      <div className="sign-in-image">
        <img className="sign-in-image-child" alt="" src="/vector-1.svg" />
        <img className="sign-in-image-item" alt="" src="/rectangle-7@2x.png" />
      </div>
      <div className="group-container">
        <img className="group-child4" alt="" src="/group-29@2x.png" />
        <div className="group-group">
          <img className="group-icon1" alt="" src="/group.svg" />
          <img className="group-icon2" alt="" src="/group1.svg" />
          <img className="group-icon3" alt="" src="/group2.svg" />
          <img className="group-icon4" alt="" src="/group3.svg" />
          <img className="group-icon5" alt="" src="/group4.svg" />
        </div>
        <img className="group-child5" alt="" src="/group-28.svg" />
      </div>
    </div>
  );
};

export default LogIn;
