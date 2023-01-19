import axios from "axios";
import { useUserStore } from "@/stores/userStore";
import { URL } from "@/helpers/constants";
import { showFlashSuccess, showFlashError } from "@/helpers/showFlashMessage";

export const useApi = () => {
  const userStore = useUserStore();
  const instance = axios.create({
    withCredentials: true,
    baseURL: URL,
  });

  if (!userStore.isTokenExist) {
    setCsrfCookie();
  }

  function setCsrfCookie() {
    instance
      .get("/sanctum/csrf-cookie")
      .then(() => userStore.setTokenExistTrue());
  }

  // APIs for authentication
  const auth = (params) => {
    return instance
      .post("/auth", params)
      .then(({ data }) => {
        showFlashSuccess(data);
        return data;
      })
      .catch(({ response }) => {
        // showFlashError(response);
        throw response;
      });
  };
  const inputPrivateCode = (params) => {
    return instance
      .post("/input-private-code", params)
      .then(({ data }) => {
        setCsrfCookie();
        userStore.setUserAuthTrue();
        return data;
      })
      .catch(({ response }) => {
        // showFlashError(response);
        throw response;
      });
  };
  const logout = () => instance.post("logout").then(() => userStore.logout());

  // APIs
  const getProfile = () => {
    userStore.setIsBusy(true);
    return instance
      .get("/api/profile")
      .then(({ data }) => {
        userStore.setUser(data.data);
        userStore.setUserAuthTrue();
        return data;
      })
      .finally(() => {
        userStore.setIsBusy(false);
      });
  };

  const getFrom = (url) => {
    return instance
      .get("/api/" + url)
      .then(({ data }) => {
        showFlashSuccess(data);
        return data;
      })
      .catch(({ response }) => {
        if (response.status === 401 || response.status === 419) {
          userStore.logout();
          // TODO: temp solution. Route is not available here
          window.location.replace("/");
        }

        // showFlashError(response);
        throw response;
      });
  };

  const postTo = (url, params, showError = false) => {
    return instance
      .post("/api/" + url, params)
      .then(({ data }) => {
        showFlashSuccess(data);
        return data;
      })
      .catch(({ response }) => {
        if (response.status === 401 || response.status === 419) {
          userStore.logout();
          // TOD:O temp solution. Route is not available here
          window.location.replace("/");
        }
        if (showError) showFlashError(response);
        throw response;
      });
  };

  const deleteFrom = (url, params) => {
    return instance
      .delete("/api/" + url, params)
      .then(({ data }) => {
        showFlashSuccess(data);
        return data;
      })
      .catch(({ response }) => {
        // showFlashError(response);
        throw response;
      });
  };

  return {
    auth,
    inputPrivateCode,
    logout,
    postTo,
    getFrom,
    deleteFrom,
    getProfile,
  };
};
