<template lang="pug">
section.terms
  .container-mid
    .terms__inner
      h2.title_up-middle.mb-24 Пользовательское соглашение

      Accordion

    .terms__inner
      h2.title_up-middle.mb-24 Политика конфиденциальности
      Accordion
</template>

<script setup>
import Accordion from "@/layout/Accordion.vue";
</script>

<style setup lang='stylus'>
.terms 
  &__inner:first-child 
    margin-bottom: 48px;
</style>