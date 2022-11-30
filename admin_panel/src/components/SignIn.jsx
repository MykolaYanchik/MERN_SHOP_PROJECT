import React, { useState } from "react";
import { useForm } from "../utils/hooks/useForm";

export default function SignIn() {
  const error = false;

  const form = useForm({
    initialValue: {
      email: "",
      pass: "",
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { values, handleChange } = form;

  return (
    <div className="signIn-wrapper">
      <div className="signIn-page">
        <h1 className="signIn-page__title">MERN-SHOP</h1>
        <h3 className="signIn-page__subtitle">Administrator panel</h3>
        <form className="signIn-form">
          <div className={error ? "input-wrapper error" : "input-wrapper"}>
            <label>Email</label>
            <div className="input-container">
              <input
                type="text"
                placeholder="Enter your email..."
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <span className="input-error"></span>
            </div>
          </div>
          <div className={error ? "input-wrapper error" : "input-wrapper"}>
            <label>Password</label>
            <div className="input-container">
              <input
                type="password"
                placeholder="Enter your password..."
                name="pass"
                onChange={(e) => handleChange(e)}
              />
              <span className="input-error"></span>
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
