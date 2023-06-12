import React, { useState, useEffect } from "react";
import classNames from "classnames";

const brands = [
  { id: 1, name: "Brembo", icon: "" },
  { id: 2, name: "Sparco", icon: "" },
  { id: 3, name: "KW Suspensions", icon: "" },
  { id: 4, name: "HKS", icon: "" },
  { id: 5, name: "AP Racing", icon: "" },
  { id: 6, name: "Mishimoto", icon: "" },
  { id: 7, name: "Akrapovič", icon: "" },
  { id: 8, name: "Bilstein", icon: "" },
  { id: 9, name: "Recaro", icon: "" },
  { id: 10, name: "Eibach", icon: "" },
];

const BrandCarousel = () => {
  const [activeBrandId, setActiveBrandId] = useState(1);

  useEffect(() => {
    // Automatically switch to the next brand every 3 seconds
    const interval = setInterval(() => {
      setActiveBrandId((prevId) => (prevId === brands.length ? 1 : prevId + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center">
      {brands.map((brand) => (
        <div
          key={brand.id}
          className={classNames("mr-4", {
            "w-12 h-12 transition-all duration-300": brand.id === activeBrandId,
            "w-8 h-8 transition-all duration-300 opacity-50":
              brand.id !== activeBrandId,
          })}
          onMouseEnter={() => setActiveBrandId(brand.id)}
        >
          <img
            src={brand.icon}
            alt={brand.name}
            className="object-contain h-full w-full"
          />
        </div>
      ))}
    </div>
  );
};

export default BrandCarousel;
