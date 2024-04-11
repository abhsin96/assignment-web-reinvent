import { FC } from "react";
import { Provider } from "react-redux";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { state, store } from "store";
import { injectStore } from "store/init";

import routes from "./routes";

injectStore(state);

const App: FC = () => {
  const content = useRoutes(routes);

  return (
    <>
      <Provider store={store}>{content}</Provider>
      <ToastContainer />
    </>
  );
};

export default App;
