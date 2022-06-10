<template lang="pug">
aside.aside
  nav.aside__nav
    ul.aside__list
      li.aside__list-item(
        v-for="item in list",
        :key="item.id",
        :class="{ active: activeIndex === item.id }"
      )
        button.aside__link.wrapper.wrapper_v-ctr(
          @click="$emit('findNextComponent', item.name)"
        )
          component.icon(:is="item.icon", v-if="item.icon")
          span.controls_middle {{ item.title }}
</template>
<script setup>
defineProps({
  list: Array,
  activeIndex: Number,
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
      opacity .7
      position: relative;
      margin-top: 12px;
      overflow: hidden;
      background-color: transparent;
      transition: background-color 0.3s, opacity .3s;
      border-radius: var(--radius-def);

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

      &:hover, &.active {
        background-color: #FFFFFF;
        opacity 1

        &::before {
          opacity: 1;
        }
      }
    }
  }

  &__link {
    width: 100%;
    height var(--heigth-elems)
    padding: 0 16px 0 24px;

    .icon {
      margin-right: 16px;
    }
  }
}

.main.light {
  .aside__list-item {
    &:hover, &.active {
      opacity 1
      background-color: $gray;

      &::before {
        opacity: 1;
      }
    }
  }
}
</style>