import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faUsers,
  faPowerOff,
} from "@fortawesome/free-solid-svg-icons";
import LogoWhite from "../../assets/png/logo-white.png";

import "./LeftMenu.scss";

export default function LeftMenu() {
  return (
    <div className="left-menu">
      <img className="logo" src={LogoWhite} alt="logo twittor" />
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Inicio{" "}
      </Link>
      <Link to="/users">
        <FontAwesomeIcon icon={faUser} /> Usuarios{" "}
      </Link>
      <Link to="/profile">
        <FontAwesomeIcon icon={faUser} /> Perfil{" "}
      </Link>
      <Link to="/logoout">
        <FontAwesomeIcon icon={faPowerOff} /> Cerrar sesión{" "}
      </Link>
      <Button>Twittoar</Button>
    </div>
  );
}
