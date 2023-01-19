import { ref } from "vue";
import { useApi } from "@/composables/useApi";

export default function useToggleApi(hotelKey) {
  const loadFavorite = ref(false);

  const toggleApi = (url, hotel) => {
    loadFavorite.value = true;
    const api = () => {
      if (hotel[hotelKey]) {
        return useApi().deleteFrom(url);
      } else {
        return useApi().postTo(url);
      }
    };

    api()
      .then(() => {
        hotel[hotelKey] = !hotel[hotelKey];
      })
      .finally(() => (loadFavorite.value = false));
  };

  return { loadFavorite, toggleApi };
}
