<template>
  <div
    class="map__content"
    :class="{ hidden: !full }"
    v-if="userStore.isGotLocation && coords.length"
  >
    <div class="map">
      <yandexMap
        :controls="['zoomControl']"
        :coords="coords"
        :zoom="10"
        :cluster-options="clusterOptions"
        :options="optionsMap"
      >
        <ymapMarker
          v-for="(item, i) in hotels"
          :key="i"
          :marker-id="i"
          :coords="item.coordinates"
          cluster-name="1"
          :balloon-template="balloonTemplate(item)"
          :balloon-options="{
            balloonOffset: '[100, -34]',
          }"
          @click="setCoords(item.coordinates)"
          :options="markerOptions"
        >
        </ymapMarker>
      </yandexMap>
    </div>
    <button class="map__btn btn_uncover" @click.prevent="toggleFullMap">
      <span class="controls_middle c-green" v-if="!full">Развернуть</span>
      <span class="controls_middle c-green" v-else> Свернуть </span>
    </button>
  </div>
</template>

<script setup>
import { watch, onMounted, ref } from "vue";
import { yandexMap, ymapMarker } from "vue-yandex-maps";
// import Swiper, { Navigation } from "swiper";
import { useUserStore } from "@/stores/userStore";
import useMap from "@/composables/useMap.js";
import { FRONT_URL } from "@/helpers/constants";
// import { PinIcon, ClusterIcon } from "@/layout/icon/index.js";
// import "swiper/css";

defineProps({
  hotels: {
    type: Array,
    default: null,
  },
});

const userStore = useUserStore();
const { optionsMap, clusterOptions, markerOptions } = useMap();
const coords = ref([]);

const balloonTemplate = (hotel) => {
  return `
      <div class='card card_map'>
        <div class="slider__swiper balloon__slider">
          <div class="swiper-wrapper">
            <img class='card__img swiper-slide' src='${hotel.preview}' />
          </div>
        </div>
        <a href='${FRONT_URL}/hotel/${hotel.id}' target="_blank">
          <div class='card__box'>
            <h3 class='title_small mb-8'>Коттедж "Ультрасовременный домик"</h3>
            <p class='text_small mb-12 opacity-50'>${hotel.city}</p>

            <p class='controls_middle'>
              от ${hotel.min_price.toLocaleString(
                "ru-RU"
              )} ₽ <span class='controls_small opacity-50'>/сутки</span>
            </p>

          </div>
        </a>
      </div>
  `;
};

const setCoordsBySearch = () => {
  if (userStore.isGotLocation) coords.value = Array.from(userStore.coordinates);
};

const full = ref(false);
const toggleFullMap = () => {
  full.value = !full.value;
};

watch(
  () => userStore.isGotLocation,
  () => setCoordsBySearch()
);

onMounted(() => {
  setCoordsBySearch();
});

const setCoords = (coord) => {
  // let options = {
  //   slidesPerView: 1,
  //   mousewheel: true,
  //   modules: [Navigation],
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // };
  setTimeout(() => {
    // new Swiper(document.querySelector(".balloon__slider"), options);
    coords.value = coord;
  }, 100);
};
</script>
