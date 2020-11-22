import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { SignInApi } from "../../api/auth";
import "./SingInForm.scss";

export default function SingInForm() {
  const [formData, setFormData] = useState(initialFormValue());
  const [singInLoading, setSingInLoading] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    let validCount = 0;
    values(formData).some((value) => {
      value && validCount++;
      return null;
    });

    if (validCount !== size(formData)) {
      toast.warn("Completa todos los campos del formulario");
    } else {
      if (!isEmailValid(formData.email)) {
        toast.warn("El email es inválido");
      } else {
        if (!isEmailValid(formData.email)) {
          toast.warn("El email es inválido");
        } else {
          setSingInLoading(true);

          SignInApi(formData)
            .then((resp) => {
              if (resp.message) {
                toast.warn(resp.message);
              } else {
                console.log(resp.token);
              }
            })
            .catch((err) => {
              toast.warn("Error del servidor, intentelo mas tarde");
            })
            .finally(() => {
              setSingInLoading(false);
            });
        }
      }
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-in-form">
      <h1>Iniciar sesión</h1>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <Form.Group>
          <Form.Control
            type="email"
            placeholder="Correo electrónico"
            defaultValue={formData.email}
            name="email"
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            defaultValue={formData.password}
            name="password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {!singInLoading ? "Iniciar sesión" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}
function initialFormValue() {
  return {
    email: "",
    password: "",
  };
}
