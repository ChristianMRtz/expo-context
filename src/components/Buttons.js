import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const Buttons = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const { texts, handleLanguage } = useContext(LanguageContext);
  const { auth, handleAuth } = useContext(AuthContext);

  return (
    <div className="buttonspos">
      <div className={theme}>
        {auth ? (
          <select
            name="language"
            onChange={handleLanguage}
            style={{ marginRight: "1rem" }}
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        ) : (
          ""
        )}
        {auth ? (
          <input
            type="radio"
            name="theme"
            id="light-context"
            onClick={handleTheme}
            value="light"
          />
        ) : (
          <div></div>
        )}
        {auth ? (
          <label htmlFor="light-context">{texts.buttonLight}</label>
        ) : (
          ""
        )}
        {auth ? (
          <input
            type="radio"
            name="theme"
            id="dark-context"
            onClick={handleTheme}
            value="dark"
          />
        ) : (
          ""
        )}
        {auth ? (
          <label htmlFor="dark-context" style={{ marginRight: "1rem" }}>
            {texts.buttonDark}
          </label>
        ) : (
          ""
        )}
        <button onClick={handleAuth}>
          {auth ? texts.buttonLogout : texts.buttonLogin}
        </button>
        {auth ? (
          <p className="textUser">{texts.mainHello}</p>
        ) : (
          <p className="textUser">{texts.mainWelcome}</p>
        )}
      </div>
    </div>
  );
};

export default Buttons;
