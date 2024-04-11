import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiInstance from "services/api";

import App from "./App";
import "./index.css";

apiInstance.defaults.baseURL = process.env.REACT_APP_API_URL;

function interceptors(apiInstanceInstance) {
  apiInstanceInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status >= 400) {
        toast.error(error?.response?.data?.error);
      }
      return Promise.reject(error);
    },
  );
}

interceptors(apiInstance);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
