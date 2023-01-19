import { computed, ref } from "vue";
import createList from "@/helpers/tabComponents/createList";
import profileList from "@/helpers/tabComponents/profileList";

export default function tabComponents(page, startPage) {
  const componentList = {
    create: createList,
    profile: profileList,
  };
  const currentList = componentList[page];
  const currentPage = ref(startPage);
  const currentComponent = computed(() => currentList[currentPage.value]);
  const isLastStep = computed(() => currentPage.value === currentList.length - 1);

  const findComponent = (i) => {
    currentPage.value = i;
  };

  return {
    componentList: currentList,
    currentComponent,
    findComponent,
    isLastStep,
  };
}
