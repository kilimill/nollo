<template lang="pug">
.popular
  .container
    .popular__item.mb-32( style="background-image: url('http://localhost:8080/img/slide.457f1018.jpg')")
      .popular__item-info
        h2.title_up-middle.mb-16 Пироговское водохранилище
        p.text_middle.opacity-70 Тверская область

    FilterBtns.mb-24

    form.form.wrapper.mb-48
      label.form__label.form__label_with-icon
        SearchIcon.icon.form__label-icon
        input.form__input.controls_middle(type="text", required)
        span.form__placeholder Место или наименование турбазы

      label.form__label
        input.form__input.controls_middle(type="text", required)
        span.form__placeholder Стоимость от

      label.form__label
        input.form__input.controls_middle(type="text", required)
        span.form__placeholder Стоимость до

      button.btn.btn_green 
        span.btn__content Подписаться

    Catalog
</template>

<script setup>
import { SearchIcon } from "@/layout/icon/index"
import FilterBtns from "@/layout/FilterBtns"
import Catalog from "@/components/Catalog"
</script>

<style lang="stylus" scoped>
.popular
  .form__label
    max-width: 192px
    margin-right 32px
    background-color #FFFFFF

    &:first-child
      max-width: 100%
      width 100%

.popular__item
  height 440px
  border-radius 32px
  padding 40px
</style>