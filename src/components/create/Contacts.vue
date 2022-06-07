<template lang="pug">
section.create__contacts
  h2.title_up-middle.mb-12 Контактные данные
  p.text_middle.opacity-50.mb-24 Оставьте удобные виды связи с гостями

  ul.create__contacts-list.mb-24
    li.form__grid.form__grid_2
      CustomSelect

      label.form__label
        input.form__input(type="text", required)
        span.form__placeholder Контакт

  button.btn.btn_add
    PlusIcon.icon
    span Добавить еще контакт
</template>

<script setup>
import { PlusIcon } from "@/layout/icon/index";
import CustomSelect from "@/layout/CustomSelect.vue";
</script>