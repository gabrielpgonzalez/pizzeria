import React, { useState } from "react";
import Form from "../components/Form";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({});
  const { email, password } = loginData;

  const inputs = [
    {
      id: "email",
      label: "Email",
      type: "email",
      prop: "email",
      required: true,
      invalid: () =>
        email?.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)
          ? null
          : "Por favor, ingresa un email válido",
    },
    {
      id: "password",
      label: "Contraseña",
      type: "password",
      prop: "password",
      required: true,
      invalid: () =>
        password?.length >= 6
          ? null
          : "La contraseña debe tener al menos 6 caracteres",
    },
  ];

  const onSubmit = () => {
    if (email === "usuario@ejemplo.com" && password === "Password123!") {
      alert("¡Acceso exitoso!");
    } else {
      alert("Usuario y/o contraseña incorrectos");
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center vh-100">
      <Form
        inputs={inputs}
        onSubmit={onSubmit}
        setValue={setLoginData}
        submitButton="Iniciar Sesión"
        title="Inicia sesión"
        alertMessage="¡Bienvenido de nuevo!"
      />
    </main>
  );
};

export default LoginPage;
