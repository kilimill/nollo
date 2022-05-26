<template lang="pug">
secttion.popular
  .container
    h1.title_up-middle.mb-32 Популярные места

    FilterBtns.mb-40

    .popular__content
      a.popular__item( style="background-image: url('http://localhost:8080/img/slide.457f1018.jpg')")
        .popular__item-info
          h2.controls_bigger.mb-8 Пироговское водохранилище
          p.text_middle.opacity-70 Тверская область
      a.popular__item( style="background-image: url('http://localhost:8080/img/slide.457f1018.jpg')")
        .popular__item-info
          h2.controls_bigger.mb-8 Пироговское водохранилище
          p.text_middle.opacity-70 Тверская область



</template>

<script setup>
import FilterBtns from "@/layout/FilterBtns"
</script>

<style lang="stylus" scoped>
.popular
  &__content
    display flex
    flex-wrap: wrap
    margin -24px

  &__item
    margin 16px
    max-width 416px
    padding 24px
    height 288px
		border-radius 16px

</style>