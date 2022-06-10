<template lang="pug">
section.profile
  .container
    .wrapper.wrapper-h-btw
      Aside(
        @findNextComponent="findNextComponent",
        :list="componentList",
        :activeIndex="currentComponent.id"
      )
      //- PersonalData
      .profile__content
        transition(name="fade", mode="out-in")
          component(:is="currentComponent.name")
</template>

<script setup>
import Aside from "@/layout/Aside";
import tabComponents from "@/helpers/tabComponents/index";
const { componentList, currentComponent, findNextComponent } =
  tabComponents("profile");
</script>

<style scoped lang='stylus'>
.profile {
  &__content {
    width: 100%;
  }
}
</style>