<template>
  <section class="profile-component">
    <div class="profile-component__inner" v-if="!isBusy">
      <div class="grid grid_2" v-if="hotels?.length">
        <CardHotel v-for="(hotel, i) in hotels" :key="i" :hotel="hotel" />
      </div>
      <NotFound v-else page-info="favorites" />
    </div>
    <Loader v-else />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { postDefParams } from "@/composables/useDefFetch.js";
import Loader from "@/layout/Loader.vue";
import CardHotel from "@/layout/cards/CardHotel.vue";
import NotFound from "@/components/NotFound.vue";

const hotels = ref();
const isBusy = ref(false);

const getMyFavorites = () => {
  isBusy.value = true;
  postDefParams("favorites", { page: 1, per_page: 9 }, hotels).then(() => {
    isBusy.value = false;
  });
};

onMounted(() => {
  getMyFavorites();
});
</script>
