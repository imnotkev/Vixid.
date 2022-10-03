import React from "react";
import { Link } from "react-scroll";
import headerPng from "../assets/images/header.png";

const Header = () => {
  return (
    <header className="header section mb64">
      <div className="header__content">
        <div className="header__desc">
          <h1 className="header__title gradient-title">
            We create the perfect web colleague!
          </h1>
          <p className="header__para">
            Let us handle the web, while you deliver the best product possible!
          </p>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-180}
            duration={100}
          >
            <button className="btn header__btn header__btn--second">
              Let's work!
            </button>
          </Link>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-160}
            duration={100}
          >
            <button className="btn header__btn">portfolio</button>
          </Link>
        </div>
        <figure className="header__img--wrapper">
          <img src={headerPng} alt="" className="header__img" />
        </figure>
      </div>
    </header>
  );
};

export default Header;
