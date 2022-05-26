<template lang="pug">
main.main
  Header
  .main__content
    transition(name="fade", mode="out-in")
      //- <router-view :key="key"></router-view> 
      router-view
  //- <Footer :page="key" />
</template>
<script setup>
import Header from "@/layout/Header";
// import {computed} from "vue"
// import {useRoute} from "vue-router"
// const key = computed(() => {
//   console.log(useRoute().meta.key)
//   return useRoute().meta.key
// });
</script>
