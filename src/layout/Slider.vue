<template lang="pug">
.slider
  .slider__show(
    v-for="(image, i) of images",
    :key="i",
    :class="`slider__show--${i}`"
  )
    img.slider__show-img(:src="image")

  swiper.slider__swiper(
    :options="swiperOption",
    
    :space-between="10"
    :slides-per-view="4"
    ref="calendarSliderRef",
  )
    swiper-slide.slider__slide(
      v-for="(item, i) of images",
      @click="switchBackground(i)",
      :key="i"
    )
      img.slider__img(:src="item")
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/thumbs";
// import "@/assets/styles/mixins.styl";
// more module style...

export default {
  props: {
    images: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        speed: 750,
        slidesPerView: 4,
        // slidesPerView: "auto",
        spaceBetween: 32,
        // preventClicks: false,
        // allowTouchMove: true,
      },
    };
  },
  methods: {
    switchBackground(id) {
      document.querySelectorAll(`.slider__show`).forEach((item) => {
        item.classList.remove("show");
      });
      document.querySelector(`.slider__show--${id}`).classList.add("show");
    },
  },
  mounted() {
    this.switchBackground(0);
  },
};
// import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"
</script>
