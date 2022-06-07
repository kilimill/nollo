<template lang="pug">
section.create__waters
  h2.title_up-middle.mb-12 Близлежащие водоемы
  p.text_middle.opacity-50.mb-24 В случае, если водоемов поблизости нет, можете пропустить этот шаг

  ul.create__waters-list
    li.form__grid.form__grid_2.mb-32
      label.form__label
        input.form__input(type="text", required)
        span.form__placeholder Река, море или озеро

      label.form__label
        input.form__input(type="text", required)
        span.form__placeholder Удаленность от берега, м

  button.btn.btn_control
    PlusIcon.icon
    span Добавить еще водоем
</template>

<script setup>
import { PlusIcon } from "@/layout/icon/index";
</script>