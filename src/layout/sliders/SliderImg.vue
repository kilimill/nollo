<template>
  <div class="slider">
    <div class="slider__bg" @click="closePopupSlider"></div>
    <button class="slider__close" @click="closePopupSlider">
      <CloseIcon class="icon icon--def" />
    </button>
    <div class="slider__content">
      <div class="slider__show">
        <div
          class="slider__show-item"
          v-for="(image, id) in images"
          :key="id"
          :class="`slider__show-item--${id}`"
        >
          <button class="slider__resize" @click="openPopupSlider">
            <ResizeIcon class="icon icon--def" />
          </button>

          <img class="slider__show-img" :src="image.url" alt="Фото отеля" />
        </div>
      </div>
      <div class="slider__swiper swiper-container hidden" ref="calendarSliderRef">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide slider__slide"
            v-for="(item, i) in images"
            :key="i"
            @click="switchBackground(i)"
          >
            <img class="slider__img" :src="item.url" alt="Фото отеля" />
          </div>
        </div>
        <button class="swiper-button-prev mobile-hide"></button>
        <button class="swiper-button-next mobile-hide"></button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import Swiper, { Navigation } from "swiper";
import { CloseIcon, ResizeIcon } from "@/layout/icon/index";
import { useCommonStore } from "@/stores/commonStore";
import "swiper/css";
import "swiper/css/navigation";

const props = defineProps({
  images: Array,
});
const commonStore = useCommonStore();
let swaper;
const calendarSliderRef = ref(null);
const options = {
  slidesPerView: 4,
  mousewheel: true,
  spaceBetween: 32,
  direction: "horizontal",
  modules: [Navigation],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

const optionsMob = {
  slidesPerView: 2.5,
  mousewheel: false,
  spaceBetween: 16,
  direction: "horizontal",
};

const closePopupSlider = () => {
  document.body.classList.remove("open");
  calendarSliderRef.value.classList.add("hidden");

  if (commonStore.mobile) {
    swaper.params.slidesPerView = 2.5;
  } else {
    swaper.params.direction = "horizontal";
  }
  swaper.update();
};

const openPopupSlider = () => {
  document.body.classList.add("open");
  calendarSliderRef.value.classList.remove("hidden");

  if (commonStore.mobile) {
    swaper.params.slidesPerView = 1;
    // swaper.params.spaceBetween = 0;
  } else {
    swaper.params.direction = "vertical";
  }
  swaper.update();
};

const closePopupForKey = (e) => {
  if (e.keyCode === 27 && document.body.classList.contains("open")) {
    closePopupSlider();
  }
};

const switchBackground = (id) => {
  document.querySelectorAll(`.slider__show-item`).forEach((item) => {
    item.classList.remove("show");
  });
  document.querySelector(`.slider__show-item--${id}`).classList.add("show");
};

onMounted(() => {
  if (!commonStore.mobile) {
    window.addEventListener("keydown", closePopupForKey);
    swaper = new Swiper(calendarSliderRef.value, options);
  } else {
    swaper = new Swiper(calendarSliderRef.value, optionsMob);
  }
  let indexImgPreview = props.images.findIndex((item) => item.is_preview === true);
  switchBackground(indexImgPreview !== -1 ? indexImgPreview : 0);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", closePopupForKey);
});
</script>
