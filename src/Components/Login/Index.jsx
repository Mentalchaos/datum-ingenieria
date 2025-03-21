import "./login.css";
import LogoDatum from "../../assets/images/datum-logo.png";
import background4 from "../../assets/images/lines4.svg";
import background3 from "../../assets/images/lines3.svg";
import background2 from "../../assets/images/lines2.svg";
import background1 from "../../assets/images/lines1.svg";
import construction from "../../assets/images/construction.png";
import { useState, useEffect } from "react";

const backgrounds = [background4, background3, background2, background1];

const Login = () => {
  const [isUnderConstruction, setIsUnderConstruction] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentBackground((prev) => (prev + 1) % backgrounds.length);
        setFade(false);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsUnderConstruction(true);
  };

  return (
    <div className="login">
      {!isUnderConstruction ? (
        <>
          <div className="login-left-section">
            <div className="login-left-section-content">
              <div className="login-left-section-header">
                <div className="login-logo-datum-container">
                  <img className="login-logo-datum" src={LogoDatum} alt="logo-datum" />
                </div>
                <div className="login-header-title">¡Bienvenido!</div>
                <div className="login-header-subtitle">Ingresa tus credenciales</div>
              </div>
              <div className="login-form-container">
                <form className="login-form" onSubmit={handleLogin}>
                  <input type="text" placeholder="Correo electrónico" className="login-input" spellCheck="false" />
                  <input type="password" placeholder="Contraseña" className="login-input" spellCheck="false" />
                  <button type="submit" className="login-button">Iniciar sesión</button>
                  <a href="#" className="recover-link">¿Has olvidado tu contraseña?</a>
                </form>
              </div>
            </div>
          </div>
          <div className={`login-right-section ${fade ? "fade" : ""}`}>
            <img className="topo-background" src={backgrounds[currentBackground]} alt="background" />
          </div>
        </>
      ) : (
        <div className="construction-container">
          <img className="construction-image" src={construction} alt="Under Construction" />
          ¡Bajo construcción!
        </div>
      )}
    </div>
  );
};

Login.displayName = "Login";

export default Login;
