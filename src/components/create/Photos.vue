<template lang="pug">
section.create__photos
  h2.title_up-middle.mb-12 Фотографии
  p.text_middle.opacity-50.mb-24 Создайте галерею фотографий и отметьте одну, которая будет отображаться в карточке

  DropFiles
</template>

<script setup>
import DropFiles from '@/layout/DropFiles.vue'
</script>
