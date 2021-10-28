import { AuthProvider } from "../context/AuthContext";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import Content from "./Content";
import Buttons from "./Buttons";
import Title from "./Title";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="my-page">
      <AuthProvider>
        <ThemeProvider>
          <LanguageProvider>
            <h1>React Context</h1>
            <Buttons />
            <Title />
            <Content />
          </LanguageProvider>
        </ThemeProvider>
      </AuthProvider>
      <Link to="/bonus">
        <button style={{marginLeft: "40%"}}>Bonus</button>
      </Link>
    </div>
  );
};

export default Home;
