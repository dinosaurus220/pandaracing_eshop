import { useState } from "react";
import { Navbar, Hero, Footer, Engine, Chassis, Brakes, Spacers, Interior, Transmission, Exterior, Electronics, Exhaust, Cosmetics } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div
          className={`flex flex-col items-center justify-center ${styles.container}`}
        >
          <div className={`h-screen ${styles.boxWidth} mt-8`}>
            <Routes>
              <Route exact path="/" element={<Hero />} />
              <Route exact path="/engine-system" element={<Engine />} />
              <Route exact path="/chassis" element={<Chassis />} />
              <Route exact path="/brakes" element={<Brakes />} />
              <Route exact path="/wheels-and-spacers" element={<Spacers />} />
              <Route exact path="/interior-and-safety" element={<Interior />} />
              <Route exact path="/transmission" element={<Transmission />} />
              <Route exact path="/exterior" element={<Exterior />} />
              <Route exact path="/electronics" element={<Electronics />} />
              <Route exact path="/exhaust-systems" element={<Exhaust />} />
              <Route exact path="/car-cosmetics" element={<Cosmetics />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
