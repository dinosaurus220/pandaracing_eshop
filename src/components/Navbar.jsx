import { useState } from "react";
import { Logo, Menu } from "../assets";
import { navLinks } from "../constants";
import styles from "../style";

const Navbar = () => {
  const [height, setHeight] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  const changeHeight = () => {
    if (window.scrollY >= 90) {
      setHeight(true);
    } else {
      setHeight(false);
    }
  };

  window.addEventListener("scroll", changeHeight);

  return (
    <nav
      className={`fixed w-full flex justify-between py-3 ${styles.navBg} ${
        height ? "transition ease-in delay-200 h-[70px]" : "h-[120px]"
      }`}
    >
      <div className={`flex flex-wrap flex-row place-items-center pl-5`}>
        <svg className="flex place-content-center h-[25px] w-[25px]" viewBox="0 0 22 16">
          <path
            d="M0 2.4V.6h22v1.8H0zm0 6.584v-1.8h22v1.8H0zm0 6.584v-1.8h22v1.8H0z"
            fill="white"
            fill-rule="nonzero"
          />
        </svg>
</div>

      <div className={`flex justify-center items-center py-5`}>
        <img
          src={Logo}
          alt="Logo"
          className={` ${height ? "h-[60px]" : "h-[100px]"}`}
        />
      </div>
      <div className={`${styles.flexCenter}`}>
        <div className={``}>
          <ul className="flex list-none gap gap-4 pr-5  items-center text-white">
            
            {navLinks.map((nav, index) => (
              <li key={nav.id} className="">
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
