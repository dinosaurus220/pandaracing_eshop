import { useState } from "react";
import { Navbar, Hero, Footer, Engine } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from "./style";

function App() {
  return (
    <Router>
      <div>
        <div className="w-full overflow-hidden align-center scroll-mt-[60px]">
          <Navbar />
        </div>
        <div
          className={`pt-10 w-full overflow-hidden align-center ${styles.flexStart}`}
        >
          <div className={`h-screen ${styles.boxWidth} `}>
            <Routes>
              <Route exact path="/" Component={ Hero } />
              <Route exact path="/engine-system" Component={ Engine } />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
