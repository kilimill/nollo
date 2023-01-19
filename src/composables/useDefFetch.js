import { useApi } from "@/composables/useApi";

export const getDefParams = (url, variable) => {
  return useApi()
    .getFrom(url)
    .then((data) => {
      variable.value = data.data;
    });
};

export const postDefParams = (url, params, variable) => {
  return useApi()
    .postTo(url, params)
    .then((data) => {
      variable.value = data.data;
    })
    .catch((response) => variable.value = response.data)
};
