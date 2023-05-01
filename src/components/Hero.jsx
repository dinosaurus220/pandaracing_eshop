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
          {clonedLinks.slice(activeIndex, activeIndex + 4).map((slideLink) => ( // Update to use clonedLinks
            <div key={slideLink.id} className="w-full h-screen md:w-1/4 p-2">
              <div className="bg-white rounded-md shadow-md overflow-hidden">
                <img
                  src={slideLink.img}
                  alt={slideLink.title}
                  className="w-[500px] h-[600px] object-cover"
                />
                <div className="px-4 py-2">
                  <h3 className="text-lg font-semibold mb-1">
                    {slideLink.title}
                  </h3>
                  <p className="text-gray-600">{slideLink.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={slideLeft}
          className="absolute top-1/2 left-10 transform -translate-y-1/2 -translate-x-4 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
        >
          <ArrowNarrowLeftIcon className="h-6 w-6" />
        </button>
        <button
          onClick={slideRight}
          className="transition ease-in 3s absolute top-1/2 right-10 transform -translate-y-1/2 translate-x-4 bg-gray-800 text-white p-2 rounded-full focus:outline-none hover:bg-gray-700"
        >
          <ArrowNarrowRightIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
