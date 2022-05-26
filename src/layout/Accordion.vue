<template lang="pug">
.accordion 
  h4.title_middle.mb-32 Условия проживания

  .accordion__item(v-for="(condition, i) in conditions", :key="i")
    .accordion__top.wrapper.wrapper_h-btw
      h3.controls_bigger {{ condition.title }}

      .accordion__btns
        button.accordion__btn(@click="accordionToggle(i)")

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
const accordionToggle = (i) => {
  const items = document.querySelectorAll(".accordion__item");
  items.forEach((element, index) => {
    if (index !== i) {
      element.classList.remove("open");
    }
  });

  if (!items[i].classList.contains("open")) {
    items[i].classList.add("open");
  } else {
    items[i].classList.remove("open");
  }
};
</script>