import React from "react";

type Props = {
  children: React.ReactNode;
};

const AuthGuard = ({ children }: Props) => {
  const token = window.localStorage.getItem("token");

  if (token) {
    return <>{children}</>;
  } else {
    window.location.assign(window.location.origin + "/login");
  }
};

export default AuthGuard;
