// React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Styles
import "./Register.style.css";
// Enumerables
import { Icons } from "../../../enumerables/icons/icons";
// Components
import TextInput from "../../../components/inputs/TextInput/TextInput";
import IconTextButton from "../../../components/buttons/IconTextButton/IconTextButton";

const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userName: "",
    isOrganization: false,
  });

  const navigate = useNavigate();
  const handleLoginButton = () => {
    navigate("/");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(formData), // Serialize the form data to JSON
      });
      console.log(formData);
      console.log(response);
      if (response.ok) {
        navigate("/menu/profile"); // If change absolute path
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      // Handle the error here
      console.log(error);
    }
  };

  return (
    <div className="register-screen">
      <div className="register-container">
        <div className="title-container">
          <h2 className="title semibold">Registrarse</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="inputs-container">
            <TextInput
              icon={Icons.user}
              type="text"
              id="userName"
              name="userName"
              onChange={handleChange}
              value={formData.userName}
              placeholder="pepito03"
              required={true}
            />
            <TextInput
              icon={Icons.email}
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
          </div>
          <div className="buttons-container">
            <IconTextButton type="submit" buttonText="Registrarse" />
            <IconTextButton
              type="button"
              buttonText="Iniciar Sesión"
              handleOnClick={handleLoginButton}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
export default Register;
