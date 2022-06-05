<template lang="pug">
.accordion 
  .accordion__item(v-for="(condition, i) in conditions", :key="i" @click="accordionToggle($event)")
    .accordion__item-inner
      .accordion__top.wrapper.wrapper_h-btw
        h3.controls_bigger {{ condition.title }}

        .accordion__btns
          button.accordion__btn

      .accordion__bottom
        p.text__middle {{ condition.description }}
</template>

<script setup>
import { reactive } from "vue";
const conditions = reactive([
  {
    title: "Неявка гостя",
    description:
      "Незаездом считается прибытие гостя после 00:00 часов следующего дня. Штраф за незаезд — % от суммы предоплаты.",
  },
  {
    title: "Неявка гостя",
    description:
      "Незаездом считается прибытие гостя после 00:00 часов следующего дня. Штраф за незаезд — % от суммы предоплаты.",
  },
  {
    title: "Неявка гостя",
    description:
      "Незаездом считается прибытие гостя после 00:00 часов следующего дня. Штраф за незаезд — % от суммы предоплаты.",
  },
  {
    title: "Неявка гостя",
    description:
      "Незаездом считается прибытие гостя после 00:00 часов следующего дня. Штраф за незаезд — % от суммы предоплаты.",
  },
]);
const accordionToggle = (e) => {
  const currentItem = e.target
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