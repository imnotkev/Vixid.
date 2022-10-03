import { Details, Email, Phone, Place } from "@mui/icons-material";
import React from "react";
import ContactForm from "./ui/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="contact mb64">
      <div className="contact__container">
        <div className="contact__container--left">
          <div className="contact--left__logo">
            <Details />
          </div>
          <h2 className="section__title contact--left__title">
            Can't wait for you to describe your dream!
          </h2>
          <ul className="contact--left__list">
            <li className="contact--left__contact">
              <a className="contact__anchor" href="/">
                <Email className="contact__icon" />
                info@vixid.com
              </a>
            </li>
            <li className="contact--left__contact">
              <a className="contact__anchor" href="/">
                <Phone className="contact__icon" />
                +46701233223
              </a>
            </li>
            <li className="contact--left__contact">
              <a className="contact__anchor" href="/">
                <Place className="contact__icon" />
                Riksgatan 1 <br /> 100 12 Stockholm
              </a>
            </li>
          </ul>
        </div>
        <div className="contact__container--right">
          <h2 className="section__title contact--right__title gradient-title">
            Connect with us!
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
