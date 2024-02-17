import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import PropTypes from "prop-types";
import * as yup from "yup";
import "./Form.scss";
import inputs from "../../data/data";
import { useNavigate } from "react-router-dom";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Correo electrónico no válido")
    .test(
      "is-lowercase",
      "Por favor, asegúrese de que el correo esté en minúsculas",
      (value) => {
        return value === value.toLowerCase();
      }
    )
    .required("Campo requerido"),
});

const Form = ({ setInfoHTML }) => {
  const [data, setData] = useState([]);
  const [searchError, setSearchError] = useState(false); // Estado para controlar el mensaje de error de búsqueda
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const result = data.find((row) => row.EMAIL === values.email);
      if (result) {
        const info = {
          name: result.NOMBRE,
          job: result.CARGO,
          address: result.DIRECCION,
          phone: result.TELEFONO,
        };
        setInfoHTML({ ...info });
        navigate("/template");
      } else {
        setSearchError(true);
      }
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.csv"); // Ruta del archivo CSV, debe ir en la carpeta public.
        const csvText = await response.text();

        Papa.parse(csvText, {
          delimiter: ";",
          header: true,
          dynamicTyping: true,
          complete: function (results) {
            setData(results.data);
          },
        });
      } catch (error) {
        console.error("Error al cargar el archivo CSV:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="form">
        <form onSubmit={formik.handleSubmit} className="form__container">
          {inputs.map((item) => (
            <TextField
              key={item.id}
              id={item.id}
              name={item.id}
              label={item.label}
              value={formik.values[item.id]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[item.id] && Boolean(formik.errors[item.id])}
              helperText={formik.touched[item.id] && formik.errors[item.id]}
              className="form__input"
            />
          ))}
          <Button variant="contained" type="submit" className="form__button">
            Obtener firma HTML
          </Button>
          {searchError && (
            <p className="error-message">
              No se encontró ningún resultado para el correo electrónico
              ingresado. Por favor, revise el correo electrónico y vuelva a
              intentarlo.
            </p>
          )}
        </form>
        <div className="logo">
          <figure>
            <img
              src="https://res.cloudinary.com/dlkvt6uph/image/upload/v1708033658/Proyectos/android-chrome-512x512_ki56dw.png"
              alt="logo"
            />
          </figure>
        </div>
      </div>
    </>
  );
};

Form.propTypes = {
  setInfoHTML: PropTypes.func,
};

export default Form;
