import React, { useState } from "react";

export default function SignIn() {
  const [form, setForm] = useState({ email: "", pass: "" });

  const error = false;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

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
