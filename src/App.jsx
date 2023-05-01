import { useState } from "react";
import { Navbar, Hero, Footer } from "./components";
import styles from './style'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="w-full overflow-hidden align-center scroll-mt-[60px]">
        <Navbar />
      </div>
      <div className={`pt-10 w-full overflow-hidden align-center ${styles.flexStart}`}>
        <div className={`h-screen ${styles.boxWidth} `}>
          
        <Hero />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
