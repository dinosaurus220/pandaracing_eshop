import React from "react";
import { curLinks } from "../constants";

function Footer() {
  return (
    <div className="border-t-[3px] h-[80px] ">
      <div className="px-5 py-5">
        <select className="">
          {curLinks.map((cur, index) => (
            <option href={`${cur.id}`}> {cur.title} </option>
          ))}
        </select>
      </div>

      <h1 className={`flex justify-center text-[#52D6F4]`}>
        © Copyright by kokotracing.eu
      </h1>
    </div>
  );
}

export default Footer;
