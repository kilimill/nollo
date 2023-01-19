import { useRoute } from "vue-router";
import { useCommonStore } from "@/stores/commonStore";
import { computed } from "vue";

const routeListLight = ["UpsertHotel", "CreateHotel", "Added", "Booking"];

const routeListGradient = ["Home", "Error", "Search", "Popular"];

const routeSkipMobileList = ["UpsertHotel", "CreateHotel"];

export default function findClass() {
  const router = useRoute();

  const checkRoute = computed(() => {
    if (
      Object.values(routeSkipMobileList).includes(router.name) &&
      useCommonStore().mobile
    ) {
      return;
    } else {
      if (Object.values(routeListLight).includes(router.name)) {
        return "light";
      }
    }

    if (Object.values(routeListGradient).includes(router.name)) {
      return "gradient";
    }

    if (router.name === "Authorization") {
      return "log-in";
    }

    if (router.name === "Contacts") {
      return "content-white";
    }

    return "";
  });

  return { checkRoute };
}
