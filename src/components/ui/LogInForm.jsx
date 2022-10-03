import React from "react";

const LogInForm = () => {
  return (
    <form className="login__form">
      <div className="form__input--wrapper form__input--wrapper--login">
        <label htmlFor="email" className="form__label">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          className="form__input"
          placeholder="example@domain.com"
        />
      </div>
      <div className="form__input--wrapper form__input--wrapper--login">
        <label htmlFor="password" className="form__label">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          className="form__input"
          placeholder="********"
        />
      </div>
      <button className="btn form__btn form__btn--login">Log In</button>
    </form>
  );
};

export default LogInForm;
