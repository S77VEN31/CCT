// React
import React, { useState } from "react";
// Styles
import "./Login.style.css";
// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
// Components
import TextInput from "../components/Inputs/TextInput/TextInput";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using formData.email and formData.password
    console.log("Login form submitted:", formData);
    // You can send a request to your backend for authentication
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          placeholder="example@estudiantec.cr"
          required={true}
        />
        <TextInput
          type="password"
          id="password"
          name="password"
          placeholder="your password"
          onChange={handleChange}
          value={formData.password}
          required={true}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
