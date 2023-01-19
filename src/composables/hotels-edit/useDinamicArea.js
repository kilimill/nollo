import { onMounted, watch } from "vue";
import { useApi } from "../useApi";

export default function useDinamicArea({ arr, key, templateObj, url }) {
  const addArea = () => {
    arr[key].push(templateObj());
  };

  const removeArea = (i) => {
    if (arr[key][i]?.id) {
      useApi().deleteFrom(url.value + arr[key][i].id);
    }
    deleteArea(i);
  };

  const deleteArea = (i) => {
    arr[key].splice(i, 1);
  };

  const checkingAria = () => {
    if (!arr[key].length) {
      addArea();
    }
  };

  onMounted(() => {
    checkingAria();
  });

  watch(arr, () => {
    checkingAria();
  });

  return {
    addArea,
    removeArea,
    deleteArea
  };
}
