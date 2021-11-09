import {
  BrowserRouter as Router,
  Routes,
  Route,
  useHistory,
} from "react-router-dom";
import { Switch } from "react-router";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/privacy_policy/" component={Policy} />
        <Route exact path="/terms_of_use/" component={Terms} />
        <Route exact path="/about-us/" component={About} /> */}
      </Routes>
    </Router>
  );
}

export default App;
