import { BrowserRouter } from "react-router-dom";
import {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas,
  BallCanvas,
  ComputersCanvas,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className=" relative z-0  bg-primary">
        <div className=" relative z-0 ">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />

        <div className=" relative z-0">
          {/* <Contact /> */}
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
