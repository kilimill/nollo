<template lang="pug">
.slider
  .slider__bg(@click="closePopupSlider")
  button.slider__close(@click="closePopupSlider")
    CloseIcon.icon
  .slider__content
    .slider__show
      .slider__show-item(
        v-for="(image, i) of images",
        :key="i",
        :class="`slider__show-item--${i}`"
      )
        button.slider__resize(@click="openPopupSlider")
          ResizeIcon.icon

        img.slider__show-img(:src="image")

    .slider__swiper.swiper-container(ref="calendarSliderRef")
      .swiper-wrapper
        .swiper-slide.slider__slide(
          v-for="(item, i) of images",
          @click="switchBackground(i)",
          :key="i"
        )
          img.slider__img(:src="item")
      button.swiper-button-prev
      button.swiper-button-next
</template>

<script setup>
import { defineProps, onMounted, ref, reactive } from "vue";
import Swiper, { Navigation } from "swiper";
import { CloseIcon, ResizeIcon } from '@/layout/icon/index'
import "swiper/css";
import "swiper/css/navigation";
defineProps({
  images: Array,
});
let swaper;
const calendarSliderRef = ref(null);
const options = reactive({
  slidesPerView: 4,
  mousewheel: true,
  spaceBetween: 32,
  direction: "horizontal",
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const closePopupSlider = () => {
    document.body.classList.remove('open')
    swaper.params.direction = "horizontal";
    // swaper.update()
};

const openPopupSlider = () => {
  document.body.classList.add('open')
  swaper.params.direction = "vertical";
  // swaper.update()
}

const closePopupForKey = (e) => {
  if(e.keyCode === 27 && document.body.classList.contains('open')) {
    closePopupSlider()
  }
}

const switchBackground = (id) => {
  document.querySelectorAll(`.slider__show-item`).forEach((item) => {
    item.classList.remove("show");
  });
  document.querySelector(`.slider__show-item--${id}`).classList.add("show");
};

onMounted(() => {
  window.addEventListener('keydown', closePopupForKey)
  console.log()
  swaper = new Swiper(document.querySelector(".slider__swiper"), options);
  switchBackground(0);
});
</script>