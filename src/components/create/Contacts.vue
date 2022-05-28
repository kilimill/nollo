<template lang="pug">
section.contacts
  h2.title_up-middle Контактные данные
  p.text_middle.opacity-50.mb-24 Оставьте удобные виды связи с гостями

  ul.contacts__list
    li.contacts__item
      select.form__text
        option adwdawd
        option adwdawd
        option adwdawd

      label.form__label
        input.form__input(placeholder="Контакт")

  button.btn.btn_add
    PlusIcon.icon
    span  Добавить еще контакт
</template>

<script setup>
import { PlusIcon } from "@/layout/icon/index";
</script>

<style scoped lang='stylus'>
.contacts {
  .form__label, select {
    width: 48%;
  }

  .form__label {
    &-street {
      max-width: 100%;
      margin-right: 32px;
      width: 100%;
    }
  }

  &__list {
    margin-bottom 24px
  }

  &__item {
    display: flex;
    justify-content: space-between;
  }
}
</style>