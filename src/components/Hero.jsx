import { useState } from "react";
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from "@heroicons/react/solid";
import { slideLinks } from "../constants";
import styles from "../style";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const clonedLinks = [...slideLinks, ...slideLinks.slice(0, 2)]; // Clone first 2 links and add to end of array

  const slideLeft = () => {
    setActiveIndex(
      activeIndex === 0 ? clonedLinks.length - 4 : activeIndex - 1 // Adjust to always move to next item
    );
  };

  const slideRight = () => {
    setActiveIndex(
      activeIndex === clonedLinks.length - 4 ? 0 : activeIndex + 1 // Adjust to always move to next item
    );
  };

  return (
<div className={`h-screen`}>
  <div className={`${styles.flexCenter} flex  w-full`}>
    <div className="flex overflow-x-hidden">
      {clonedLinks.slice(activeIndex, activeIndex + 4).map((slideLink) => (
        <div key={slideLink.id} className="w-full h-screen md:w-1/4 p-0">
          <div className="relative aspect-w-3 aspect-h-4">
            <img
              src={slideLink.img}
              alt={slideLink.title}
              className="w-[500px] h-[100vh] object-cover filter blur-[8px]"
              
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <a href={slideLink.id} className="text-[25px] text-white font-semibold mb-1">
                  <img src={slideLink.header}></img>
                </a>
               {/*  <p className="text-gray-600">{slideLink.description}</p> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

    <button
      onClick={slideLeft}
      className="absolute top-1/2 left-10 transform -translate-y-1/2 -translate-x-4 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
    >
      <ArrowNarrowLeftIcon className="-z-50 h-6 w-6" />
    </button>
    <button
      onClick={slideRight}
      className="transition ease-in 3s absolute top-1/2 right-10 transform -translate-y-1/2 translate-x-4 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
    >
      <ArrowNarrowRightIcon className="-z-50 h-6 w-6" />
    </button>
  </div>
</div>


  );
};

export default Hero;
