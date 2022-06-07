<template lang="pug">
section.rooms
  h2.title_up-middle.mb-12 Контактные данные
  p.text_middle.opacity-50.mb-24 Оставьте удобные виды связи с гостями

  .rooms__content
    .rooms__item
      .wrapper.wrapper_h-btw.wrapper_v-ctr
        h3.title_pre-middle Номер №1

        button.btn.btn_control.btn_red
          TrashIcon.icon
          span  Удалить

      .form__grid.form__grid_2.mb-32
        label.form__label
          input.form__input(type="text", required)
          span.form__placeholder Наименование
        
        CustomSelect

      .form__grid.form__grid_4.mb-32
        CustomSelect.form__grid-item--small

        label.form__label.form__grid-item--small
          input.form__input(type="text", required)
          span.form__placeholder Стоимость
      
        CustomSelect.form__grid-item--def

      .form__description.mb-32
        ScrollableDecorator.mb-32(ref="scroll")
          .form__description-text(contenteditable="true")

      DropFiles.mb-32

  button.btn.btn_control
    PlusIcon.icon
    span Добавить еще номер
</template>

<script setup>
import { PlusIcon, TrashIcon } from "@/layout/icon/index";
import ScrollableDecorator from '@/layout/ScrollableDecorator.vue'
import DropFiles from '@/layout/DropFiles.vue'
import CustomSelect from "@/layout/CustomSelect.vue";
</script>

<style scoped lang='stylus'>
.rooms
  .form__description {
    height: 112px;

    &-text {
      min-height: 112px;
    }
  }
</style>