<template lang="pug">
.filter
  ul.filter__list
    li.filter__list-item(v-for="(filter, i) in filtersAmountShow", :key="i")
      button.filter__item
        component(:is="filter.icon")
        span.controls__small {{ filter.title }}

    li.filter__list-item
      button.filter__item(@click.prevent="toggleOpenedFilters")
        ArrowPrevIcon.filter__icon-hide(v-if="openedFilters")
        EctIcon.icon(v-else)
        span.controls__small(v-if="openedFilters") Скрыть
        span.controls__small(v-else) Ещё
</template>

<script setup>
import { ref, computed } from "vue";
import {
  ActiveIcon,
  Barrelcon,
  BeachIcon,
  CampIcon,
  CorpIcon,
  EctIcon,
  FishingIcon,
  HikeIcon,
  HuntIcon,
  PartyIcon,
  UnderwaterIcon,
  HeartIcon,
  ArrowPrevIcon,
} from "@/layout/icon/index";

const openedFilters = ref(false);

const filtersAmountShow = computed(() => {
  return openedFilters.value ? filters : filters.slice(0, 6);
});

const toggleOpenedFilters = () => {
  openedFilters.value = !openedFilters.value;
};

const filters = [
  {
    title: "Активный отдых",
    icon: ActiveIcon,
  },
  {
    title: "Рыбалка",
    icon: HeartIcon,
  },
  {
    title: "Рыбалка",
    icon: FishingIcon,
  },
  {
    title: "Охота",
    icon: HuntIcon,
  },
  {
    title: "На берегу",
    icon: BeachIcon,
  },
  {
    title: "Баня и сауна",
    icon: Barrelcon,
  },
  {
    title: "Праздники",
    icon: PartyIcon,
  },
  {
    title: "Корпоративный отдых",
    icon: CorpIcon,
  },
  {
    title: "Подводная охота",
    icon: UnderwaterIcon,
  },
  {
    title: "Кемпинг",
    icon: CampIcon,
  },
  {
    title: "Сплав/Поход",
    icon: HikeIcon,
  },
];
</script>

<style lang="stylus" scoped>
.filter {
  &__item {
    display: flex;
    align-items: center;
    padding: 8px 16px;
    border-radius: 24px;
    background-color: #fff;

    &:first-child {
      margin-left: 0;
    }
  }

  &__icon-hide {
    width 24px
    height 24px
  }

  &__list {
    margin-right: -16px;
    margin-bottom: -16px;

    &-item {
      display: inline-block;
      margin-right: 16px;
      margin-bottom: 16px;
    }
  }

  .controls__small {
    margin-left: 8px;
  }
}
</style>