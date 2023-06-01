import React from "react";
import { engineLinks } from "../../constants";

function engineSys() {
  return (
    <div className="flex justify-center mt-[70px]">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {engineLinks.map((product) => (
          <div
            key={product.id}
            className="max-w-xs rounded overflow-hidden shadow-lg bg-white"
          >
            <img
              className="w-full h-40 object-cover"
              src={product.img}
              alt="Engine Part"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{product.nazev}</div>
              <p className="text-gray-700 text-base">{product.popis}</p>
            </div>
            <div className=" px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {product.kategorie}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                {product.znacka}
              </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                {product.cena} 
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default engineSys;
