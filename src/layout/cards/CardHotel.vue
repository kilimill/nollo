<template>
  <div class="card">
    <div class="card__alert alert alert_success" v-if="hotel.is_new">
      <p class="controls_middle">NEW</p>
    </div>

    <div
      class="card__alert alert"
      v-if="hotel.status_id"
      :class="'alert_' + statuses.typeHotelStatus[hotel.status_id].type"
    >
      <p class="controls_middle">
        {{ statuses.typeHotelStatus[hotel.status_id].name }}
      </p>
    </div>

    <div class="card__controls" v-if="useUserStore().isUserAuth">
      <button
        class="card__control"
        v-if="!hotel.status_id"
        :class="{ selected: hotel.is_favorite }"
        @click.prevent="toggleApi(favoritesUrl, hotel)"
      >
        <HeartIcon class="icon icon--def" />
      </button>

      <button class="card__control" v-else @click.prevent="replace('UpsertHotel')">
        <EditIcon class="icon icon--def" />
      </button>
    </div>
    <div class="card__picture" @click.prevent="replace('Hotel')">
      <div class="card__picture-draft" v-if="!hotel.preview"></div>
      <img class="card__img" v-else :src="hotel.preview" alt="Фото отеля" />
    </div>

    <div class="card__box">
      <h2 class="card__title controls_bigger mb-8" @click.prevent="replace('Hotel')">
        {{ hotel.name }}
      </h2>
      <p class="text_middle mb-24 opacity-50">{{ hotel.city }}</p>

      <p class="controls_bigger" v-if="hotel.min_price">
        от {{ hotel.min_price.toLocaleString("ru-RU") }} ₽
        <span class="text_middle opacity-50">/сутки</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/userStore";
import useToggleApi from "@/composables/useToggleApi";
import { statuses } from "@/helpers/statuses";
import { HeartIcon, EditIcon } from "@/layout/icon/index";

const router = useRouter();
const props = defineProps({
  hotel: Object,
});

const favoritesUrl = `favorites/hotels/${props.hotel.id}`;
const { toggleApi } = useToggleApi("is_favorite");

const replace = (componentName) => {
  if (componentName == "Hotel" && props.hotel.status_id !== 3 && props.hotel.status_id)
    return;
  router.push({
    name: componentName,
    params: { id: props.hotel.id },
  });
};
</script>
