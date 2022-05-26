<template lang="pug">
section.suggestions
  h4.title_up-middle.mb-40 {{ title }}

  swiper.suggestions__slider(
    :options="swiperOption",
    :space-between="32",
    :slides-per-view="3"
  )
    swiper-slide.suggestions__slide(
      v-for="(item, i) of places",
      @click="switchBackground(i)",
      :key="i"
    )
      CardPlace(:place="item")
</template>

<script>
import CardPlace from "@/layout/CardPlace";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";

export default {
  props: {
    places: Array,
    title: String,
  },
  components: {
    Swiper,
    SwiperSlide,
    CardPlace,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 750,
        slidesPerView: 4,
        spaceBetween: 32,
      },
    };
  },
};
</script>
