import React from "react";
import { useForm } from "../utils/hooks/useForm";

export default function SignIn() {
  const error = false;

  const validationSchema = {
    email: {
      email: "email valid",
    },
    pass: {
      min: "too short",
      max: "too long",
    },
  };

  const form = useForm({
    initialValue: {
      email: "",
      pass: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => console.log(values),
  });

  const { handleChange, handleSubmit, errors } = form;

  return (
    <div className="signIn-wrapper">
      <div className="signIn-page">
        <h1 className="signIn-page__title">MERN-SHOP</h1>
        <h3 className="signIn-page__subtitle">Administrator panel</h3>
        <form className="signIn-form">
          <div
            className={errors.email ? "input-wrapper error" : "input-wrapper"}
          >
            <label>Email</label>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter your email..."
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <span className="input-error">
                {errors.email ? errors.email : ""}
              </span>
            </div>
          </div>
          <div
            className={errors.pass ? "input-wrapper error" : "input-wrapper"}
          >
            <label>Password</label>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter your password..."
                name="pass"
                onChange={(e) => handleChange(e)}
              />
              <span className="input-error">
                {errors.pass ? errors.pass : ""}
              </span>
            </div>
          </div>
          <button className="form-button" onClick={(e) => handleSubmit(e)}>
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
