<template>
  <section class="suggestions">
    <div class="suggestions__head">
      <h4 class="title_up-middle mb-40">{{ title }}</h4>
    </div>

    <SliderCards type="hotel" :name="name" :hotels="hotels" />
  </section>
</template>

<script setup>
import SliderCards from "@/layout/sliders/SliderCards.vue";

defineProps({
  title: String,
  name: {
    type: String,
    required: true,
  },
  hotels: Array,
});
</script>
