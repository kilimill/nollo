<template>
  <section class="popular">
    <div class="container">
      <h1 class="title_up-middle mb-32">Популярные места</h1>

      <div class="grid grid_3">
        <CardPopular />
        <CardPopular />
        <CardPopular />
        <CardPopular />
        <CardPopular />
        <CardPopular />
      </div>
    </div>
  </section>
</template>

<script setup>
import CardPopular from "@/layout/cards/CardPopular.vue";
</script>
