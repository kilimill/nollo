import { loadYmap } from "vue-yandex-maps";
import { useUserStore } from "@/stores/userStore";
import { searchHotels } from "@/composables/useSearchHotels";

export const useLocation = () => {
  const userStore = useUserStore();

  const findLocation = async () => {
    if (!userStore.city) {
      await location();
    }
  };

  const location = async () => {
    const settings = {
      apiKey: "932c21e6-ab0e-47d6-b65e-56afd7356cf9",
      lang: "ru_RU",
      coordorder: "latlong",
      version: "2.1",
    };
    
    
    await loadYmap({ ...settings, debug: false }).then(async () => {
      await window?.ymaps?.geolocation
        ?.get({
          // Определение геолокации на основе ip пользователя.
          provider: "yandex",
          // Автоматическое геокодирование результата.
          autoReverseGeocode: true,
        })
        .then((response) => {
          const obj = response.geoObjects.get(0);
          const data = obj.properties.get(
            "metaDataProperty.GeocoderMetaData.Address.Components"
          );
          userStore.setCoordinates(obj.geometry.getCoordinates());
          userStore.setCity(data.find((item) => item.kind === "locality").name);
          searchHotels.location = userStore.city;
        });
    });

    if (!userStore.city) {
      userStore.setCity("Москва");
    }
  };

  return {
    findLocation,
  };
};
