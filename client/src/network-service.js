import Axios from "axios";

export default {
  setupInterceptors: (store) => {
    Axios.interceptors.request.use(
      function (config) {
        config.headers.Authorization = localStorage.getItem("wollof-auth");
        return config;
      },
      (err) => console.log(err)
    );
  },
};
