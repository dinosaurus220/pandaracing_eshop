import { useState } from "react";
import { Navbar, Hero, Footer, Engine, Chassis, Brakes, Spacers } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";

function App() {
  return (
    <Router>
      <div>
        <div className={`w-full overflow-hidden align-center scroll-mt-[60px] `}>
          <Navbar />
        </div>
        <div className={`pt-10 w-full overflow-y-auto align-center ${styles.flexStart} ${styles.contentContainer}`}>
          <div className={`h-screen ${styles.boxWidth} mt-8`}>
            <Routes>
              <Route exact path="/" Component={Hero} />
              <Route exact path="/engine-system" Component={Engine} />
              <Route exact path="/chassis" Component={Chassis} />
              <Route exact path="/brakes" Component={Brakes} />
              <Route exact path="/wheels-and-spacers" Component={Spacers} />


            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
