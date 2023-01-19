<template>
  <section class="hotel" :key="route.params.id">
    <Loader v-if="!hotel?.name" />
    <div class="hotel__inner" v-else>
      <div class="container">
        <BreadCrumbs
          :crumbs="[
            { name: 'Каталог', to: '/search' },
            { name: hotel.name, to: route.path },
          ]"
        />
      </div>

      <div class="container container_mob-hide">
        <Loader v-if="isBusy" />

        <div class="hotel__wrapper wrapper wrapper_h-btw" v-else>
          <section class="hotel__content">
            <h1 class="title_bigger mb-32">{{ hotel.name }}</h1>

            <div class="hotel__controls wrapper mb-24">
              <button
                class="btn btn_control"
                v-if="userStore.isUserAuth"
                :class="{ selected: hotel.is_favorite, loading: loadFavorite }"
                @click.prevent="toggleApi(favoritesUrl, hotel)"
              >
                <HeartIcon class="icon icon--small" />
                <span class="controls_middle">Добавить в избранное</span>
              </button>

              <button class="btn btn_control">
                <ShareIcon class="icon icon--small" />
                <span class="controls_middle">Поделиться</span>
              </button>
            </div>
            <SliderImg class="mb-40" :images="hotel.media" />

            <div class="hotel__info mb-40">
              <h2 class="title_up-middle border-btm mb-24">{{ hotel.name }}</h2>
              <p class="text_middle opacity-70">{{ hotel.description }}</p>
            </div>

            <form class="form hotel__form mb-40">
              <h3 class="title_middle mb-24">Доступные номера</h3>
              <div class="hotel__form-inner">
                <DataPicker
                  v-model:value="searchHotels.dates"
                  :multi-calendars="true"
                  placeholder="Выберите даты"
                  :errors="errors"
                  name="check_in"
                />
              </div>

              <div class="grid grid_2 mb-32">
                <div
                  class="form__label wrapper wrapper_h-btw"
                  :class="{ error: errors?.adult_count }"
                >
                  <p class="controls_middle">Взрослые</p>

                  <div class="form__controls">
                    <button
                      class="form__controls-btn form__controls-btn--minus"
                      @click.prevent="adultDecrement"
                      :disabled="bookingData.adult_count === 0"
                    >
                      <DecrementIcon class="icon icon--def" />
                    </button>
                    <p class="form__controls-numb">{{ bookingData.adult_count }}</p>
                    <button
                      class="form__controls-btn form__controls-btn--plus"
                      @click.prevent="adultIncrement"
                    >
                      <IncrementIcon class="icon icon--def" />
                    </button>
                  </div>
                </div>

                <div class="form__label wrapper wrapper_h-btw">
                  <p class="controls_middle">Дети</p>

                  <div class="form__controls">
                    <button
                      class="form__controls-btn form__controls-btn--minu"
                      @click.prevent="--bookingData.child_count"
                      :disabled="bookingData.child_count === 0"
                    >
                      <DecrementIcon class="icon icon--def" />
                    </button>
                    <p class="form__controls-numb">{{ bookingData.child_count }}</p>
                    <button
                      class="form__controls-btn form__controls-btn--plus"
                      @click.prevent="++bookingData.child_count"
                    >
                      <IncrementIcon class="icon icon--def" />
                    </button>
                  </div>
                </div>
              </div>
              <button
                class="btn btn_green btn_block"
                @click.prevent="searchRooms"
                :disabled="
                  isSearch || !searchHotels.dates || bookingData.adult_count == 0
                "
              >
                Найти
              </button>
            </form>

            <div class="hotel__booking mb-40">
              <div class="hotel__booking-wrapper" v-if="rooms?.length && !isSearch">
                <div class="hotel__booking-item" v-for="(room, i) in rooms" :key="i">
                  <img
                    class="hotel__booking-img"
                    :src="room.preview"
                    alt="Фото комнаты"
                  />

                  <div class="hotel__booking-box">
                    <div class="hotel__booking-info">
                      <h3 class="title_pre-middle mb-16">{{ room.name }}</h3>

                      <div class="details">
                        <div class="details__item">
                          <FoodIcon class="icon icon--small" />
                          <span class="controls_small">
                            {{ meals[room.meals_id - 1].name }}
                          </span>
                        </div>
                        <div class="details__item">
                          <ProfileIcon class="icon icon--small" />
                          <span class="controls_small">
                            {{ decline(room.guest_count, "guests") }}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div class="hotel__booking-bottom">
                      <div class="form__controls">
                        <button
                          class="form__controls-btn form__controls-btn--minu"
                          @click.prevent="decrementTotalPrice(room.group_id, room.price)"
                          :disabled="roomCounts[room.group_id] == 0"
                        >
                          <DecrementIcon class="icon icon--def" />
                        </button>
                        <p class="form__controls-numb">{{ roomCounts[room.group_id] }}</p>
                        <button
                          class="form__controls-btn form__controls-btn--plus"
                          @click.prevent="incrementTotalPrice(room.group_id, room.price)"
                          :disabled="
                            roomCounts[room.group_id] == room.available_ids.length
                          "
                        >
                          <IncrementIcon class="icon icon--def" />
                        </button>
                      </div>

                      <span class="title_pre-middle"
                        >{{ room.price.toLocaleString("ru-RU") }} ₽/сутки</span
                      >
                    </div>
                  </div>
                </div>

                <div class="wrapper wrapper_v-ctr wrapper_h-btw">
                  <button
                    class="btn btn_green"
                    :disabled="totalPrice === 0 || !searchHotels.dates || isSent"
                    @click.prevent="postBooking"
                  >
                    Забронировать
                  </button>
                  <span class="title_pre-middle">
                    Итого: {{ totalPrice.toLocaleString("ru-RU") }} ₽</span
                  >
                </div>
              </div>

              <Loader v-if="isSearch" />
              <NotFound v-if="!isSearch && !rooms?.length" page-info="empty" />
            </div>

            <div class="hotel__service mb-48">
              <h3 class="title_middle mb-24">Услуги</h3>

              <Services :tags="hotel.tags" />
            </div>
            <div class="hotel__address">
              <div class="wrapper wrapper_v-ctr mb-32">
                <MapIcon class="mr-12 span controls_middle" /> {{ hotel.address }}
              </div>
              <MapSingle class="create__address-map" :coords="hotel.coordinates" />
            </div>
            <Accordion class="mb-48" :data="hotel.extra" title="Условия проживания" />

            <div class="hotel__contacts">
              <h3 class="title_middle mb-24">Контакты</h3>

              <div class="grid grid_2">
                <div
                  class="hotel__contacts-item"
                  v-for="(item, i) in hotel.contacts"
                  :key="i"
                >
                  <a class="controls_middle" :href="item.href">
                    <component
                      class="icon icon--small icon_green"
                      :is="contactsTypes[item.type]"
                    />
                    <span>{{ item.type === 1 ? toMask(item.value) : item.value }}</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <aside class="hotel__aside not-desktop-hide">
            <h4 class="title_up-middle mb-32">Вам может понравиться</h4>

            <div class="grid grid_1">
              <CardHotel
                v-for="(hotel, i) of recommendedHotels"
                :key="i"
                :hotel="hotel"
              />
            </div>

            <div class="hotel__question">
              <div class="hotel__question-box">
                <h6 class="title_middle mb-24">Вы представитель турбазы</h6>
                <p class="text_middle opacity-70">
                  <router-link class="c-green" to="/">Перейдите по ссылке </router-link>
                  <span>и получите доступ к &nbsp; управлению данным объектом.</span>
                </p>
              </div>
              <img
                class="hotel__question-img"
                src="@/assets/images/details/question-bg.png"
                alt=""
              />
            </div>
          </aside>
        </div>

        <div class="hotel__question desktop-hide">
          <div class="hotel__question-box">
            <h6 class="title_middle mb-24">Вы представитель турбазы</h6>
            <p class="text_middle opacity-70">
              <router-link class="c-green" to="/">Перейдите по ссылке</router-link>
              <span>и получите доступ к &nbsp; управлению данным объектом.</span>
            </p>
          </div>

          <img
            class="hotel__question-img"
            src="@/assets/images/details/question-bg.png"
            alt=""
          />
        </div>
      </div>
      <div class="container container_mob-hide">
        <Suggestions
          class="desktop-hide"
          title="Вам может понравиться"
          name="mightLike"
          :hotels="recommendedHotels"
        />

        <Suggestions
          v-if="userStore.isUserAuth && prevViewedHotels?.length !== 0"
          title="Ранее просмотренные"
          name="lastPreview"
          :hotels="prevViewedHotels"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import moment from "moment";
import "moment/dist/locale/ru";
import { useDefaultStore } from "@/stores/defaultStore";
import { useUserStore } from "@/stores/userStore";
import { useApi } from "@/composables/useApi";
import { toMask } from "@/composables/useMask";
import { decline } from "@/composables/useDeclination.js";
import { getDefParams, postDefParams } from "@/composables/useDefFetch";
import useToggleApi from "@/composables/useToggleApi";
import { searchHotels } from "@/composables/useSearchHotels";
import Suggestions from "@/components/Suggestions.vue";
import MapSingle from "@/components/maps/MapSingle.vue";
import NotFound from "@/components/NotFound.vue";
import Services from "@/layout/Services.vue";
import SliderImg from "@/layout/sliders/SliderImg.vue";
import CardHotel from "@/layout/cards/CardHotel.vue";
import Loader from "@/layout/Loader.vue";
import Accordion from "@/layout/Accordion.vue";
import DataPicker from "@/layout/DataPicker.vue";
import BreadCrumbs from "@/layout/BreadCrumbs.vue";
import {
  DecrementIcon,
  FoodIcon,
  HeartIcon,
  IncrementIcon,
  MailIcon,
  MapIcon,
  PhoneIcon,
  ProfileIcon,
  ShareIcon,
  TelegramIcon,
  VkIcon,
} from "@/layout/icon/index.js";
moment.locale("ru");

const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const meals = computed(() => useDefaultStore().meals);
const isBusy = ref();

const contactsTypes = {
  1: PhoneIcon,
  2: MailIcon,
  3: MailIcon,
  4: TelegramIcon,
  5: VkIcon,
};

const hotel = reactive({
  id: route.params.id,
  name: null,
  address: null,
  description: null,
  detailed_route: null,
  is_favorite: null,
  contacts: [],
  coordinates: [],
  extra: [],
  media: [],
  tags: [],
});
const favoritesUrl = `favorites/hotels/${hotel.id}`;
const { loadFavorite, toggleApi } = useToggleApi("is_favorite");
const getHotel = () => {
  isBusy.value = true;
  useApi()
    .getFrom(`hotels/${hotel.id}`)
    .then((data) => {
      setHotel(data.data);
    })
    .finally(() => (isBusy.value = false));
};

function setHotel(data) {
  const contactsTemplate = (value, href) => {
    hotel.contacts.push({
      href: href,
      ...value,
    });
  };

  hotel.name = data.name;
  hotel.address = data.address;
  hotel.description = data.description;
  hotel.detailed_route = data.detailed_route;
  hotel.is_favorite = data.is_favorite;
  hotel.coordinates = data.coordinates;
  hotel.extra = data.extra;
  hotel.media = data.media;
  hotel.tags = data.tags;
  hotel.contacts = [];
  data.contacts.forEach((item) => {
    switch (item.type) {
      case 1:
        contactsTemplate(item, `tel:+${item.value}`);
        break;
      case 2:
        contactsTemplate(item, `mailto:${item.value}`);
        break;
      default:
        contactsTemplate(item, `https://${item.value}`);
    }
  });
}

const roomCounts = ref({});
const totalPrice = ref(0);
let count_nughts = null;
const incrementTotalPrice = (id, price) => {
  ++roomCounts.value[id];
  totalPrice.value = totalPrice.value + price * count_nughts;
};

const decrementTotalPrice = (id, price) => {
  --roomCounts.value[id];
  totalPrice.value = totalPrice.value - price * count_nughts;
};

const bookingData = reactive({
  adult_count: 1,
  child_count: 0,
});

const errors = ref();
const rooms = ref([]);
const isSearch = ref(false);
const searchRooms = () => {
  isSearch.value = true;
  roomCounts.value = {};
  rooms.value = [];
  totalPrice.value = 0;
  const data = {};
  Object.assign(data, bookingData, searchHotels.dates);
  useApi()
    .postTo(`hotels/${hotel.id}/rooms/`, data)
    .then((data) => {
      rooms.value = data.data;
      if (searchHotels.dates) {
        count_nughts = moment(searchHotels.dates.check_out).diff(
          moment(searchHotels.dates.check_in),
          "days"
        );
      }
      rooms.value.forEach((item) => {
        roomCounts.value[item.group_id] = 0;
      });
    })
    .catch((response) => {
      if (response.data?.errors) errors.value = response.data.errors;
    })
    .finally(() => (isSearch.value = false));
};

const recommendedHotels = ref();
const getRecommendedHotels = () => {
  postDefParams("hotels", { per_page: 3, location: userStore.city }, recommendedHotels);
};

const prevViewedHotels = ref();
const getPrevViewedHotels = () => {
  if (userStore.isUserAuth) {
    getDefParams("viewed/hotels", prevViewedHotels);
  }
};

const adultDecrement = () => {
  --bookingData.adult_count;
  if (errors.value?.adult_count) errors.value.adult_count = null;
};

const adultIncrement = () => {
  ++bookingData.adult_count;
  if (errors.value?.adult_count) errors.value.adult_count = null;
};

const isSent = ref(false);
const postBooking = () => {
  isSent.value = true;
  bookingData.rooms = [];

  for (let key in roomCounts.value) {
    rooms.value.find((room) => {
      if (room.group_id == key) {
        const availableRooms = room.available_ids.slice(0, roomCounts.value[key]);
        bookingData.rooms.push(...availableRooms);
      }
    });
  }

  const data = {};
  Object.assign(data, bookingData, searchHotels.dates);
  useApi()
    .postTo(`bookings/hotel/${hotel.id}`, data, true)
    .then((data) => {
      sessionStorage.setItem(data.data.id, JSON.stringify(data.data));
      router.push({ name: "Booking", params: { id: data.data.id } });
    })
    .finally(() => (isSent.value = false));
};

watch(
  () => userStore.city,
  () => {
    getPrevViewedHotels();
    getRecommendedHotels();
  }
);

watch(route, () => {
  hotelInit();
});

const hotelInit = () => {
  if (route.name !== "Hotel") return;
  hotel.id = route.params.id;
  getHotel();

  if (userStore.city) {
    getRecommendedHotels();
    getPrevViewedHotels();
  }
};

onMounted(() => {
  if (searchHotels.dates) {
    searchRooms();
  }
  hotelInit();
});
</script>

<style scoped lang="stylus">
@import '../assets/styles/views/hotel.styl';

.create__address {
&-map {
    height: 280px;
    margin-bottom: 56px;
    border-radius: 16px;

    @media $mobile {
      margin-bottom: 32px;
    }
  }
}
</style>
