<template lang="pug">
section.create__data
  h2.title_up-middle Основные данные
  p.text_middle.opacity-50.mb-24 Укажите только название объекта, не добавляя слова "турбаза" или "база отдыха"

  .wrapper.wrapper_h-btw.mb-32
    label.form__label
      input.form__input(placeholder="")

    select.form__text
      option adwdawd
      option adwdawd
      option adwdawd

  
  ScrollableDecorator(ref="scroll")
    .create__data-description.form__text(contenteditable="true")

</template>

<script setup>
import ScrollableDecorator from '@/layout/ScrollableDecorator.vue'
</script>

<style setup lang='stylus'>
.create__data
  &-description
    height: 200px
</style>