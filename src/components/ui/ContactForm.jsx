import React from "react";

const ContactForm = () => {
  return (
    <form action="" className="contact__form">
      <div className="form__input--wrapper">
        <label htmlFor="name" className="form__label">
          Your name <span className="form__label--star">*</span>
        </label>
        <input
          id="name"
          type="text"
          required
          className="form__input"
          placeholder="Name"
        />
      </div>
      <div className="form__input--wrapper">
        <label htmlFor="email" className="form__label">
          Your email <span className="form__label--star">*</span>
        </label>
        <input
          id="email"
          type="email"
          required
          className="form__input"
          placeholder="example@domain.com"
        />
      </div>
      <div className="form__input--wrapper">
        <label htmlFor="company" className="form__label">
          Company
        </label>
        <input
          id="company"
          type="text"
          className="form__input"
          placeholder="optional"
        />
      </div>
      <div className="form__input--wrapper">
        <label htmlFor="plan" className="form__label">
          Pick a plan <span className="form__label--star">*</span>
        </label>
        <select
          id="plan"
          defaultValue="default"
          required
          className="form__input form__select"
        >
          <option
            value="default"
            disabled
            className="form__select--start-option"
          >
            Select your option
          </option>
          <option value="basic">Basic</option>
          <option value="pro">Pro</option>
          <option value="enterprise">Enterprise</option>
        </select>
      </div>
      <div className="form__input--wrapper form__input--wrapper--contact form__input--wrapper--msg">
        <label htmlFor="message" className="form__label">
          Your message <span className="form__label--star">*</span>
        </label>
        <textarea
          name="message"
          id=""
          rows="5"
          className="form__input form__textarea"
          required
          placeholder="Your message goes here"
        ></textarea>
      </div>
      <button className="btn form__btn">Submit</button>
    </form>
  );
};

export default ContactForm;
