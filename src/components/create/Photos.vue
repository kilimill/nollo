<template lang="pug">
section.create__photos
  h2.title_up-middle Фотографии
  p.text_middle.opacity-50.mb-24 Создайте галерею фотографий и отметьте одну, которая будет отображаться в карточке

  DropFiles
  //- .file__drag-drop(ref="fileform")
  //-   p.controls_middle
  //-     span.create__photos-text Выберите файл
  //-     span.create__photos-text или перетащите в эту область

  //-   p.controls_small PNG, jpg, gif не более 10 MB

  //-   .remove-container
  //-     a.remove(v-on:click="removeFile(key)") Remove
</template>

<script setup>
import DropFiles from '@/layout/DropFiles.vue'
</script>
