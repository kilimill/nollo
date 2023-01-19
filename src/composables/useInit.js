import { useCommonStore } from "@/stores/commonStore";
import { useUserStore } from "@/stores/userStore";
import { useDefaultStore } from "@/stores/defaultStore";
import { useApi } from "@/composables/useApi";
import { useLocation } from "@/composables/useLocation";
import timeoutDecorator from "@/helpers/timeoutDecorator.js";

export default function useInit() {
  const { delayDecor } = timeoutDecorator(100, handleResize);
  const defaultStore = useDefaultStore();
  const userStore = useUserStore();

  function handleResize() {
    useCommonStore().handleResize();
  }

  const fetchParams = (url, key) => {
    const funcList = {
      allHotels: (hotels) => defaultStore.setAllHotels(hotels),
      meals: (meals) => defaultStore.setMeals(meals),
      tags: (tags) => defaultStore.setTags(tags),
    };

    const getFunc = () => funcList[key];

    return useApi()
      .getFrom(url)
      .then((data) => {
        getFunc()(data.data);
        return;
      });
  };

  const init = () => {
    useApi().getProfile();

    Promise.all([
      fetchParams("hotels/all", "allHotels"),
      useLocation().findLocation(),
    ]).then(() => {
      userStore.setIsGotLocation(true);
    });

    fetchParams("tags", "tags");
    fetchParams("meals", "meals");
    handleResize();
    window.addEventListener("resize", delayDecor);
  };

  const destroy = () => {
    window.removeEventListener("resize", delayDecor);
  };

  return { init, destroy };
}
