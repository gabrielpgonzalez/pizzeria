import React, { useState } from "react";
import Form from "../components/Form";

const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({});
  const { email, password, confirmPassword } = registerData;

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
        password?.match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/g
        )
          ? null
          : "La contraseña debe tener al menos 6 caracteres, incluir mayúsculas, minúsculas, números y símbolos",
    },
    {
      id: "confirm-password",
      label: "Confirmar contraseña",
      type: "password",
      prop: "confirmPassword",
      required: true,
      invalid: () =>
        confirmPassword === password ? null : "Las contraseñas no coinciden",
    },
  ];

  const onSubmit = () => {
    alert("¡Registro exitoso!");
  };

  return (
    <main className="d-flex justify-content-center align-items-center vh-100">
      <Form
        inputs={inputs}
        onSubmit={onSubmit}
        setValue={setRegisterData}
        submitButton="Registrarse"
        title="Crea una cuenta"
        alertMessage="¡Registro exitoso!"
      />
    </main>
  );
};

export default RegisterPage;
