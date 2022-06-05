<template lang="pug">
secttion.popular
  .container
    h1.title_up-middle.mb-32 Популярные места

    FilterBtns.mb-40

    .popular__content
      router-link.popular__item(
        to="/popular-card",
        style="background-image: url('http://localhost:8080/img/slide.457f1018.jpg')"
      )
        .popular__item-info
          h2.controls_bigger.mb-8 Пироговское водохранилище
          p.text_middle.opacity-70 Тверская область
      router-link.popular__item(
        to="/popular-card",
        style="background-image: url('http://localhost:8080/img/slide.457f1018.jpg')"
      )
        .popular__item-info
          h2.controls_bigger.mb-8 Пироговское водохранилище
          p.text_middle.opacity-70 Тверская область
</template>

<script setup>
import FilterBtns from "@/layout/FilterBtns";
</script>

<style lang="stylus" scoped>
@import '@/assets/styles/vars.styl';

.popular {
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 32px;
  }

  &__item {
    height: 288px;
    padding: 24px;
    border-radius: var(--radius-def);
    overflow: hidden;
  }
}
</style>