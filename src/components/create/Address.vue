<template lang="pug">
section.create__address
  h2.title_up-middle.mb-12 Фотографии
  p.text_middle.opacity-50.mb-24 Создайте галерею фотографий и отметьте одну, которая будет отображаться в карточке

  .form__grid.form__grid_2.mb-32 
    CustomSelect

    CustomSelect

  .form__grid.form__grid_2.mb-32
    label.form__label
      input.form__input(type="text", required)
      span.form__placeholder Город или населенный пункт

    label.form__label
      input.form__input(type="text", required)
      span.form__placeholder Удаленность от населенного пункта, км

  .wrapper.wrapper_h-btw
    label.form__label.form__label-street
      input.form__input(type="text", required)
      span.form__placeholder Улица

    label.form__label.form__label-home
      input.form__input(type="text", required)
      span.form__placeholder Дом
</template>

<script setup>
import CustomSelect from "@/layout/CustomSelect.vue";
</script>

<style scoped lang='stylus'>
.create__address 
  .form__label
    width 100%

    &-street
      max-width 100%
      margin-right 32px

    &-home
      max-width: 304px
    
</style>