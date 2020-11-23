import React from "react";

import "./InfoUser.scss";

export default function InfoUser(props) {
  const { user } = props;

  return (
    <div className="info-user">
      <h2 className="name">
        {user?.nombre} {user?.apellidos}
      </h2>
    </div>
  );
}
