<template lang="pug">
section.not-found
  .not-found__content
    img.not-found__img(:src="getObject().img")
    p.text_middle {{ getObject().text }}

    router-link.btn.btn_green.btn_link(:to="{name: getObject().href}", v-if="getObject().href") Добавить турбазу
</template>

<script setup>
import { reactive } from "@vue/reactivity";
const props = defineProps({
  pageInfo: String,
});
const notFoundeds = reactive({
  favorites: {
    img: "./404/favorites.jpg",
    text: "Отмечайте понравившиеся отели сердечком, так вы сможете быстрее находить их в списке.",
    href: undefined,
  },
  places: {
    img: "./404/favorites.jpg",
    text: "Вы еще не добавили ни одного объекта.",
    href: "Added",
  },
  booking: {
    img: "./404/favorites.jpg",
    text: "Когда вам отправят запрос на проживание, он появится в этом разделе",
    href: undefined,
  },
});

const getObject = () => {
  console.log(props.pageInfo);
  console.log(notFoundeds[props.pageInfo]);
  return notFoundeds[props.pageInfo];
};
</script>

<style scoped lang='stylus'>
.not-found {
  &__content {
    max-width: 416px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  &__img {
    width: 100%;
    height: 216px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 24px;
  }

  .btn {
    margin-top: 24px;
  }
}
</style>