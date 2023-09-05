import React from "react";
import { BiCubeAlt } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { BiChevronDown } from "react-icons/bi";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import "../sass/navbar.scss";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <Link to="">
              <BiCubeAlt /> TechWind
            </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/landings">
                Landings <BiChevronDown />
              </Link>
            </li>
            <li>
              <Link to="/pages">
                Pages <BiChevronDown />
              </Link>
            </li>
            <li>
              <Link to="/portfolio">
                Portfolio <BiChevronDown />
              </Link>
            </li>
            <li>
              <Link to="/docs">
                Docs <BiChevronDown />
              </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="setting-cart">
            <Link>
              <FiSettings />
            </Link>
            <Link>
              <CiShoppingCart />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
