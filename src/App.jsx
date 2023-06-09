import {
  Navbar,
  Hero,
  Footer,
  Engine,
  Chassis,
  Brakes,
  Spacers,
  Interior,
  Transmission,
  Exterior,
  Electronics,
  Exhaust,
  Cosmetics,
  ErrorPage
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";

function App() {
  return (
    <Router>
      <div>
        <div
          className={`w-full overflow-hidden align-center scroll-mt-[60px] `}
        >
          <Navbar />
        </div>
        <div
          className={`pt-10 w-full overflow-y-auto align-center ${styles.flexStart}`}
        >
          <div className={` h-screen ${styles.boxWidth} mt-8`}>
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route  path="/engine-system" element={<Engine />} />
              <Route  path="/chassis" element={<Chassis />} />
              <Route  path="/brakes" element={<Brakes />} />
              <Route  path="/wheels-and-spacers" element={<Spacers />} />
              <Route  path="/interior-and-safety" element={<Interior />} />
              <Route  path="/transmission" element={<Transmission />} />
              <Route  path="/exterior" element={<Exterior />} />
              <Route  path="/electronics" element={<Electronics />} />
              <Route  path="/exhaust-systems" element={<Exhaust />} />
              <Route  path="/car-cosmetics" element={<Cosmetics />} />
              <Route path="" element={ErrorPage} />
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
