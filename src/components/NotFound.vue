<template>
  <section class="not-found">
    <div class="not-found__content">
      <img class="not-found__img" :src="currentImg" alt="Картинка 'Не найдено'" />
      <p class="text_middle">{{ currentPage.text }}</p>

      <router-link
        class="btn btn_green btn_link"
        v-if="currentPage.href"
        :to="{ name: currentPage.href }"
      >
        Добавить турбазу
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  pageInfo: String,
});

const notFoundList = {
  favorites: {
    img: "favorites",
    text:
      "Отмечайте понравившиеся отели сердечком, так вы сможете быстрее находить их в списке.",
    href: undefined,
  },
  myHotels: {
    img: "my-hotels",
    text: "Вы еще не добавили ни одного объекта.",
    href: "CreateHotel",
  },
  booking: {
    img: "favorites",
    text: "Когда вам отправят запрос на проживание, он появится в этом разделе",
    href: undefined,
  },
  empty: {
    img: "empty",
    text: "Ничего не найдено Попробуйте изменить параметры поиска",
    href: undefined,
  },
};

const currentPage = ref(notFoundList[props.pageInfo]);
const currentImg = ref(`/images/404/${notFoundList[props.pageInfo].img}.webp`);
</script>

<style scoped lang="stylus">
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
    object-fit: contain;
    object-position: center;
    margin-bottom: 24px;
  }

  .btn {
    margin-top: 24px;
  }
}
</style>
