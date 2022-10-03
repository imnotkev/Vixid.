import { Facebook, LinkedIn, Twitter } from "@mui/icons-material";
import React from "react";

const About = () => {
  return (
    <section id="about" className="about mb64">
      <div className="about__content">
        <div className="about__desc">
          <h2 className="section__title about__title gradient-title">
            We bring your ideas to reality!
          </h2>
          <p className="section__para about__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            veritatis minus voluptas nostrum aperiam cum incidunt earum laborum
            doloremque culpa, ea accusantium consectetur fuga. Aspernatur
            facilis pariatur soluta ut sit.
          </p>
          <p className="section__para about__para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            dicta sed aliquam, unde consequatur eligendi quo laboriosam? Magni
            nam quia, mollitia quam pariatur blanditiis eos temporibus qui
            incidunt velit nulla!
          </p>
          <div className="about__socials">
            <a href="#" className="social__link">
              <LinkedIn />
            </a>
            <a href="#" className="social__link">
              <Facebook />
            </a>
            <a href="#" className="social__link">
              <Twitter />
            </a>
          </div>
        </div>
        <figure className="about__img--wrapper">
          <img
            src="https://images.unsplash.com/photo-1508385082359-f38ae991e8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="about__img"
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
