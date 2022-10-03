import { Preview, Close, Circle } from "@mui/icons-material";
import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const PortfolioCase = ({ img, title, featurePara, para, category }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="case" onClick={handleOpen}>
        <div className="case__desc">
          <Preview className="case__icon" />
          <h3 className="case__title">{title}</h3>
          <p className="case__para">{featurePara}</p>
        </div>
        <figure className="case__img--wrapper">
          <img src={img} className="case__img" />
        </figure>
      </div>

      {/* 
      ON-CLICK MODAL 
      */}
      <Modal open={open} onClose={handleClose}>
        <Box className="modal">
          {/* MODAL CONTENT BELOW */}
          <img src={img} alt="" className="modal__img" />
          <div className="modal__desc">
            <h3 className="modal__title gradient-title">{title}</h3>
            <ul className="modal__category">
              {category.map((category) => [
                <li className="category__list" key={0}>
                  {category}
                </li>,
              ])}
            </ul>
            <p className="modal__para">{para}</p>
            <button className="btn modal__btn">View</button>
            <button
              className="btn modal__btn modal__btn--close"
              onClick={handleClose}
            >
              Back
            </button>
          </div>
          <button className="btn modal__close" onClick={handleClose}>
            <Close />
          </button>
        </Box>
      </Modal>
    </>
  );
};

export default PortfolioCase;
