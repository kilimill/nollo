<template lang="pug">
section.waters
  h2.title_up-middle Близлежащие водоемы
  p.text_middle.opacity-50.mb-24 В случае, если водоемов поблизости нет, можете пропустить этот шаг

  ul.waters__list
    li.wrapper.wrapper_h-btw.mb-32
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

<style scoped lang='stylus'>
.waters {
  .form {
    &__label {
      max-width: 528px;
      width: 100%;
    }

    &__select {
      max-width: 304px;
      width: 100%;
    }
  }
}
</style>