import React from "react";

const ServicesCard = ({ icon, title, para, style }) => {
  return (
    <div className={style}>
      <div className="service-card__icon">{icon}</div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__para">{para}</p>
    </div>
  );
};

export default ServicesCard;
