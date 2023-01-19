<template>
  <section class="reservation">
    <Loader v-if="isBusy" />
    <div class="reservation__inner" v-else>
      <div class="container">
        <BreadCrumbs
          :crumbs="[
            { name: 'Профиль', to: '/profile' },
            { name: 'Бронирование №' + reservation.id, to: route.path },
          ]"
        />
        <h1 class="title_bigger mb-32">Бронирование №{{ reservation.id }}</h1>
      </div>

      <div class="container container_mob-hide">
        <div class="reservation__content wrapper">
          <div class="reservation__item">
            <div class="reservation__item-header">
              <div
                class="alert alert_wait"
                :class="'alert_' + statuses.typeBookingStatus[reservation.status].type"
              >
                <p class="controls_middle">
                  {{ statuses.typeBookingStatus[reservation.status].name }}
                </p>
              </div>
            </div>

            <router-link :to="{ name: 'Hotel', params: { id: reservation.hotel_id } }">
              <img class="reservation__img" :src="reservation.media" alt="Фото отеля" />
            </router-link>

            <h2 class="title_up-middle border-btm mb-24">
              <router-link :to="{ name: 'Hotel', params: { id: reservation.hotel_id } }">
                {{ reservation.hotel }}
              </router-link>
            </h2>

            <div class="details mb-24">
              <!-- <div class="details__item">
                <FoodIcon class="icon icon--small" />
                <span class="controls_small">без питания</span>
              </div> -->
              <div class="details__item">
                <ProfileIcon class="icon icon--small" />
                <span class="controls_small">{{
                  decline(reservation.adult_count, "guests")
                }}</span>
              </div>
            </div>

            <div class="reservation__info" :class="{ full }">
              <h3 class="title_middle border-btm mb-16">Детали бронирования</h3>

              <div class="mb-24">
                <div class="wrapper wrapper_h-btw border-btm mb-24">
                  <div class="reservation__info-col">
                    <p class="controls_small mb-8 opacity-30">Заезд</p>
                    <p class="controls_middle mb-4">{{ reservation.check_in }}</p>
                    <p class="text_middle">с {{ reservation.check_in_hour }}</p>
                  </div>

                  <div class="reservation__info-col">
                    <p class="controls_small mb-8 opacity-30">Отъезд</p>
                    <p class="controls_middle mb-4">{{ reservation.check_out }}</p>
                    <p class="text_middle">до {{ reservation.check_out_hour }}</p>
                  </div>
                </div>

                <p class="text_middle mb-4">Общая длительность проживания</p>
                <p class="controls_middle">
                  {{ decline(reservation.count_nights, "nights") }}
                </p>
              </div>
              <p class="title_middle border-btm mb-16">Стоимость</p>

              <div
                class="wrapper wrapper_h-btw mb-16"
                v-for="(room, i) in reservation.rooms"
                :key="i"
              >
                <p class="text_middle pacity-70">
                  {{ room.price.toLocaleString("ru-RU") }} ₽ х
                  {{ decline(reservation.count_nights, "nights") }}
                </p>
                <p class="text_middle">
                  {{ (room.price * reservation.count_nights).toLocaleString("ru-RU") }} ₽
                </p>
              </div>

              <!-- <div class="wrapper wrapper_h-btw mb-32">
                <p class="text_middle opacity-70">Скидка 25%</p>
                <p class="text_middle">- 65 000 ₽</p>
              </div> -->

              <div class="total wrapper wrapper_h-btw">
                <p class="text_middle opacity-70">Итог</p>
                <p class="text_middle">
                  {{ reservation.total_price.toLocaleString("ru-RU") }} ₽
                </p>
              </div>

              <Accordion :data="reservation.extra" title="Условия проживания" />
            </div>
            <button
              class="reservation__content-btn wth_arrow-down btn_uncover not-mobile-hide"
              :class="{ active: full }"
              @click.prevent="toggleFullInfo"
            >
              <span class="controls_middle" v-if="!full"> Смотреть подробнее</span>
              <span class="controls_middle" v-else>Скрыть</span>
              <ArrowDownIcon class="icon icon--small" />
            </button>
          </div>
          <Chat />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import moment from "moment";
import "moment/dist/locale/ru";
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import { useApi } from "@/composables/useApi";
import { decline } from "@/composables/useDeclination.js";
import { statuses } from "@/helpers/statuses";
import Chat from "@/components/Chat.vue";
import { ProfileIcon, ArrowDownIcon } from "@/layout/icon/index.js";
import Accordion from "@/layout/Accordion.vue";
import BreadCrumbs from "@/layout/BreadCrumbs.vue";
import Loader from "@/layout/Loader.vue";

moment.locale("ru");
const route = useRoute();
const isBusy = ref(true);
const full = ref(false);

const toggleFullInfo = () => {
  full.value = !full.value;
};

const reservation = reactive({
  id: route.params.id,
  status: undefined,
  adult_count: undefined,
  extra: undefined,
  check_in: undefined,
  check_in_hour: undefined,
  check_out: undefined,
  check_out_hour: undefined,
  child_count: undefined,
  count_nights: undefined,
  discount: undefined,
  email: undefined,
  guest_name: undefined,
  hotel: undefined,
  hotel_id: undefined,
  media: undefined,
  phone: undefined,
  rooms: undefined,
  total_price: undefined,
});

const initReservation = (payload) => {
  reservation.id = payload.id;
  reservation.status = payload.status;
  reservation.adult_count = payload.adult_count;
  reservation.extra = payload.extra;
  reservation.check_in = moment(payload.check_in).format("dd, DD MMMM YYYY");
  reservation.check_in_hour = moment(payload.check_in_hour, "H").format("HH:mm");
  reservation.check_out = moment(payload.check_out).format("dd, DD MMMM YYYY");
  reservation.check_out_hour = moment(payload.check_out_hour, "H").format("HH:mm");
  reservation.child_count = payload.child_count;
  reservation.count_nights = payload.count_nights;
  reservation.discount = payload.discount;
  reservation.email = payload.email;
  reservation.guest_name = payload.guest_name;
  reservation.hotel = payload.hotel;
  reservation.hotel_id = payload.hotel_id;
  reservation.media = payload.media.find((item) => item.is_preview === true).url;
  reservation.phone = payload.phone;
  reservation.rooms = payload.rooms;
  reservation.total_price = payload.total_price;
  isBusy.value = false;
};

const getReservation = () => {
  isBusy.value = true;
  useApi()
    .getFrom(`bookings/${reservation.id}`)
    .then((data) => {
      initReservation(data.data);
    });
};

onMounted(() => {
  getReservation();
});
</script>

<style lang="stylus" scoped>
@import '../assets/styles/vars.styl';
.reservation {
  &__content {
    align-items: flex-start

    @media $mobile {
      position: relative;
      display: block;

      &-btn {
        width 247px
        border-radius: 12px;
      }
    }
  }

  .accordion {
    margin-top 48px
  }

  &__info {
    @media $mobile {
      height: 0;
      opacity: 0;
      overflow: hidden;
      transition: height 0.3s, opacity 0.3s;

      &.full {
        height: auto;
        opacity: 1;
      }
    }
  }

  &__item {
    position: relative;
    max-width: 528px;
    width: 100%;
    margin-right: 32px;
    padding: 32px;
    border-radius: var(--radius-def);
    background-color: #FFFFFF;

    @media $mobile {
      max-width: 100%;
      margin-bottom: 48px;
      padding: 24px 24px 56px 24px;
    }

    &-header {
      position: absolute;
      top: 56px;
      left: 56px;

      @media $tablet {
        top: 48px;
        left: 48px;
      }
    }
  }

  &__img {
    width: 100%;
    height: 282px;
    margin-bottom: 32px;
    border-radius: var(--radius-8);
    object-fit: cover;
    object-position: center;

    @media $mobile {
      margin-bottom: 24px;
    }
  }

  .total {
    background-color: #F5F5F5;
  }
}
</style>
