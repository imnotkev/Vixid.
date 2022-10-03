import React from "react";
import LogInForm from "../components/ui/LogInForm";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <section id="login" className="login section--full-width">
      <div className="login__container">
        <h2 className="section__title login__title gradient-title">Vixid.</h2>
        <LogInForm />
        <span
          className="login__back gradient-title"
          onClick={() => navigate("/")}
        >
          Back to home
        </span>
      </div>
    </section>
  );
};

export default Login;
