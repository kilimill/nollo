<template lang="pug">
section.create__info
  h2.title_up-middle.mb-12 Информация для гостей
  p.text_middle.opacity-50.mb-24 Последний этап добавления объекта, который поможет гостям узнать больше об условиях вашей турбазы

  .form__description
    ScrollableDecorator(
      container="dataWayContainer",
      content="dataWayContent",
      scrollbar="dataWayScroll"
    )
      .form__description-text(contenteditable="true")

  .form__description
    ScrollableDecorator(
      container="dataTermsContainer",
      content="dataWayContent",
      scrollbar="dataWayScroll"
    )
      .form__description-text(contenteditable="true")

  h3.title_middle.mb-24 Сезон работы

  ul.create__info-list.mb-40
    li.create__info-item.mb-24 
      label.form__label-radio
        input.form__radio(type="radio", name="esfs")
        span.controls_middle Круглогодично

    li.create__info-item.mb-24 
      label.form__label-radio
        input.form__radio(type="radio", name="esfs")
        span.controls_middle В теплое время года

    li.create__info-item
      label.form__label-radio
        input.form__radio(type="radio", name="esfs")
        span.controls_middle В теплое время года и новогодние праздники

  h3.title_middle.mb-24 Условия заселения

  CustomSelect.mb-32

  .form__grid.form__grid_2
    CustomSelect

    CustomSelect
</template>

<script setup>
import ScrollableDecorator from "@/layout/ScrollableDecorator";
import CustomSelect from "@/layout/CustomSelect.vue";
</script>

<style scoped lang='stylus'>
.create__info {
  .form__description {
    height: 200px;
    margin-bottom 32px

    &-text {
      min-height: 200px;
    }
  }
}
</style>