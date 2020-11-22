import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import BasicModal from "../../components/Modal/BasciModal";
import SingUpForm from "../../components/SingUpForm";
import SingInForm from "../../components/SingInForm";
import LogoTwittorWhite from "../../assets/png/logo-white.png";
import LogoTwittor from "../../assets/png/logo.png";
import "./SignInSingUp.scss";
import { faSearch, faUser, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SignInSingUp(props) {
  const { setRefreshCheckLogin } = props;
  const [showModal, setShowModal] = useState(false);
  const [contentModal, setContentModal] = useState(null);

  const openModal = (content) => {
    setShowModal(true);
    setContentModal(content);
  };

  return (
    <>
      <Container className="signin-signup" fluid>
        <Row>
          <LeftComponent />
          <RigthComponents openModal={openModal} setShowModal={setShowModal} />
        </Row>
      </Container>
      <BasicModal show={showModal} setShow={setShowModal}>
        {contentModal}
      </BasicModal>
    </>
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

function RigthComponents(props) {
  const { openModal, setShowModal } = props;
  return (
    <Col className="signin-signup__right" xs={6}>
      <div>
        <img src={LogoTwittorWhite} alt="twittor" />
        <h2>Mira lo que esta pasando en el mundo en este momento</h2>
        <h2>Únete a twittor hoy mismo</h2>
        <Button
          variant="primary"
          onClick={() => openModal(<SingUpForm setShowModal={setShowModal} />)}
        >
          Registrate
        </Button>
        <Button
          variant="outline-primary"
          onClick={() => openModal(<SingInForm />)}
        >
          Iniciar sesión
        </Button>
      </div>
    </Col>
  );
}
