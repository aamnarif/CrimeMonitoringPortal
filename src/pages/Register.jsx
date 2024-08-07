import "./Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="terms-and-conditions-container2">
        <b className="terms-and-conditions2">Terms and Conditions</b>
        <span className="span4">{` | `}</span>
        <b className="terms-and-conditions2">Privacy Policy</b>
        <span className="span4">{` | `}</span>
        <b className="terms-and-conditions2">Security Policy</b>
      </div>
      <div className="log-in6">
        <div className="group2">
          <div className="input01basicbutton01regular-wrapper">
            <div className="input01basicbutton01regular1">
              <div className="rectangle5" />
              <b className="register1">Register</b>
            </div>
          </div>
          <b className="register-your-account">Register Your Account</b>
        </div>
      </div>
      <div className="sign-in-image2">
        <img className="vector-icon" alt="" src="/vector-1.svg" />
        <img
          className="sign-in-image-child1"
          alt=""
          src="/rectangle-7@2x.png"
        />
      </div>
      <div className="group-parent2">
        <img className="group-child8" alt="" src="/group-29@2x.png" />
        <div className="group-parent3">
          <img className="group-icon11" alt="" src="/group.svg" />
          <img className="group-icon12" alt="" src="/group1.svg" />
          <img className="group-icon13" alt="" src="/group2.svg" />
          <img className="group-icon14" alt="" src="/group3.svg" />
          <img className="group-icon15" alt="" src="/group4.svg" />
        </div>
        <img className="group-child9" alt="" src="/group-28.svg" />
      </div>
      <div className="plese-use-format-usernamebank-parent">
        <div className="plese-use-format-usernamebank">
          <div className="rectangle6" />
          <div className="adkfj">adkfj</div>
          <b className="please-use-format">
            Please use format username@bankname
          </b>
          <div className="exclamation-circle">exclamation-circle</div>
          <div className="right-icon4">times</div>
          <div className="left-icon4">search</div>
        </div>
        <div className="required-field">
          <div className="rectangle6" />
          <b className="please-use-format">Required field</b>
          <div className="exclamation-circle">exclamation-circle</div>
          <div className="right-icon4">times</div>
          <div className="left-icon4">search</div>
        </div>
        <div className="passwords-do-not-match">
          <div className="rectangle6" />
          <b className="please-use-format">Passwords do not match</b>
          <div className="exclamation-circle">exclamation-circle</div>
          <div className="right-icon4">times</div>
          <div className="left-icon4">search</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
