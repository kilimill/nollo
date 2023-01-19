<template>
  <section class="profile-component">
    <div class="profile-component__inner" v-if="!isBusy">
      <ul class="message-list" v-if="bookings?.length">
        <MessageList
          class="booking"
          v-for="(hotel, i) in bookings"
          :hotel="hotel"
          :key="i"
          booking
        />
      </ul>
      <NotFound v-else page-info="booking" />
    </div>
    <Loader v-else />
  </section>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { postDefParams } from "@/composables/useDefFetch.js";
import NotFound from "@/components/NotFound.vue";
import MessageList from "@/layout/MessageList.vue";
import Loader from "@/layout/Loader.vue";

const bookings = ref();
const isBusy = ref(false);

const getMyBookings = () => {
  isBusy.value = true;
  postDefParams("bookings", { page: 1, per_page: 9 }, bookings).then(() => {
    isBusy.value = false;
  });
};

onMounted(() => {
  getMyBookings();
});
</script>
