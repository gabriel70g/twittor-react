import React, { useState } from "react";
import { FormGroup } from "@material-ui/core";
import { Row, Col, Form, Button, Spinner, FormControl } from "react-bootstrap";
import { values, size } from "lodash";
import { toast } from "react-toastify";
import { isEmailValid } from "../../utils/validations";
import { SignUpApi } from "../../api/auth";

import "./SingUpForm.scss";

export default function SingUpForm(props) {
  const { setShowModal } = props;
  const [formData, setFromData] = useState(initialFormValues());
  const [SingUpLoading, setSingUpLoading] = useState(false);

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
      } else if (formData.password !== formData.repeatpassword) {
        toast.warn("Las contraseñas no coinciden");
      } else if (size(formData.password) < 6) {
        toast.warn("La contraseña tiene que tener al menos 6 caracteres");
      } else {
        setSingUpLoading(true);
        SignUpApi(formData)
          .then((resp) => {
            if (resp.code) {
              toast.warn(resp.message);
            } else {
              toast.success("El registro ha sido correcto");
              setShowModal(false);
              setFromData(initialFormValues);
            }
          })
          .catch(() => {
            toast.error(
              "Error al intentar registrar el usuario, intentelo mas tarde"
            );
          })
          .finally(() => {
            setSingUpLoading(false);
          });
      }
    }
  };

  const onChange = (e) => {
    setFromData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="sign-up-form">
      <h2>Crea tu cuenta</h2>
      <Form onSubmit={onSubmit} onChange={onChange}>
        <FormGroup>
          <Row>
            <Col>
              <FormControl
                type="text"
                placeholder="Nombre"
                name="nombre"
                defaultValue={formData.nombre}
              />
            </Col>
            <Col>
              <FormControl
                type="text"
                placeholder="Apellidos"
                defaultValue={formData.apellidos}
                name="apellidos"
              />
            </Col>
          </Row>
        </FormGroup>
        <FormGroup>
          <FormControl
            type="email"
            placeholder="Correo electronico"
            defaultValue={formData.email}
            name="email"
          />
        </FormGroup>
        <FormGroup>
          <Row>
            <Col>
              <FormControl
                type="password"
                placeholder="Contraseña"
                name="password"
                defaultValue={formData.password}
              />
            </Col>
            <Col>
              <FormControl
                type="password"
                placeholder="Repetir contraseña"
                name="repeatpassword"
                defaultValue={formData.repeatpassword}
              />
            </Col>
          </Row>
        </FormGroup>

        <Button variant="primary" type="submit">
          {!SingUpLoading ? "Registrase" : <Spinner animation="border" />}
        </Button>
      </Form>
    </div>
  );
}

function initialFormValues() {
  return {
    nombre: "",
    apellidos: "",
    email: "",
    password: "",
    repeatpassword: "",
  };
}
