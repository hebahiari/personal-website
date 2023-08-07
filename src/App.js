import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <div className="container">
        <Home className="about" />
        <Projects className="projects" />
      </div>

      {/* <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/experience'>
          <Experience/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/projects'>
          <Projects/>
        </Route>
      </Switch> */}
    </div>
  );
}

export default App;
