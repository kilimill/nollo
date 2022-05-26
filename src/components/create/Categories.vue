<template lang="pug">
section.create__categories
  h2.title_up-middle Категории
  p.text_middle.opacity-50.mb-24 Отметьте категории, которые подходят вашей турбазе

  ol.create__categories-list
    li.create__categories-item(v-for="(category, i) in categories", :key="i")
      label.form__checkbox-label
        input.form__checkbox(type="checkbox", :value="category.value", name="kk")
        span.controls_middle {{ category.text }}
</template>

<script setup>
const categories = [
  {
    text: "Активный отдых",
    value: "kk",
  },
  {
    text: "С детьми",
    value: "kk",
  },
  {
    text: "Праздники",
    value: "kk",
  },
  {
    text: "Корпоративный отдых",
    value: "kk",
  },
  {
    text: "Романтический отдых",
    value: "kk",
  },
  {
    text: "Рыбалка",
    value: "kk",
  },
  {
    text: "Охота",
    value: "kk",
  },
  {
    text: "Подводная охота",
    value: "kk",
  },
  {
    text: "Баня/сауна",
    value: "kk",
  },
  {
    text: "Кемпинг",
    value: "kk",
  },
  {
    text: "Сплав/Поход",
    value: "kk",
  },
  {
    text: "На берегу",
    value: "kk",
  },
];
</script>

<style setup lang='stylus'>
.create__categories {
  &-list {
    columns: 2;
    margin-bottom -24px
  }

  &-item {
    margin-bottom 24px
  }
}
</style>