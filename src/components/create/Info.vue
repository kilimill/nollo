<template lang="pug">
section.data-place
  h2.title_up-middle Информация для гостей
  p.text_middle.opacity-50.mb-24 Последний этап добавления объекта, который поможет гостям узнать больше об условиях вашей турбазы

  ScrollableDecorator.mb-32(
    container="dataWayContainer",
    content="dataWayContent",
    scrollbar="dataWayScroll"
  )
    .data-place__description.form__text(contenteditable="true")

  ScrollableDecorator.mb-32(
    container="dataTermsContainer",
    content="dataWayContent",
    scrollbar="dataWayScroll"
  )
    .data-place__description.form__text(contenteditable="true")

  h3.title_middle.mb-24 Сезон работы

  ul.data-place__lsit
    li.data-place__item.mb-24 
      label.form__label-radio
        input.form__radio(type="radio", name="esfs")
        span.controls_middle Круглогодично

    li.data-place__item.mb-24 
      label.form__label-radio
        input.form__radio(type="radio", name="esfs")
        span.controls_middle В теплое время года

    li.data-place__item
      label.form__label-radio
        input.form__radio(type="radio", name="esfs")
        span.controls_middle В теплое время года и новогодние праздники

  h3.title_middle.mb-24 Условия заселения

  select.form__select.form__text.mb-32
    option adwdawd
    option adwdawd
    option adwdawd

  .form__grid.form__grid_2
    select.form__select.form__text
      option adwdawd
      option adwdawd
      option adwdawd

    select.form__select.form__text
      option adwdawd
      option adwdawd
      option adwdawd
</template>

<script setup>
import ScrollableDecorator from "@/layout/ScrollableDecorator";
</script>

<style scoped lang='stylus'>
.data-place {
  &__description {
    height: 200px;
  }
}
</style>