import { House, Business, Factory } from "@mui/icons-material";
import React from "react";
import PricingCard from "./ui/PricingCard";

const Pricing = () => {
  /* Plan-perks! */
  const basicPerks = ["Functional website", "1 page", "Responsive design"];
  const proPerks = [
    "Functional website",
    "3 pages",
    "Responsive design",
    "Design customization",
    "Content upload",
  ];
  const enterprisePerks = [
    "Functional website",
    "6 pages",
    "Responsive design",
    "Design customization",
    "Content upload",
  ];

  return (
    <section id="pricing" className="pricing mb64">
      <h2 className="section__title pricing__title">Find your plan</h2>
      <h3 className="section__sub-title pricing__sub-title">
        Start-Up, Personal project or business - we have the plan for you!
      </h3>
      <div className="pricing__container">
        <PricingCard
          style="pricing-card"
          price={"55"}
          title="basic"
          perks={basicPerks}
          icon={<House className="pricing-card__icon" />}
          delivery={"1-3"}
        />
        <PricingCard
          style="pricing-card pricing-card--primary"
          price={"200"}
          title="pro"
          perks={proPerks}
          icon={<Business className="pricing-card__icon" />}
          delivery={"3-5"}
        />
        <PricingCard
          style="pricing-card"
          price={"450"}
          title="enterprise"
          perks={enterprisePerks}
          icon={<Factory className="pricing-card__icon" />}
          delivery={"3-8"}
        />
      </div>
      <h3 className="section__sub-title pricing__sub-title pricing__sub-title--bottom">
        <span className="form__label--star">*</span> All our plans are flexible!
        - get in touch and we'll customize it so that it suits your needs!
      </h3>
    </section>
  );
};

export default Pricing;
