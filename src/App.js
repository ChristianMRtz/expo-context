import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Bonus from "./components/Bonus";
import { BonusProvider } from "./context/BonusContext";

function App() {
  return (
    <>
      <BonusProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/bonus" component={Bonus}></Route>
          </Switch>
        </Router>
      </BonusProvider>
    </>
  );
}

export default App;
