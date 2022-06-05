<template lang="pug">
.card
  .card__alert(v-if="place.new")
    p.controls_middle NEW

  router-link(to="/place")
    img.card__img(src="@/assets/img/card.jpg")

  .card__box
    router-link.controls_bigger.mb-8(to="/place") {{ place.title }}
    p.text_middle.mb-24.opacity-50 {{ place.city }}

    p.controls_bigger от {{ place.price }} ₽
      span.text_middle.opacity-50 /сутки
</template>



<script setup>
import { defineProps } from "vue";
defineProps({
  place: Object,
});
</script>