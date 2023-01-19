<template>
  <div class="accordion">
    <h2 class="title_up-middle mb-24" v-if="title">{{ title }}</h2>
    <div
      class="accordion__item"
      v-for="(item, i) in data"
      :key="i"
      @click="accordionToggle($event)"
    >
      <div class="accordion__top wrapper wrapper_h-btw">
        <h3 class="controls_bigger">{{ item.title }}</h3>

        <div class="accordion__btns">
          <button class="accordion__btn"></button>
        </div>
      </div>

      <div class="accordion__bottom" v-if="isHtml" v-html="item.value"></div>

      <div class="accordion__bottom" v-else>
        <p class="text_middle">{{ item.value }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: Object,
  title: String,
  isHtml: Boolean,
});

const accordionToggle = (e) => {
  const currentItem = e.target;

  if (currentItem.classList[0] !== "accordion__item") return;

  const items = document.querySelectorAll(".accordion__item");
  items.forEach((element) => {
    if (element !== currentItem) {
      element.classList.remove("open");
    }
  });

  if (!currentItem.classList.contains("open")) {
    currentItem.classList.add("open");
  } else {
    currentItem.classList.remove("open");
  }
};
</script>
