import { ref } from 'vue'
import createList from "@/helpers/tabComponents/createList";
import profileList from "@/helpers/tabComponents/profileList";

const componentList = {
  create: createList,
  profile: profileList
}

export default function tabComponents(page) {
  const currentList = componentList[page]
  const currentComponent = ref(currentList[0]);

  const findNextComponent = name => {
    console.log(name)
    if (name) {
      currentComponent.value = currentList.find(item => item.name === name);
    } else {
      console.log(currentList.find(item => item.id === currentComponent.value.id + 1))
      currentComponent.value = currentList.find(item => item.id === currentComponent.value.id + 1);
    }
  };

  return {
    componentList: currentList,
    currentComponent,
    findNextComponent
  }
}