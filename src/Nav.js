import React from "react";
import { Link } from "react-router-dom";

const navList = [
  {
    name: "Home",
    link: "/home"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Contacts",
    link: "/contacts"
  }
];

const Nav = ({ style }) => (
  <div className="nav-wrapper" style={style}>
    <nav>
      <ul>
        {navList.map(({ name, link }, index) => (
          <li key={index}>
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);

export default Nav;
