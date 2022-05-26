<template lang="pug">
.popular-card
  .container
    .popular__item.mb-32( style="background-image: url('http://localhost:8080/img/slide.457f1018.jpg')")
      .popular__item-info
        h2.title_up-middle.mb-16 Пироговское водохранилище
        p.text_middle.opacity-70 Тверская область

    FilterBtns.mb-24

    form.form.wrapper
      label.form__label.popular-card__label
        SearchIcon.form__label-icon
        input.form__input.controls_middle(placeholder="Место или наименование турбазы")

      label.form__label.popular-card__label
        input.form__input.controls_middle(placeholder="Стоимость от")

      label.form__label.popular-card__label
        input.form__input.controls_middle(placeholder="Стоимость до")

      button.btn Подписаться

    Catalog
</template>

<script setup>
import { SearchIcon } from "@/layout/icon/index"
import FilterBtns from "@/layout/FilterBtns"
import Catalog from "@/components/Catalog"
</script>

<style lang="stylus" scoped>
.popular-card
  &__label
    max-width: 192px
    margin-right 32px

    &:first-child
      max-width: 100%
      width 100%

.popular__item
  height 440px
  border-radius 32px
  padding 40px
</style>