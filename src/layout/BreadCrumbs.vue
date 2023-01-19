<template>
  <div class="bread-crumbs">
    <ul class="bread-crumbs__list">
      <li class="bread-crumbs__item">
        <router-link class="bread-crumbs__link controls_small" to="/">
          Главная
        </router-link>
      </li>
      <li class="bread-crumbs__item" v-for="(crumb, i) in crumbs" :key="i">
        <router-link
          class="bread-crumbs__link controls_small"
          :to="crumb.to"
          :disables="crumbs.length - 1 == i"
        >
          {{ crumb.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  crumbs: Array,
});
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars.styl';
.bread-crumbs {
  margin-bottom: 32px;

  &__item {
    display: inline-block;
    position: relative;
    margin-right: 4px;

    &::after {
      content: '/';
      color: $black;
      font-weight: 500;
      font-size: 12px;
      line-height: 12px;
      margin: 0 4px;
    }

    &:last-child {
      opacity: 0.3;

      &::after {
        display: none;
      }
    }
  }
}
</style>
