<template lang="pug">
.catalog
  .wrapper.wrapper_h-btw.wrapper_v-ctr(v-if="filters")
    h3.title_up-middle.mb-40 Популярные базы отдыха

    .catalog__filter.wrapper.wrapper_v-ctr
      p.controls_middle.opacity-50 Сортировать

      .catalog__sort
        p.controls_middle.catalog__sort-item по удаленности

      p.controls_middle.opacity-50 Всего 220 092 объекта

  .catalog__inner
    CardPlace(v-for="(place, i) in places", :key="i", :place="place")
</template>


<script setup>
import { defineProps } from 'vue'
defineProps({
  filters: Boolean
})
import { reactive } from "@vue/reactivity";
import CardPlace from "@/layout/CardPlace.vue";
const places = reactive([
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "15 000",
    new: true,
  },
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "15 000",
    new: false,
  },
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "15 000",
    new: true,
  },
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "10 000",
    new: false,
  },
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "10 000",
    new: false,
  },
]);
</script>
