import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginForm from "../components/LoginForm/LoginForm";
import Form from "../components/Form/Form";
import TemplateHTML from "../components/TemplateHTML/TemplateHTML";
import PropTypes from "prop-types";

const Authentication = ({ isAuthenticated, setIsAuthenticated }) => {
  const handleSubmit = (code) => {
    // Verificar el código (puedes cambiar el código a tu preferencia)
    if (code === "prueba") {
      setIsAuthenticated(true);
      localStorage.setItem("isAuthenticated", "true");
    } else {
      alert("Código incorrecto. Intenta de nuevo.");
    }
  };

  return isAuthenticated ? (
    <Navigate to="/generador" />
  ) : (
    <LoginForm onSubmit={handleSubmit} />
  );
};

const AppRouter = () => {
  const [infoHTML, setInfoHTML] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Authentication
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        {isAuthenticated && (
          <Route
            path="/template"
            element={<TemplateHTML infoHTML={infoHTML} />}
          />
        )}
        {isAuthenticated && (
          <Route
            path="/generador"
            element={<Form setInfoHTML={setInfoHTML} />}
          />
        )}
      </Routes>
    </BrowserRouter>
  );
};

Authentication.propTypes = {
  infoHTML: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  setIsAuthenticated: PropTypes.func,
};

export default AppRouter;
