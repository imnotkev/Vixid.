import React from "react";
import ServicesCard from "./ui/ServicesCard";
import { Architecture, LaptopMac, Diversity3 } from "@mui/icons-material";

const Services = () => {
  return (
    <section id="services" className="mb64">
      <div className="services__container">
        <ServicesCard
          style="service-card"
          icon={<Architecture />}
          title="Design"
          para="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolor fuga explicabo nesciunt iure sunt cum ex natus deleniti mollitia?"
        />
        <ServicesCard
          style="service-card service-card--primary"
          icon={<LaptopMac />}
          title="Development"
          para="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit porro quos, soluta natus adipisci repellat animi molestias fugit veniam dolorem?"
        />
        <ServicesCard
          style="service-card"
          icon={<Diversity3 />}
          title="Social Media"
          para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum sapiente hic, voluptates eveniet dolorem exercitationem vero autem? Saepe, alias nihil.
              "
        />
      </div>
    </section>
  );
};

export default Services;
