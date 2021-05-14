import React, { FC } from "react";
import { Link } from "react-router-dom";

import { NavbarProps } from "./type";

const Navbar: FC<NavbarProps> = ({
  icon = "fab fa-github",
  title = "Github Finder"
}) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/test-context">Test Context</Link>
        </li>
        <li>
          <Link to="/test-reducer">Test Reducer</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
