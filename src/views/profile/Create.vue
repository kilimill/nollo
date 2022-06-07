<template lang="pug">
section.create
  .container
    .wrapper
      Aside(@my-event="erfno", :asideList="asideList")

      .create__content
        transition(name="fade", mode="out-in")
          component(:is="currentComponent")

        button.btn.btn_green(@click.prevent="findNextComponent") Продолжить
</template>


<script setup>
import { ref } from "vue";
import Aside from "@/layout/Aside";
import createComponents from "@/helpers/createComponents";
const currentComponent = ref(createComponents["BasicData"]);
const erfno = (name) => {
  console.log(name);
  currentComponent.value = createComponents[name];
};

const findNextComponent = () => {
  const currentIndex = asideList.findIndex(
    (item) => item.link === currentComponent.value
  );
  console.log(currentIndex)
  erfno(asideList[currentIndex].link);
};

const asideList = [
  {
    name: "Основные данные",
    link: "BasicData",
  },
  {
    name: "Категории",
    link: "Categories",
  },
  {
    name: "Фотографии",
    link: "Photos",
  },
  {
    name: "Контактные данные",
    link: "Contacts",
  },
  {
    name: "Адрес",
    link: "Addrress",
  },
  {
    name: "Номера",
    link: "Rooms",
  },
  {
    name: "Близлежащие водоемы",
    link: "Waters",
  },
  {
    name: "Информация для гостей",
    link: "Info",
  },
];
</script>

<style scoped lang='stylus'>
.create {
  &__content {
    width: 100%;
  }
}

.create__item {
  width: 608px;
  height: 200px;
  background-color: #F5F5F5;

  input {
    width: 100%;
    height: 100%;
    word-wrap: break-word;
  }
}
</style>