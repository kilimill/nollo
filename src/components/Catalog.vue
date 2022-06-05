<template lang="pug">
.catalog
  .wrapper.wrapper_h-btw.mb-40 
    h3.title_up-middle Популярные базы отдыха

    .catalog__filter.wrapper
      p.controls_middle.opacity-50 Сортировать

      .catalog__sort.drop-down__parent(ref="dropDown")
        button.catalog__sort-btn(@click="toggleDropDown") 
          span.controls_middle по удаленности

        ul.drop-down
          li.drop-down__item
            button.drop-down__btn
              span.drop-down__text Профиль
          li.drop-down__item
            button.drop-down__btn
              span.drop-down__text Выйти

      p.controls_middle.opacity-50 Всего 220 092 объекта

      

  .catalog__inner
    CardPlace(v-for="(place, i) in places", :key="i", :place="place")

  Loader
</template>


<script setup>
import { defineProps } from "vue";
import { reactive, ref } from "@vue/reactivity";
import CardPlace from "@/layout/CardPlace.vue";
import Loader from "@/layout/Loader.vue";
defineProps({
  filters: Boolean,
});

const dropDown = ref(null);
const toggleDropDown = () => {
  if(dropDown.value.classList.contains('open')) {
    dropDown.value.classList.remove('open')
  } else {
    dropDown.value.classList.add('open')
  }
};
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

<style scoped lang='stylus'>
@import '@/assets/styles/mixins.styl'
.catalog
  &__header 
    display flex
    justify-content space-between
    align-items center

  &__filter
    align-items: flex-end;
    margin-bottom 4px
    
  &__inner
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
    margin-bottom -32px

  &__sort
    &-btn
      display flex
      align-items center
      margin 0 32px 0 8px

      &::after
        content ''
        display: inline-block
        width 10px
        height 7px
        margin-left 8px
        transition transform .3s
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23222222' stroke-width='1.5'/%3E%3C/svg%3E%0A");

    &.open
      .catalog__sort-btn::after
        transform: rotate(180deg)

  .loader
    margin-top 56px
</style>