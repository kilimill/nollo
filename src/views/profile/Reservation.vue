<template lang="pug">
section.reservation
  .container
    h1.title_bigger.mb-32 Бронирование №2397-93

    .wrapper
      .reservation__item 
        .reservation__item-header
          .alert.alert_wait
            p.controls_middle Ожидает подтверждения
          //- .alert.alert_success
          //-   p.controls_middle Подтверждено
          //- .alert.alert_error
          //-   p.controls_middle Отклонено

        img.reservation__img.mb-32(src="@/assets/img/slide.jpg")

        h2.title_up-middle.border-btm.mb-24 Коттедж «Ультрасовременный домик»

        .details.mb-24
          .details__item
            FoodIcon.icon
            span.controls_small без питания

          .details__item
            ProfileIcon.icon
            span.controls_small 2+4 гостя

        h3.title_middle.border-btm.mb-16 Детали бронирования

        .mb-24
          .wrapper.wrapper_h-btw.border-btm.mb-24
            .reservation__info-col
              h3.controls_small.mb-8.opacity-30 Заезд
              p.controls_middle.mb-4 пн, 7 июня 2022
              p.text_middle с 14:00

            .reservation__info-col
              h3.controls_small.mb-8.opacity-30 Отъезд
              p.controls_middle.mb-4 вс, 20 июня 2022
              p.text_middle до 12:00

          p.text_middle.mb-4 Общая длительность проживания
          p.controls_middle 13 ночей

        h3.title_middle.border-btm.mb-16 Стоимость

        .wrapper.wrapper_h-btw.wrapper.mb-16
          p.text_middle.opacity-70 20 000 ₽ х 13 ночей
          p.text_middle 260 000 ₽

        .wrapper.wrapper_h-btw.wrapper.mb-32
          p.text_middle.opacity-70 Скидка 25%
          p.text_middle - 65 000 ₽

        .total.wrapper.wrapper_h-btw
          p.text_middle.opacity-70 Итог
          p.text_middle 195 000 ₽


      .reservation__chat
        Chat

</template>

<script setup>
import { FoodIcon, ProfileIcon } from "@/layout/icon/index.js";
import Chat from "@/components/Chat.vue"
</script>

<style lang="stylus" scoped>
@import '@/assets/styles/vars.styl'

.reservation
  padding-bottom 86px
  
  &__item
    position relative
    max-width: 528px
    width 100%
    margin-right 32px
    padding 32px
    border-radius var(--radius-def)
    background-color #FFFFFF

    &-header
      position absolute
      top 56px
      left 56px

  &__chat
    width 100%

  &__img
    width 100%
    height 282px
    border-radius: var(--radius-8)
    object-fit cover
    object-position: center

  .total
    background-color #F5F5F5
</style>