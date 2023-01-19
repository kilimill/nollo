<template>
  <section class="booking">
    <Loader v-if="isBusy" />
    <div class="booking__inner" v-else>
      <div class="container-mid">
        <BreadCrumbs
          :crumbs="[
            { name: 'Каталог', to: '/search' },
            {
              name: booking.hotel,
              to: { name: 'Hotel', params: { id: booking.hotel_id } },
            },
            { name: 'Бронирование №' + booking.id, to: route.path },
          ]"
        />
        <h1 class="title_bigger mb-32">Бронирование №{{ booking.id }}</h1>

        <SliderImg class="mb-40" :images="booking.media" />

        <h2 class="title_up-middle border-btm mb-24">{{ booking.hotel }}</h2>

        <div class="details mb-24">
          <!-- <div class="details__item">
            <FoodIcon class="icon icon--small" />
            <span class="controls_small">без питания</span>
          </div> -->
          <div class="details__item">
            <ProfileIcon class="icon icon--small" />
            <span class="controls_small">{{ decline(booking.adult_count, "days") }}</span>
          </div>
        </div>
      </div>

      <div class="container-mid container_mob-hide">
        <div class="booking__info wrapper wrapper_h-btw">
          <div class="booking__info-item">
            <h3 class="title_middle border-btm mb-16">Детали бронирования</h3>

            <div class="wrapper wrapper_h-btw border-btm mb-24">
              <div class="booking__info-col">
                <p class="controls_small mb-8 opacity-30">Заезд</p>
                <p class="controls_middle mb-4">{{ booking.check_in }}</p>
                <p class="text_middle">с {{ booking.check_in_hour }}</p>
              </div>

              <div class="booking__info-col">
                <p class="controls_small mb-8 opacity-30">Отъезд</p>
                <p class="controls_middle mb-4">{{ booking.check_out }}</p>
                <p class="text_middle">до {{ booking.check_out_hour }}</p>
              </div>
            </div>
            <p class="text_middle mb-4">Общая длительность проживания</p>
            <p class="controls_middle">{{ decline(booking.count_nights, "nights") }}</p>
          </div>

          <div class="booking__info-item">
            <h3 class="title_middle border-btm mb-16">Стоимость</h3>

            <div
              class="wrapper wrapper_h-btw mb-16"
              v-for="(room, i) in booking.rooms"
              :key="i"
            >
              <p class="text_middle opacity-70">
                {{ (room.price * room.quantity).toLocaleString("ru-RU") }} ₽ х
                {{ decline(booking.count_nights, "nights") }}
              </p>
              <p class="text_middle">
                {{
                  (room.price * room.quantity * booking.count_nights).toLocaleString(
                    "ru-RU"
                  )
                }}
                ₽
              </p>
            </div>

            <!-- <div class="wrapper wrapper_h-btw">
              <p class="text_middle opacity-70">Скидка 25%</p>
              <p class="text_middle">65 000 ₽</p>
            </div> -->

            <div class="total">
              <p class="text_middle opacity-70">Итог</p>
              <p class="text_middle">
                {{ booking.total_price.toLocaleString("ru-RU") }} ₽
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container-mid">
        <form class="booking__another-form" @change="validate">
          <div class="booking__another" v-if="userStore.isUserAuth && model">
            <div class="mb-24">
              <label class="form__checkbox-label">
                <input
                  class="form__checkbox"
                  v-model="anotherMan"
                  type="checkbox"
                  name="anotherMan"
                />
                <span class="controls_middle">Гостем будет другой человек</span>
              </label>
            </div>

            <div class="grid grid_2 mb-32">
              <v-input
                icon="profile"
                label="Имя"
                type="text"
                name="guest_name"
                :errors="errors"
                :readonly="userStore.user.name && !anotherMan"
                v-model:value="model.guest_name"
              />

              <v-phone
                icon="phone"
                label="Телефон"
                type="text"
                name="phone"
                :errors="errors"
                :readonly="userStore.user.phone && !anotherMan"
                v-model:value="model.phone"
              />
            </div>
            <v-input
              class="mb-32"
              icon="mail"
              label="Почта"
              type="text"
              name="email"
              :errors="errors"
              :readonly="userStore.user.email && !anotherMan"
              v-model:value="model.email"
            />

            <v-message
              class="mb-40"
              label="Сообщение"
              name="comment"
              :errors="errors"
              v-model:value="model.comment"
            />

            <Accordion :data="booking.extra" title="Условия проживания" />
          </div>
          <button
            class="btn btn_green booking__btn"
            :disabled="!userStore.isUserAuth || isDisabled"
            v-show="booking.status !== 1"
            @click.prevent="processBooking"
          >
            <span class="btn__content">Отправить заявку</span>
          </button>
        </form>
        <p class="controls_middle align-ctr" v-if="!userStore.isUserAuth">
          Для отправки заявки необходимо
          <router-link class="booking__link c-green" :to="{ name: 'Authorization' }">
            зарегистрироваться
          </router-link>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import moment from "moment";
import "moment/dist/locale/ru";
import { onMounted, reactive, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import vMessage from "../components/vue-custom/VMessage.vue";
import vPhone from "../components/vue-custom/vPhone.vue";
import { useUserStore } from "@/stores/userStore";
import { useApi } from "@/composables/useApi";
import { decline } from "@/composables/useDeclination.js";
import SliderImg from "@/layout/sliders/SliderImg.vue";
import Accordion from "@/layout/Accordion.vue";
import Loader from "@/layout/Loader.vue";
import { ProfileIcon } from "@/layout/icon/index.js";
import BreadCrumbs from "@/layout/BreadCrumbs.vue";

moment.locale("ru");
const router = useRouter();
const anotherMan = ref(false);
const userStore = useUserStore();
const isBusy = ref(true);
const user = {
  phone: "",
  guest_name: "",
  email: "",
  comment: "",
};
const guest = {
  phone: "",
  guest_name: "",
  email: "",
  comment: "",
};
let model = ref(null);

const route = useRoute();

const booking = reactive({
  id: route?.params.id,
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

const errors = ref({});

const isDisabled = ref(null);
const validate = () => {
  let valid = [];
  for (let key of Object.keys(model.value)) {
    if (key !== "comment") {
      model.value[key] == "" || model.value[key] == null
        ? valid.push(false)
        : valid.push(true);
    }
  }
  isDisabled.value = valid.includes(false);
};

const processBooking = () => {
  isDisabled.value = true;
  for (let key in model.value) {
    if (model.value[key] == "" || model.value[key] == null) {
      delete model.value[key];
    }
  }

  model.value.is_another_guest = anotherMan.value;
  useApi()
    .postTo(`bookings/process/${booking.id}`, model.value)
    .then(() => {
      useApi().getProfile();
      sessionStorage.removeItem(booking.id);
      router.push({ name: "Reservation", params: { id: booking.id } });
    })
    .catch((response) => {
      if (response?.data?.errors) {
        errors.value = response.data.errors;
      }
    })
    .finally(() => (isDisabled.value = false));
};

const initBooking = (payload) => {
  booking.id = payload.id;
  booking.adult_count = payload.adult_count;
  booking.extra = payload.extra;
  booking.check_in = moment(payload.check_in).format("dd, DD MMMM YYYY");
  booking.check_in_hour = moment(payload.check_in_hour, "H").format("HH:mm");
  booking.check_out = moment(payload.check_out).format("dd, DD MMMM YYYY");
  booking.check_out_hour = moment(payload.check_out_hour, "H").format("HH:mm");
  booking.child_count = payload.child_count;
  booking.count_nights = payload.count_nights;
  booking.discount = payload.discount;
  booking.email = payload.email;
  booking.guest_name = payload.guest_name;
  booking.hotel = payload.hotel;
  booking.hotel_id = payload.hotel_id;
  booking.media = payload.media;
  booking.phone = payload.phone;
  booking.rooms = payload.rooms;
  booking.total_price = payload.total_price;

  isBusy.value = false;
};

watch(anotherMan, (e) => {
  if (e) {
    model.value = guest;
  } else {
    model.value = user;
  }
  validate();
});

const getBooking = () => {
  useApi()
    .getFrom(`bookings/${booking.id}`)
    .then((data) => {
      initBooking(data.data);
    })
    .catch(() => router.push({ name: "Home" }));
};

watch(
  () => userStore.isBusy,
  () => {
    if (!userStore.isBusy && isDisabled.value == null) {
      authInit();
    }
  }
);

const authInit = () => {
  const objInit = () => {
    user.phone = userStore.user.phone;
    user.guest_name = userStore.user.name;
    user.email = userStore.user.email;
    model.value = user;
    validate();
  };

  if (sessionStorage.getItem(booking.id)) {
    if (userStore.isUserAuth) {
      objInit();
    }

    initBooking(JSON.parse(sessionStorage.getItem(booking.id)));
    return;
  }

  if (userStore.isUserAuth) {
    objInit();
    getBooking();
  }
};

onMounted(() => {
  if (!userStore.isBusy) authInit();
});
</script>

<style lang="stylus" scoped>
@import '../assets/styles/vars.styl';
.booking {
  &__info {
    margin-bottom: 40px;

    @media $tablet {
      display: block;
    }

    @media $mobile {
      display: block;
    }

    &-item {
      max-width: 416px;
      width: 100%;
      display: flex;
      flex-direction: column;
      border-radius: var(--radius-def);
      padding: var(--offset-up-mid);
      background-color: $gray;

      @media $tablet {
        max-width: 100%;

        &:first-child {
          margin-bottom: 32px;
        }
      }

      @media $mobile {
        max-width: 100%;
        padding: var(--offset-up-mid) 24px;

        &:first-child {
          margin-bottom: 24px;
        }
      }
    }
  }

  &__btn {
    width: 100%;
    margin-top: 56px;
    margin-bottom: 32px;
  }

  &__link {
    text-decoration: underline;
  }

  &__another-form {
    margin-top: 24px;
  }

  .form__description {
    height: 120px;
    min-height: 120px;
  }
}
</style>
