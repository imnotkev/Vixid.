import React from "react";
import { Link } from "react-scroll";
import { Details } from "@mui/icons-material";

const Nav = () => {
  const [navBg, setNavBg] = React.useState(false);

  const changeNavBg = () => {
    if (window.scrollY !== 0) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  window.addEventListener("scroll", changeNavBg);

  return (
    <nav className={navBg ? "nav nav--scrolling" : "nav"}>
      <div className="nav__container">
        <div
          className="nav__logo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Details />
          <div className="nav__logo--text">
            <h2>Vixid.</h2>
          </div>
        </div>
        <ul className="nav__lists">
          <li className="nav__list">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-140}
              duration={100}
              className="nav__list--link"
            >
              SERVICES
            </Link>
          </li>
          <li className="nav__list">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-140}
              duration={100}
              className="nav__list--link"
            >
              ABOUT
            </Link>
          </li>
          <li className="nav__list">
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-140}
              duration={100}
              className="nav__list--link"
            >
              PORTFOLIO
            </Link>
          </li>
          <li className="nav__list">
            <Link
              to="pricing"
              spy={true}
              smooth={true}
              offset={-140}
              duration={100}
              className="nav__list--link"
            >
              PRICING
            </Link>
          </li>
          <li className="nav__list">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-150}
              duration={100}
              className="nav__list--link nav__list--link--primary"
            >
              GET A QUOTE
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
