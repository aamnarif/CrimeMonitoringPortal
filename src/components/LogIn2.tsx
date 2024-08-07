import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Input05TextField01OneLine from "./Input05TextField01OneLine";
import Input01BasicButton01Regular01Basic01Primary from "./Input01BasicButton01Regular01Basic01Primary";
import PropTypes from "prop-types";
import styles from "./LogIn2.module.css";

const LogIn2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onInput05TextField01OneLine01ContainerClick = useCallback(() => {
    navigate("/log-in1");
  }, [navigate]);

  return (
    <div className={[styles.logIn, className].join(" ")}>
      <div className={styles.logInWrapper}>
        <div className={styles.group}>
          <div className={styles.group}>
            <Input05TextField01OneLine
              usernamebankname="username@bankname"
              iD="ID"
              showUsernamebankname
              onInput05TextField01OneLine01ContainerClick={
                onInput05TextField01OneLine01ContainerClick
              }
            />
            <b className={styles.logInYour}>Log In Your Account</b>
          </div>
        </div>
      </div>
      <Input01BasicButton01Regular01Basic01Primary
        button="Log in"
        input01BasicButton01RegulWidth="300px"
        input01BasicButton01RegulPosition="absolute"
        input01BasicButton01RegulTop="calc(50% + 69px)"
        input01BasicButton01RegulLeft="calc(50% - 150px)"
        rectangleBackgroundColor="#309689"
        buttonLeft="131px"
        buttonTextAlign="center"
      />
      <Input05TextField01OneLine
        usernamebankname="Password"
        iD="Password"
        showUsernamebankname={false}
        propTop="calc(50% - 24px)"
        propRight="unset"
        propLeft="calc(50% - 150px)"
        propColor="#747474"
      />
    </div>
  );
};

LogIn2.propTypes = {
  className: PropTypes.string,
};

export default LogIn2;
