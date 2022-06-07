<template lang="pug">
aside.aside
  nav.aside__nav
    ul.aside__list
      li.aside__list-item(v-for="(item, i) in asideList", :key="i")
        a.aside__link.wrapper(@click="$emit('my-event', item.link)")
          //- ProfileIcon.icon
          p.controls_middle {{ item.name }}
</template>

<script setup>
// import { ProfileIcon } from "@/layout/icon/index";
import { defineProps } from "vue";
defineProps({
  asideList: Array,
});
</script>

<style scoped lang="stylus">
@import '@/assets/styles/vars.styl';

.aside {
  max-width: 416px;
  width: 100%;
  margin-right: var(--offset-up-mid);

  &__list {
    &-item {
      position: relative;
      border-radius: var(--radius-def);
      padding: 16px 16px 16px 24px;
      margin-top: 12px;
      overflow: hidden;
      background-color: transparent;
      transition: background-color 0.3s;

      &:first-child {
        margin-top: 0;
      }

      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 8px;
        height: 100%;
        background-color: $green;
        opacity: 0;
        transition: opacity 0.3s;
      }

      &:hover {
        background-color: #fff;

        &::before {
          opacity: 1;
        }
      }
    }
  }

  &__link {
    .icon {
      margin-right: 16px;
    }
  }
}
</style>