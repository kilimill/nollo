<template lang="pug">
main.main
  img.bg_gradient(src="@/assets/img/bg.jpg")
  Header
  .main__content
    transition(name="fade", mode="out-in")
      //- <router-view :key="key"></router-view> 
      router-view
  Footer
</template>
<script setup>
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
// import {computed} from "vue"
// import {useRoute} from "vue-router"
// const key = computed(() => {
//   console.log(useRoute().meta.key)
//   return useRoute().meta.key
// });
</script>

<style scoped lang='stylus'>
.main {
  position: relative;
  height: 100%;

  &__content {
    position relative
    z-index 1
  }
}

.bg_gradient {
  position: absolute;
  left 0
  top 0
  width 100%

  background-size cover
  background-position center
  background-position center
}
</style>
