import querystring from "query-string";
import apiInstance from "services/api";

export default {
  login(payload) {
    return apiInstance.post(`/api/login`, querystring.stringify(payload)).then((response) => {
      return response.data;
    });
  },
  register(payload) {
    return apiInstance.post(`/api/register`, querystring.stringify(payload)).then((response) => {
      return response.data;
    });
  },
  logout() {
    return apiInstance.post(`/api/logout`).then((response) => {
      return response.data;
    });
  },
};
