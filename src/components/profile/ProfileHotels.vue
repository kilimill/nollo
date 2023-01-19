<template>
  <section class="profile-component">
    <div class="profile-component__inner" v-if="!isBusy">
      <!-- TODO: .wefwef - лишняя обертка, чтобы тестово вставить ссылку -->
      <div class="wefwef" v-if="hotels?.length">
        <div class="grid grid_2 mb-32">
          <CardHotel v-for="(hotel, i) in hotels" :key="i" :hotel="hotel" />
        </div>
        <router-link class="btn btn_green btn_link" :to="{ name: 'CreateHotel' }"
          >Добавить турбазу</router-link
        >
      </div>
      <NotFound v-else page-info="myHotels" />
    </div>
    <Loader v-else />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { postDefParams } from "@/composables/useDefFetch.js";
import CardHotel from "@/layout/cards/CardHotel.vue";
import Loader from "@/layout/Loader.vue";
import NotFound from "@/components/NotFound.vue";

const hotels = ref();
const isBusy = ref(false);

const getMyHotels = () => {
  isBusy.value = true;
  postDefParams("owner/hotels", { page: 1, per_page: 9 }, hotels).then(() => {
    isBusy.value = false;
  });
};

onMounted(() => {
  getMyHotels();
});
</script>
