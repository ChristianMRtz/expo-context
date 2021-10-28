import { useContext } from "react";
import LanguageContext from "../context/LanguageContext";
import ThemeContext from "../context/ThemeContext";

const MainContext = () => {
  const { theme } = useContext(ThemeContext);
  const { texts } = useContext(LanguageContext);

  return (
    <main className={theme}>
            <h2>{texts.topTitle}</h2>
      <h3>{texts.topSubtitle}</h3>
      <h4>{texts.mainContent}</h4>
    </main>
  );
};

export default MainContext;
