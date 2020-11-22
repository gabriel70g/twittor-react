import React, { useState } from "react";
import SinginSingUp from "./page/singinSingUp";
import { ToastContainer } from "react-toastify";

export default function App() {
  const [user, setUser] = useState({ name: "gabys" });

  console.log(user);

  return (
    <div>
      {user ? (
        <div>
          <SinginSingUp />
        </div>
      ) : (
        <h1>No estas logueado</h1>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseonHover
      />
    </div>
  );
}
