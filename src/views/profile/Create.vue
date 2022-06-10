<template lang="pug">
section.create
  .container
    .wrapper
      Aside(
        @findNextComponent="findNextComponent",
        :list="componentList",
        :activeIndex="currentComponent.id",
      )

      .create__content
        transition(name="fade", mode="out-in")
          component(:is="currentComponent.name")

        button.btn.btn_green(@click.prevent="findNextComponent()") Продолжить
</template>


<script setup>
import Aside from "@/layout/Aside";
import tabComponents from "@/helpers/tabComponents/index";
const { componentList, currentComponent, findNextComponent } =
  tabComponents("create");
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