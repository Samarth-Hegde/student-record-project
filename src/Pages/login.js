import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { fireBaseAuth } from "../firebase/fireBaseHandler";
import { useNavigate } from "react-router-dom";
import "./CSS/form.css";

function Login() {
  const [user, setUser] = useState({ email: "", password: "" });
  const nav = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await createUserWithEmailAndPassword(
        fireBaseAuth,
        user.email,
        user.password
      );
      nav("/students");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="form__container">
      <form action="" className="login-form" onSubmit={handleSubmit}>
        <input
          className="form__control"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          name="email"
        />
        <input
          className="form__control"
          placeholder="Password"
          type="password"
          onChange={handleChange}
          name="password"
        />
        <input className="form__btn" type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default Login;
