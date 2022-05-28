<template lang="pug">
section.rooms
  h2.title_up-middle Контактные данные
  p.text_middle.opacity-50.mb-24 Оставьте удобные виды связи с гостями

  .rooms__content
    .rooms__item
      .rooms__header.wrapper.wrapper_h-btw.wrapper_v-ctr
        h3.title_pre-middle Номер №1

        button.btn.btn_control.btn_red
          TrashIcon.icon
          span  Удалить

      .form__grid.form__grid_2.mb-32
        label.form__label
          input.form__input(placeholder="Контакт")
        
        select.form__text
          option adwdawd
          option adwdawd
          option adwdawd

      .form__grid.form__grid_4.mb-32
        select.form__text.form__grid-item--small
          option adwdawd
          option adwdawd
          option adwdawd

        label.form__label.form__grid-item--small
          input.form__input(placeholder="Контакт")
        
        select.form__text.form__grid-item--def
          option adwdawd
          option adwdawd
          option adwdawd

      ScrollableDecorator.mb-32(ref="scroll")
        .rooms__description.form__text(contenteditable="true")

      DropFiles

  button.btn.btn_control.rooms__add
    PlusIcon.icon
    span  Добавить еще контакт

</template>

<script setup>
import { PlusIcon, TrashIcon } from "@/layout/icon/index";
import ScrollableDecorator from '@/layout/ScrollableDecorator.vue'
import DropFiles from '@/layout/DropFiles.vue'
</script>

<style scoped lang='stylus'>
.rooms
  &__description
    max-width 100%
    height 112px

  &__add
    margin-top 32px
</style>