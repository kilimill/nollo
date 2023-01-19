<template>
  <li class="message-list__item">
    <div class="notify-count">
      <span class="controls_small">1</span>
    </div>
    <router-link :to="nextLink">
      <img class="message-list__img" :src="hotel.preview" alt="Фото отеля" />
    </router-link>

    <div class="message-list__box">
      <div class="message-list__content">
        <div class="message-list__header wrapper wrapper_h-btw wrapper_v-ctr">
          <div
            class="alert"
            v-if="booking"
            :class="'alert_' + statuses.typeBookingStatus[hotel.status].type"
          >
            <p class="controls_middle">
              {{ statuses.typeBookingStatus[hotel.status].name }}
            </p>
          </div>

          <!-- <div class="wrapper wrapper_v-ctr">
            <img class="message-list__avatr" src="@/assets/images/avatar.jpg" />
            <span class="controls_middle message-list__name" />
          </div> -->

          <button class="message-list__close" v-if="!booking">
            <CloseIcon class="icon" />
          </button>
        </div>
        <router-link :to="nextLink">
          <h3 class="controls_bigger mb-8">{{ hotel.hotel }}</h3>
        </router-link>
        <!-- <router-link :to="'/reservation/' + hotel.id">
          <ul class="list mb-24" v-for="(room, i) in hotel.rooms" :key="i">
            <li class="text_middle opacity-50">
              <p class="text_middle mb-24 opacity-50">Номер "Стандарт"</p>
            </li>
          </ul>
        </router-link> -->
      </div>
      <div class="message-list__bottom">
        <div class="message-list__details wrapper">
          <div class="message-list__info opacity-70">
            <CalendarIcon class="icon icon--def" />
            <span class="controls_middle ml-12"
              >{{ moment(hotel.check_in).format("DD MMM") }}
            </span>
            <span class="controls_middle">
              – {{ moment(hotel.check_out).format("DD MMM") }} ({{
                decline(hotel.count_nights, "nights")
              }})
            </span>
          </div>

          <div class="message-list__info opacity-70">
            <ProfileIcon class="icon icon--def" />
            <span class="controls_middle ml-12">{{
              decline(hotel.guest_count, "guests")
            }}</span>
          </div>
        </div>
        <div class="message-list__info opacity-70">
          <BankIcon class="icon icon--def" />
          <span class="controls_middle ml-12">
            {{ hotel.total_price.toLocaleString("ru-RU") }} ₽
          </span>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
import { onMounted, ref } from "vue";
import moment from "moment";
import "moment/dist/locale/ru";
import { decline } from "@/composables/useDeclination.js";
import { statuses } from "@/helpers/statuses";
import { ProfileIcon, BankIcon, CalendarIcon, CloseIcon } from "@/layout/icon/index";
moment.locale("ru");

const props = defineProps({
  booking: {
    type: Boolean,
    default: false,
  },
  hotel: {
    type: Object,
    required: true,
  },
});

const nextLink = ref("");

onMounted(() => {
  nextLink.value =
    props.hotel.status == 1
      ? "/booking/" + props.hotel.id
      : "/reservation/" + props.hotel.id;
});
</script>

<style scoped lang="stylus">
@import '../assets/styles/layout/message-list.styl';
</style>
