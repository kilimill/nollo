<template>
  <div class="tags">
    <ul class="tags__list">
      <li class="tags__item" v-for="(filter, i) in filters" :key="i">
        <input
          class="tags__input"
          type="checkbox"
          :id="filter.id"
          :value="filter.id"
          v-model="searchHotels.tags"
        />
        <label class="tags__label" :for="filter.id">
          <span class="icon icon--def" v-html="filter.icon"></span>
          <span class="controls_small ml-8">{{ filter.name }}</span>
        </label>
      </li>

      <li class="tags__item">
        <div class="wrapper wrapper_v-ctr" @click="open = !open">
          <ArrowPrevIcon class="icon icon--def" v-if="open" />
          <EctIcon class="icon icon--def" v-else />
          <span class="controls_small ml-8" v-if="open">Скрыть</span>
          <span class="controls_small ml-8" v-else>Ещё</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { searchHotels } from "@/composables/useSearchHotels";
import { useDefaultStore } from "@/stores/defaultStore";
import { ArrowPrevIcon, EctIcon } from "@/layout/icon/index";

const defaultStore = useDefaultStore();

const open = ref(false);
const filters = computed(() =>
  open.value ? defaultStore.tags : defaultStore.tags.slice(0, 6)
);
</script>
