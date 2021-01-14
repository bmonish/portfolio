// import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Specific from "./components/Specific";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <About />
      <Specific />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
