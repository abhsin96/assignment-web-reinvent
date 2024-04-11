import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loadable = (Component) => (myProps) => {
  return (
    <Suspense fallback={<h1>Loading ...</h1>}>
      {!!myProps?.hidden && myProps?.hidden() ? <NotFoundPage /> : <Component {...myProps} />}
    </Suspense>
  );
};

const AuthGuard = Loadable(lazy(() => import("components/AuthGuard")));
const LoginPage = Loadable(lazy(() => import("pages/LoginPage")));
const Register = Loadable(lazy(() => import("pages/Register")));
const NotFoundPage = Loadable(lazy(() => import("pages/NotFoundPage")));
const Home = Loadable(lazy(() => import("pages/Home")));

const routes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  {
    path: "/",
    element: (
      <AuthGuard>
        <Home />
      </AuthGuard>
    ),
  },

  {
    path: "*",
    children: [
      {
        path: "*",
        exact: true,
        element: <Navigate to="/" replace />,
      },
    ],
  },
];

export default routes;
