import React, { useState } from "react";
import "./LoginForm.scss"; // Importamos el archivo Sass para aplicar estilos

const LoginForm = ({ onSubmit }) => {
  const [code, setCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(code);
  };

  return (
    <>
      <div className="login__container__logo">
        <figure className="container__figure">
          <img
            src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1708033658/Proyectos/android-chrome-512x512_ki56dw.png"
            alt="alarmar"
          />
        </figure>
      </div>

      <form className="login-form" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="password"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Ingrese el código"
        />
        <button className="login-button" type="submit">
          Ingresar
        </button>
      </form>
    </>
  );
};

export default LoginForm;
