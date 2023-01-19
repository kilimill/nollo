<template>
  <section class="create">
    <div class="container">
      <BreadCrumbs
        :crumbs="[
          { name: 'Профиль', to: '/profile' },
          { name: 'Добавление объекта', to: '/create' },
        ]"
      />
      <h1 class="title_bigger mb-32">Добавление объекта</h1>
    </div>

    <div class="container container_mob-hide">
      <div class="wrapper">
        <Aside
          class="mobile-hide"
          :list="componentList"
          :active-index="currentComponent.id"
          :errors="errors"
          :valid="valid"
          @next-component="nextComponent"
          page="UpsertHotel"
        />

        <Loader v-if="isBusy" />

        <div class="create__inner" v-else>
          <div
            class="create__item"
            v-for="component in componentList"
            :key="component.id"
            :class="{
              active: currentComponent.id === component.id,
              mistake: errors?.[component.name],
              completed: commonStore.mobile && valid.includes(component.name),
            }"
          >
            <div
              class="create__item-header wrapper wrapper_v-ctr wrapper_h-btw"
              @click="nextComponent(component.id, false)"
            >
              <h2 class="create__item-title title_up-middle">{{ component.title }}</h2>

              <CheckIcon
                class="icon icon--def not-mobile-hide"
                v-if="valid.includes(component.name) && !errors?.[component.name]"
              />
              <div
                class="hint"
                v-if="errors?.[component.name] && commonStore.mobile"
                tooltip="Поля заполнены некорректно"
                positionTool="bottom"
              >
                <AlertInfoIcon class="icon--def hint__ico" />
              </div>
            </div>

            <div class="create__content">
              <div class="create__wrapper">
                <component class="create__component" :is="component.component" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, provide, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useCommonStore } from "@/stores/commonStore";
import { useApi } from "@/composables/useApi";
import tabComponents from "@/helpers/tabComponents/index";
import { CheckIcon, AlertInfoIcon } from "@/layout/icon/index";
import BreadCrumbs from "@/layout/BreadCrumbs.vue";
import Loader from "@/layout/Loader.vue";
import Aside from "@/components/Aside.vue";

const commonStore = useCommonStore();
const hotelData = reactive({
  id: null,
  type_id: null,
  name: null,
  description: null,
  distance_city: null,
  detailed_route: null,
  conditions: null,
  season_id: null,
  min_days: null,
  check_in_hour: null,
  check_out_hour: null,
  media: null,
  tags: [],
  rooms: [],
  lakes: [],
  contacts: [],
});

const address = reactive({
  name: null,
  coordinates: null,
});

// const router = useRouter();
const isBusy = ref(true);
const { componentList, currentComponent, findComponent, isLastStep } = tabComponents(
  "create",
  0
);

const componentsHeight = [];
const getHeights = () => {
  const allComponents = document.querySelectorAll(".create__content");

  allComponents.forEach((item, i) => {
    componentsHeight.push(item.clientHeight);

    if (i !== 0) {
      item.style.height = 0;
    } else {
      item.style.height = item.clientHeight + "px";
    }
  });
};

const setHeight = (id) => {
  const allComponents = document.querySelectorAll(".create__content");
  const oldId = currentComponent.value.id;
  allComponents[oldId].style.height = 0;
  allComponents[oldId].style.minHeight = "auto";
  allComponents[id].style.minHeight = componentsHeight[id] + "px";
  allComponents[id].style.height = "auto";
};

const nextComponent = (nextId) => {
  if (nextId === currentComponent.value.id) return;
  if (nextId == undefined) {
    nextId = currentComponent.value.id + 1;
  }

  if (commonStore.mobile) {
    setHeight(nextId);
  }

  findComponent(nextId);
};

const router = useRouter();

const errors = ref({});
const valid = ref([]);

const upsertHotelStep = (data) => {
  fecthHotel(data).then(() => {
    isLastStep.value ? router.push({ name: "Added" }) : nextComponent();
  });
};

const edit = (data) => {
  fecthHotel(data).then(() => router.push({ name: "Profile", query: { startPage: 2 } }));
};

const isSent = ref(false);

const fecthHotel = (data) => {
  isSent.value = true;
  let url;
  if (hotelData.id) {
    url = `owner/hotels/upsert/${hotelData.id}`;
  } else {
    url = `owner/hotels/upsert`;
  }

  return useApi()
    .postTo(url, data)
    .then((data) => {
      setHotelData(data.data);
      if (!hotelData.id) {
        hotelData.id = data.data.id;
        router.replace({ name: "UpsertHotel", params: { id: data.data.id } });
      }

      if (data.valid) {
        valid.value = data.valid;
      }

      if (errors.value[currentComponent.value.name]) {
        delete errors.value[currentComponent.value.name];
      }

      return data;
    })
    .catch((response) => {
      if (response.data?.errors) {
        errors.value = response.data.errors;
      }

      throw response;
    })
    .finally(() => (isSent.value = false));
};

const route = useRoute();

const getHotel = () => {
  useApi()
    .getFrom(`owner/hotels/${hotelData.id}`)
    .then((data) => {
      if (data.valid) {
        valid.value = data.valid;
      }
      setHotelData(data.data);
    });
};

const setHotelData = (hotel) => {
  // hotelData.id = hotelData.id;
  hotelData.type_id = hotel.type_id;
  hotelData.name = hotel.name;
  hotelData.description = hotel.description;
  hotelData.distance_city = hotel.distance_city;
  hotelData.detailed_route = hotel.detailed_route;
  hotelData.conditions = hotel.conditions;
  hotelData.season_id = hotel.season_id;
  hotelData.min_days = hotel.min_days;
  hotelData.check_in_hour = hotel.check_in_hour;
  hotelData.check_out_hour = hotel.check_out_hour;
  hotelData.media = hotel.media;
  hotelData.rooms = hotel.rooms;
  hotelData.tags = hotel.tags;
  hotelData.lakes = hotel.lakes;
  hotelData.contacts = hotel.contacts;

  address.name = hotel.address;
  address.coordinates = hotel.coordinates;

  isBusy.value = false;

  if (commonStore.mobile && componentsHeight.length == 0) {
    setTimeout(() => getHeights());
  }
};

onMounted(() => {
  if (route.params.id) {
    hotelData.id = route.params.id;
    getHotel();
  } else {
    isBusy.value = false;
    if (commonStore.mobile && componentsHeight.length == 0) {
      setTimeout(() => getHeights());
    }
  }
});

provide("create", {
  hotelData,
  upsertHotelStep,
  edit,
  address,
  errors,
  fecthHotel,
  isLastStep,
  isSent,
});
</script>
