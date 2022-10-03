import React from "react";
import { Link } from "react-scroll";
import { Facebook, LinkedIn, Twitter, Login } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="footer mt64">
      <section>
        <div className="footer__container">
          <div className="footer__top">
            <div className="footer__socials">
              <a href="#" className="social__link social__link--footer">
                <Twitter />
              </a>
              <a href="#" className="social__link social__link--footer">
                <LinkedIn />
              </a>
              <a href="#" className="social__link social__link--footer">
                <Facebook />
              </a>
            </div>
            <div
              className="footer__logo"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <h2 className="footer__logo--text">Vixid.</h2>
            </div>
            <button
              className="btn footer__login"
              onClick={() => navigate("/login")}
            >
              <Login />
            </button>
          </div>
          <div className="footer__divider"></div>
          <div className="footer__links">
            <a
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="footer__link"
            >
              HOME
            </a>
            <Link
              to="services"
              smooth={true}
              offset={-140}
              duration={100}
              className="footer__link"
            >
              SERVICES
            </Link>
            <Link
              to="about"
              smooth={true}
              offset={-140}
              duration={100}
              className="footer__link"
            >
              ABOUT
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              offset={-140}
              duration={100}
              className="footer__link"
            >
              PORTFOLIO
            </Link>
            <Link
              to="pricing"
              smooth={true}
              offset={-140}
              duration={100}
              className="footer__link"
            >
              PRICING
            </Link>
          </div>
          <span className="footer__copyright">
            Vixid 2022. All rights reserved.
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
