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
import UseAuth from "../../hocks/UseAuth";
import { logoutAPI } from "../../api/auth";

import "./LeftMenu.scss";

export default function LeftMenu(props) {
  const { setRefreshCheckLogin } = props;
  const user = UseAuth();

  const logout = () => {
    logoutAPI();
    setRefreshCheckLogin(true);
  };
  return (
    <div className="left-menu">
      <img className="logo" src={LogoWhite} alt="logo twittor" />
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Inicio{" "}
      </Link>
      <Link to="/users">
        <FontAwesomeIcon icon={faUser} /> Usuarios{" "}
      </Link>
      <Link to={`/${user?._id}`}>
        <FontAwesomeIcon icon={faUser} /> Perfil{" "}
      </Link>
      <Link to="/logoout" onClick={logout}>
        <FontAwesomeIcon icon={faPowerOff} /> Cerrar sesión{" "}
      </Link>
      <Button>Twittoar</Button>
    </div>
  );
}
