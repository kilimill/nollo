<template>
  <div class="suggestions__content" :class="suggestionSlider">
    <div class="suggestions__slider slider__swiper">
      <div class="swiper-wrapper">
        <div class="suggestions__slide swiper-slide" v-for="(item, i) of hotels" :key="i">
          <component :is="componentsList[props.type]" :hotel="item" />
        </div>
      </div>
    </div>

    <button class="swiper-button-prev mobile-hide"></button>
    <button class="swiper-button-next mobile-hide"></button>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useCommonStore } from "@/stores/commonStore";
import CardHotel from "@/layout/cards/CardHotel.vue";
import CardPopular from "@/layout/cards/CardPopular.vue";
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const props = defineProps({
  type: String,
  name: {
    type: String,
    required: true,
  },
  hotels: Array,
});

const componentsList = {
  hotel: CardHotel,
  popular: CardPopular,
};

const suggestionSlider = ref(props.name);

const options = {
  slidesPerView: 3,
  mousewheel: true,
  spaceBetween: 32,
  direction: "horizontal",
  modules: [Navigation],
  navigation: {
    nextEl: `.${suggestionSlider.value} .swiper-button-next`,
    prevEl: `.${suggestionSlider.value} .swiper-button-prev`,
  },
};

const optionsMob = {
  slidesPerView: 1.5,
  mousewheel: true,
  spaceBetween: 24,
  direction: "horizontal",
};

onMounted(() => {
  if (useCommonStore().mobile) {
    new Swiper(
      document.querySelector(`.${suggestionSlider.value} .suggestions__slider`),
      optionsMob
    );
  } else {
    new Swiper(
      document.querySelector(`.${suggestionSlider.value} .suggestions__slider`),
      options
    );
  }
});
</script>
