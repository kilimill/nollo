<template lang="pug">
.bread-crumbs
  ul.bread-crumbs__list
    li.bread-crumbs__item
      router-link.bread-crumbs__link.controls_small(to="/") Главная
    li.bread-crumbs__item
      router-link.bread-crumbs__link.controls_small(to="/") Главная
    li.bread-crumbs__item
      router-link.bread-crumbs__link.controls_small(to="/") Главная
    li.bread-crumbs__item
      router-link.bread-crumbs__link.controls_small(to="/" disabled) Главная
</template>

<script setup>
import { useRoute } from 'vue-router'
const router = useRoute()

console.log(router)
</script>


<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';
.bread-crumbs
  margin-bottom 32px
  
  &__item
    display: inline-block
    position relative
    margin-right 4px

    &::after
      content '/'
      color $black
      font-weight: 500;
      font-size: 12px;    
      line-height: 12px;
      margin 0 4px

    &:last-child
      opacity .3

      &::after
        display none

  &__link[disabled]
    pointer-events: none
</style>