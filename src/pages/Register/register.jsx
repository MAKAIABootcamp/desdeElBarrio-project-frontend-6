import { useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createAnAccountAsync } from "../../store/users/userThunks";
import uploadFile from "../../services/uploadFile";
import "./register.scss";
import Swal from "sweetalert2";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [image, setImage] = useState("");

  const schema = yup.object().shape({
    displayName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required(),
  });

  const handleRegister = async (values) => {
    const userData = {
      name: values.displayName,
      email: values.email,
      password: values.password,
      photoURL: image,
      rol: "usuario",
    };
    console.log(userData);
    dispatch(createAnAccountAsync(userData));
    Swal.fire({
      title: "",
      text: "La cuenta ha sido creada exitosamente",
      icon: "",
    }).then(() => {
      navigate("/Login");
    });
  };

  const uploadImage = async ({ target }) => {
    const file = target.files;
    const urlImage = await uploadFile(file[0]);
    setImage(urlImage);
  };

  return (
    <main className="registerform">
      <section className="container-forms">
        <h1 className="">Registrate</h1>
        <div className="container-avatar">
          <img
            src={
              image
                ? image
                : "https://www.shutterstock.com/image-vector/blank-avatar-photo-place-holder-600nw-1095249842.jpg"
            }
            alt="Imagen usuario"
          />
          <input className="upload-button"  onChange={uploadImage} type="file" />
          {/* <button type="button">Cargar imagen de perfil</button> */}
        </div>
        <Formik
          validationSchema={schema}
          onSubmit={handleRegister}
          initialValues={{
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form className="form-register" onSubmit={handleSubmit}>
              <Form.Group className="mb-3">
                <Form.Control
                  className="input-container"
                  type="text"
                  placeholder="Ingrese su nombre completo"
                  name="displayName"
                  value={values.displayName}
                  onChange={handleChange}
                  isInvalid={touched.displayName && !!errors.displayName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.displayName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Ingrese su contraseña"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={touched.password && !!errors.password}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Confirme su contraseña"
                  name="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  isInvalid={
                    touched.confirmPassword && !!errors.confirmPassword
                  }
                />
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="" type="submit">
                Crear cuenta
              </Button>
            </Form>
          )}
        </Formik>
        <p>
          Si ya tiene una cuenta registrada
          <br />
          <Link className="" to="/Login">
            inicie sesión aquí
          </Link>
        </p>
      </section>
    </main>
  );
};

export default Register;
