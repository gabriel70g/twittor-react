import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import LogoTwittorWhite from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";
import "./singinSingUp.scss";
import { faSearch, faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function singinSingUp() {
  return (
    <Container className="signin-signup" fluid>
      <Row>
        <LeftComponent />
        <RigthComponents />
      </Row>
    </Container>
  );
}

function LeftComponent() {
  return (
    <Col className="signin-signup__left" xs={6}>
      <img src={LogoTwittor} alt="Twittor" />
      <div>
        <h2>
          <FontAwesomeIcon icon={faSearch} />
          Sigue lo que te interesa.
        </h2>
        <h2>
          <FontAwesomeIcon icon={faUser} />
          Enterate de que está hablando la gente
        </h2>
        <h2>
          <FontAwesomeIcon icon={faComment} />
          Únete a la conversación
        </h2>
      </div>
    </Col>
  );
}

function RigthComponents() {
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoTwittorWhite} alt="twittor" />
        <h2>Mira lo que esta pasando en el mundo en este momento</h2>
        <h2>Únete a twittor hoy mismo</h2>
        <Button variant="primary">Registrate</Button>
        <Button variant="outline-primary">Iniciar sesión</Button>
      </div>
    </Col>
  );
}
