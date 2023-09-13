// React
import { useState } from "react";
// Styles
import "./Login.style.css";
// Enumerables
import { Icons } from "../../enumerables/icons/icons";
// Components
import TextInput from "../../components/inputs/TextInput/TextInput";
import IconTextButton from "../../components/buttons/IconTextButton";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your login logic here using formData.email and formData.password
    console.log("Login form submitted:", formData);
    // You can send a request to your backend for authentication
  };

  return (
    <div className="screen">
      <div className="login-container">
        <div className="title-container">
          <h1 className="title semibold-title">Login</h1>
        </div>
        <form className="inputs-container" onSubmit={handleSubmit}>
          <TextInput
            icon={Icons.phone}
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="ejemplo@estudiantec.cr"
            required={true}
          />
          <TextInput
            type="password"
            id="password"
            name="password"
            placeholder="contraseña"
            onChange={handleChange}
            value={formData.password}
            required={true}
          />
        </form>
        <div className="buttons-container">
          <IconTextButton
            type="submit"
            buttonText="Registrarse"
          ></IconTextButton>
          <IconTextButton
            type="submit"
            buttonText="Iniciar Sesión"
          ></IconTextButton>
        </div>
      </div>
    </div>
  );
}

export default Login;
