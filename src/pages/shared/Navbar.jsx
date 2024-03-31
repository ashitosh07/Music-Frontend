import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  RiMenu3Fill,
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome, FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import { ImBlog } from "react-icons/im";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./Shared.css";
import { SearchIcon } from "@heroicons/react/outline";
import zoho from "../../assets/zoho.png";

import PrimaryBtn from "../../components/PrimaryBtn";
import img from "../../assets/img/notAvailable.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About", link: "/about", icon: <RiFolderInfoFill /> },
    {
      title: "Contact",
      link: "/contact",
      icon: <RiContactsBook2Fill />,
    },
    { title: "Music", link: "/music", icon: <ImBlog /> },
  ];
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#8dce19",
    };
  };

  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div className="bg-black">
        <div
          className={`visible ${show && "nav-hidden"} shadow-lg bg-[#000000] 
     z-50`}
        >
          <div className="w-full flex items-center justify-between px-3 md:px-24 py-3">
            <div>
              <Link to="/">
                <img src={img} alt="AS CA" className="w-24 m-4 mt-8" />
              </Link>
            </div>
            <div>
              <ul className="lg:flex items-center hidden">
                {navLinks.map((navItem) => (
                  <li className="mx-4" key={navItem.title}>
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className="text-white hover:text-#8dce19 duration-300"
                    >
                      {navItem.title}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <div className="block lg:hidden">
                <button
                  onClick={toggleDrawer}
                  className="btn btn-ghost text-white"
                  style={{ color: "#8dce19", margin: "6px" }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="0"
                    viewBox="0 0 15 15"
                    height="3em" // Set the desired height
                    width="2em" // Set the desired width
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
                <Drawer
                  open={isOpen}
                  onClose={toggleDrawer}
                  direction="right"
                  style={{ backgroundColor: "#000000" }}
                  className="bla bla bla flex flex-col justify-between pb-4"
                >
                  <ul className="">
                    <li className="mt-6 mb-10 ml-4">
                      <button
                        className="cursor-pointer hover:text-#8dce19 duration-300"
                        onClick={() => setIsOpen(!isOpen)}
                        style={{ color: "#8dce19", margin: "6px" }}
                      >
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="0"
                          viewBox="0 0 15 15"
                          height="3em" // Set the desired height
                          width="2em" // Set the desired width
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </li>
                    {navLinks.map((navItem) => (
                      <li
                        className="m-4"
                        key={navItem.title}
                        onClick={() => setIsOpen(!isOpen)}
                      >
                        <NavLink
                          to={navItem.link}
                          style={activeLink}
                          className="flex items-center text-white hover:text-#8dce19 duration-300"
                        >
                          <span className="mr-3">{navItem.icon}</span>
                          <span>{navItem.title}</span>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
