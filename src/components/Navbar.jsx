import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../style";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={` ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className=" w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className=" flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <h1 className=" text-white text-[18px] font-bold curser-pointer flex">
            {" "}
            Jirapat Teja <span className=" ml-5 sm:block hidden">|</span>{" "}
            <span className=" ml-5 sm:block hidden">Portfolio</span>
          </h1>
        </Link>
        <ul className=" list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } text-[18px] font-medium hover:text-white cursor-pointer`}
                onClick={() => {
                  setActive(link.id);
                }}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className=" sm:hidden flex flex-1 justify-end items-center select-none">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-6 h-6 cursor-pointer object-contain"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className=" list-none flex sm:hidden justify-end items-start flex-col gap-10">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px] hover:text-white`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.id);
                    }}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
