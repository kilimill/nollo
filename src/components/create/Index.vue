<template lang="pug">
section.create__data
  h2.title_up-middle.mb-12 Основные данные
  p.text_middle.opacity-50.mb-24 Укажите только название объекта, не добавляя слова "турбаза" или "база отдыха"

  .form__grid.form__grid_2.mb-32
    label.form__label
      input.form__input(type="text", required)
      span.form__placeholder Наименование

    CustomSelect

  .form__description
    ScrollableDecorator(
      ref="scroll",
      container="dataTermsContainer",
      content="dataWayContent",
      scrollbar="dataWayScroll"
    )
      .form__description-text(contenteditable="true")
</template>

<script setup>
import ScrollableDecorator from "@/layout/ScrollableDecorator.vue";
import CustomSelect from "@/layout/CustomSelect.vue";
</script>

<style setup lang='stylus'>
.create__data {
  .form__description {
    height: 200px;

    &-text {
      min-height: 200px
    }
  }
}
</style>