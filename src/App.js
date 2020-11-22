import React, { useState, useEffect } from "react";
import SinginSingUp from "./page/singinSingUp";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./utils/context";
import { isUserLogedAPI } from "./api/auth";
import Routing from "./routers/Routing";

export default function App() {
  const [user, setUser] = useState(null);
  const [loadUser, setLoadUser] = useState(false);
  const [refreshCheckLogin, setRefreshCheckLogin] = useState(false);

  useEffect(() => {
    setUser(isUserLogedAPI());
    setRefreshCheckLogin(false);
    setLoadUser(true);
  }, [setRefreshCheckLogin]);

  if (!loadUser) return null;

  return (
    <AuthContext.Provider value={user}>
      {user ? (
        <Routing />
      ) : (
        <SinginSingUp setRefreshCheckLogin={setRefreshCheckLogin} />
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
    </AuthContext.Provider>
  );
}
