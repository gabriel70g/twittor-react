import React from "react";
import { Button } from "react-bootstrap";
import AvatarNotFound from "../../../assets/png/avatar-no-found.png";
import { API_HOST } from "../../../utils/constant";

import "./BannerAvatar.scss";

export default function BannerAvatar(props) {
  const { user, loggedUser } = props;
  console.log(user);
  const bannerUrl = user?.banner
    ? `${API_HOST}/obtenerbanner?id=${user.id}`
    : null;

  const avatarUrl = user?.banner
    ? `${API_HOST}/obteneravatar?id=${user.id}`
    : AvatarNotFound;

  console.log(user);
  console.log(bannerUrl);

  return (
    <div
      className="banner-avatar"
      style={{ backgroundImage: `url('${bannerUrl}')` }}
    >
      <div
        className="avatar"
        style={{ backgroundImage: `url('${avatarUrl}')` }}
      />
      {user && (
        <div className="options">
          {loggedUser._id === user.id && <Button>Editar perfil</Button>}
          {loggedUser._id !== user.id && <Button>Seguir</Button>}
        </div>
      )}
    </div>
  );
}
