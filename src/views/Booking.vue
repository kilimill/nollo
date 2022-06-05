<template lang="pug">
section.booking
  .container-mid
    h1.title_bigger.mb-32 Бронирование №2397-93

    Slider.mb-40(:images="images")

    section.booking__section
      h2.title_up-middle.border-btm.mb-24 Коттедж «Ультрасовременный домик»

      .details.mb-24
        .details__item
          FoodIcon.icon
          span.controls_small без питания

        .details__item
          ProfileIcon.icon
          span.controls_small 2+4 гостя

      .booking__info.wrapper.wrapper_h-btw
        .booking__info-item
          h3.title_middle.border-btm.mb-16 Детали бронирования

          .wrapper.wrapper_h-btw.border-btm.mb-24
            .booking__info-col
              h3.controls_small.mb-8.opacity-30 Заезд
              p.controls_middle.mb-4 пн, 7 июня 2022
              p.text_middle с 14:00

            .booking__info-col
              h3.controls_small.mb-8.opacity-30 Отъезд
              p.controls_middle.mb-4 вс, 20 июня 2022
              p.text_middle до 12:00

          p.text_middle.mb-4 Общая длительность проживания
          p.controls_middle 13 ночей

        .booking__info-item
          h3.title_middle.border-btm.mb-16 Стоимость

          .wrapper.wrapper_h-btw.mb-16
            p.text_middle.opacity-70 20 000 ₽ х 13 ночей
            p.text_middle 260 000 ₽

          .wrapper.wrapper_h-btw
            p.text_middle.opacity-70 Скидка 25%
            p.text_middle 65 000 ₽

          .total
            p.text_middle Итог
            p.text_middle.opacity-70 195 000 ₽

      h4.title_middle.mb-32 Условия проживания
      Accordion

      button.btn.btn_green.booking__btn 
        span.btn__content Отправить заявку

      p.controls_middle.align-ctr Для отправки заявки необходимо
        a.booking__link зарегистрироваться
</template>

<script setup>
import Slider from "@/layout/Slider";
import Accordion from "@/layout/Accordion";
import { FoodIcon, ProfileIcon } from "@/layout/icon/index.js";
import { reactive } from "vue";

const images = reactive([
  "./slide.jpg",
  "./slide2.jpg",
  "./slide.jpg",
  "./slide2.jpg",
  "./slide.jpg",
  "./slide.jpg",
]);
</script>

<style lang='stylus' scoped>
@import '@/assets/styles/mixins.styl';
@import '@/assets/styles/vars.styl';

.booking {
  padding-bottom: 81px;

  &__info {
    margin-bottom: 64px;

    &-item {
      max-width: 416px;
      width 100%
      display flex
      flex-direction: column
      border-radius: var(--radius-def)
      padding: var(--offset-up-mid);
      background-color: $gray;
    }
  }

  &__btn {
    width: 100%;
    margin-top: 56px;
    margin-bottom: 32px;
  }

  &__link {
    color: $green;
    text-decoration: underline;
  }
}
</style>