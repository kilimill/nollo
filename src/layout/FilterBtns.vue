<template lang="pug">
.filter
  button.filter__item
    Active.icon
    span.controls__small Активный отдых
</template>

<script setup>
import { Active } from "@/layout/icon/index"
</script>

<style lang="stylus" scoped>
.filter
  &__item
    display flex
    align-items center
    margin-left 16px
    padding 8px 16px
    border-radius 24px
    background-color #fff

    &:first-child 
      margin-left 0

  .controls__small
    margin-left 8px
</style>