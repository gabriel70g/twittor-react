import React, { useState, useEffect } from "react";
import { Button, Spinner } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { toast } from "react-toastify";
import UseAuth from "../../hocks/UseAuth";
import BasicLayout from "../../layout/BasicLayout";
import BannerAvaatar from "../../components/user/BannerAvatar";
import InfoUser from "../../components/user/InfoUser";

import { getUserApi } from "../../api/user";

import "./User.scss";

function User(props) {
  const { match } = props;
  const [user, setUser] = useState(null);
  const { params } = match;
  const loggedUser = UseAuth();

  useEffect(() => {
    getUserApi(params.id)
      .then((resp) => {
        if (!resp) toast.error("El usuario que has visitado no existe");
        setUser(resp);
      })
      .catch(() => {
        toast.error("El usuario que has visitado no existe");
      });
  }, [params]);
  return (
    <BasicLayout className="user">
      <div className="user__title">
        <h2>
          {user ? `${user.nombre} ${user.apellidos}` : "Este usuario no existe"}
        </h2>
      </div>
      <BannerAvaatar user={user} loggedUser={loggedUser} />
      <InfoUser user={user} />
      <div className="user__tweets">Lista de twittis</div>
    </BasicLayout>
  );
}

export default withRouter(User);
