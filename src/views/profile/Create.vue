<template lang="pug">
section.create
  .container
    .wrapper
      Aside

      .create__content

        //- BasicData
        //- Categories
        Photos

</template>


<script setup>
import Aside from "@/layout/Aside"
// import BasicData from "@/components/create/Index"
// import Categories from "@/components/create/Categories"
import Photos from "@/components/create/Photos"
</script>

<style scoped lang='stylus'>
.create
  &__content
    width 100%
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