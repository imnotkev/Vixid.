import React from "react";
import { Check, Close } from "@mui/icons-material";

const PricingCard = ({ price, title, perks, style, icon, delivery }) => {
  return (
    <div className={style}>
      <div className="pricing-card__top">
        <h3 className="pricing-card__title gradient-title">{title}</h3>
        <h4 className="pricing-card__price">${price}</h4>
      </div>
      <div className="pricing-card__divider"></div>
      <ul className="pricing-card__perks">
        {perks.map((perk) => [
          <li className="perk" key={0}>
            <Check className="perk__icon" />
            {perk}
          </li>,
        ])}
        {title === "basic" && (
          <>
            <li className="perk perk--not">
              <Close className="perk__icon" />
              Design customization
            </li>
            <li className="perk perk--not">
              <Close className="perk__icon" />
              Content upload
            </li>
          </>
        )}
      </ul>
      <div className="pricing-card__divider"></div>
      <span className="pricing-card__delivery">
        Delivery time: {delivery} days
      </span>
      {/* <button className="btn pricing-card__btn">Get Started</button> */}
      {icon}
    </div>
  );
};

export default PricingCard;
