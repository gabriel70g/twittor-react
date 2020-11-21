import React, { useState } from "react";
import SinginSingUp from "./page/singinSingUp";

export default function App() {
  const { user, setUser } = useState({ name: "gabys" });

  console.log(user);

  return (
    <div>
      {!user ? (
        <div>
          <SinginSingUp />
        </div>
      ) : (
        <h1>No estas logueado</h1>
      )}
    </div>
  );
}
