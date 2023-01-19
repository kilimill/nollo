<template>
  <div class="catalog">
    <div class="catalog__wrapper mb-40">
      <h3 class="title_up-middle">{{ title ? title : "Каталог" }}</h3>

      <div class="catalog__filter wrapper">
        <p class="controls_middle opacity-50">Сортировать</p>

        <div class="catalog__sort drop-down__parent" ref="dropDown">
          <button class="catalog__sort-btn" @click="toggleDropDown">
            <span class="controls_middle">{{ currentFilter.text }}</span>
          </button>

          <ul class="drop-down">
            <li class="drop-down__item" v-for="(choice, i) in sortArr" :key="i">
              <button
                class="drop-down__btn"
                :class="{ active: choice.id === currentFilter.id }"
                @click="changeFilter(i)"
                :disabled="choice.id === currentFilter.id"
              >
                <span class="drop-down__text">{{ choice.text }}</span>
              </button>
            </li>
          </ul>
        </div>
        <p class="catalog__filter-total controls_middle opacity-50">
          Всего {{ count }} объекта
        </p>
      </div>
    </div>
    <div class="grid grid_3" v-if="!isBusy">
      <CardHotel v-for="(hotel, i) in hotels" :key="i" :hotel="hotel" />
    </div>
  </div>
</template>

<script setup>
import { computed, inject, ref } from "vue";
import { searchHotels, sortArr } from "@/composables/useSearchHotels.js";
import CardHotel from "@/layout/cards/CardHotel.vue";

defineProps({
  title: String,
  count: Number,
});

const { getHotels, hotels } = inject("search");

const isBusy = ref(false);
const dropDown = ref(null);
const currentFilter = computed(() =>
  sortArr.find((item) => item.name === searchHotels.sort_field)
);

const changeFilter = (i) => {
  isBusy.value = true;
  searchHotels.sort_field = sortArr[i].name;

  if (searchHotels.sort_field == "created_at") {
    searchHotels.sort_direction = "desc";
  } else {
    searchHotels.sort_direction = "asc";
  }

  getHotels()
    .then((data) => (hotels.value = data.data))
    .finally(() => {
      isBusy.value = false;
    });

  if (dropDown.value) {
    toggleDropDown();
  }
};

const toggleDropDown = () => {
  if (dropDown.value.classList.contains("open")) {
    dropDown.value.classList.remove("open");
  } else {
    dropDown.value.classList.add("open");
  }
};
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars.styl';
.catalog {
  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    @media $mobile {
      display: block;
    }
  }

  &__filter {
    align-items: flex-end;
    margin-bottom: 4px;

    @media $mobile {
      flex-wrap: wrap;
      margin-top: 16px;
    }

    &-total {
      @media $mobile {
        width: 100%;
        order: -1;
        margin-bottom: 24px;
      }
    }
  }

  &__sort {
    margin: 0 32px 0 8px;

    &-btn {
      display: flex;
      align-items: center;

      &::after {
        content: '';
        display: inline-block;
        width: 10px;
        height: 7px;
        margin-left: 8px;
        transition: transform 0.3s;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23222222' stroke-width='1.5'/%3E%3C/svg%3E%0A");
      }
    }

    &.open {
      .catalog__sort-btn::after {
        transform: rotate(180deg);
      }
    }
  }

  .loader {
    margin-top: 56px;
  }
}
</style>
