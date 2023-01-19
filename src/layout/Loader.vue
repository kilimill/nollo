<template>
  <div class="loader">
    <LoaderIcon class="loader__icon" />
  </div>
</template>

<script setup>
import { LoaderIcon } from "@/layout/icon/index";
</script>

<style scoped lang="stylus">
.loader
  width 100%
  margin 30px auto
  text-align: center

  &__icon
    width 48px
    height 48px
    animation: loader 2.4s infinite ease-in;

  @keyframes loader
    0%
      transform: rotate(0deg)

    100%
      transform: rotate(360deg)
</style>
