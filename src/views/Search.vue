<template>
  <section class="search">
    <div class="container">
      <form class="search__form" @submit.prevent="getNewHotels">
        <div class="wrapper wrapper_v-ctr mb-24">
          <v-input
            class="search__form-place form__wrapper_white"
            icon="search"
            label="Место или название"
            type="text"
            name="location"
            :errors="errors"
            v-model:value="searchHotels.location"
          />
          <DataPicker
            class="calendar_white"
            :multi-calendars="true"
            name="dateSearch"
            placeholder="Даты заезда и выезда"
            v-model:value="searchHotels.dates"
          />

          <label class="form__checkbox-label form__checkbox-label_white">
            <input
              class="form__checkbox"
              type="checkbox"
              v-model="floatingDate"
              @change="onChangeDate"
              :disabled="!searchHotels.dates"
            />
            <span class="controls_middle opacity-70"> ± 3 дня </span>
          </label>
        </div>

        <div class="search__special mb-40">
          <SearchByTag class="mb-24" />

          <v-input
            class="form__wrapper_white"
            label="Стоимость от"
            type="number"
            name="min_price"
            :errors="errors"
            v-model:value="searchHotels.min_price"
          />

          <v-input
            class="form__wrapper_white"
            label="Стоимость до"
            type="number"
            name="max_price"
            :errors="errors"
            v-model:value="searchHotels.max_price"
          />

          <v-input
            class="form__wrapper_white"
            label="Кол-во гостей"
            name="guest_count"
            type="number"
            :errors="errors"
            v-model:value="searchHotels.guest_count"
          />

          <v-select
            class="select_white"
            name="meals_id"
            label="Тип питания"
            :data="useDefaultStore().meals"
            :errors="errors"
            v-model:value="searchHotels.meals_id"
          />

          <button class="btn btn_green search__btn" :disabled="load">Найти</button>
        </div>
      </form>
    </div>
    <div class="search__result" v-if="hotels.length">
      <div class="container container_mob-hide">
        <Map class="search__map" :hotels="hotels" />
      </div>

      <div class="container" ref="searchResult">
        <Catalog :title="title" :count="count" />
      </div>
    </div>
    <Loader v-if="load" />
    <NotFound page-info="empty" v-if="!load && !hotels.length" />
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch, provide } from "vue";
import moment from "moment";
import "moment/dist/locale/ru";
import vSelect from "../components/vue-custom/vSelect.vue";
import { useRouter } from "vue-router";
import { useDefaultStore } from "@/stores/defaultStore";
import { useUserStore } from "@/stores/userStore";
import { useApi } from "@/composables/useApi";
import { searchHotels } from "@/composables/useSearchHotels";
import timeoutDecorator from "@/helpers/timeoutDecorator.js";
import Catalog from "@/components/Catalog.vue";
import Map from "@/components/maps/Map.vue";
import NotFound from "@/components/NotFound.vue";
import DataPicker from "@/layout/DataPicker.vue";
import SearchByTag from "@/layout/SearchByTag.vue";
import Loader from "@/layout/Loader.vue";

moment.locale("ru");
const { delayDecor } = timeoutDecorator(100, loadMore);
const userStore = useUserStore();
const hotels = ref([]);
const nextPageLink = ref();
const searchResult = ref();
const load = ref(true);
const title = ref("Каталог");
const errors = ref({});
const count = ref(0);

const floatingDate = ref(false);
const onChangeDate = () => {
  if (floatingDate.value) {
    searchHotels.dates.check_in = incrementDate(searchHotels.dates.check_in);
    searchHotels.dates.check_out = decrementDate(searchHotels.dates.check_out);
  } else {
    searchHotels.dates.check_in = decrementDate(searchHotels.dates.check_in);
    searchHotels.dates.check_out = incrementDate(searchHotels.dates.check_out);
  }
};

const incrementDate = (date) => {
  return moment(date).add(3, "days").format("YYYY-MM-DD");
};

const decrementDate = (date) => {
  return moment(date).add(-3, "days").format("YYYY-MM-DD");
};

const getNewHotels = (wasSearch) => {
  userStore.setIsGotLocation(false);
  if (wasSearch || hotels.value.length !== 0) {
    title.value = "Результаты поиска";
  }
  hotels.value = [];

  getHotels()
    .then((data) => {
      hotels.value = data.data;
      window.ymaps.geocode(searchHotels.location).then((res) => {
        const obj = res.geoObjects.get(0);
        userStore.setCoordinates(obj.geometry.getCoordinates());
        userStore.setIsGotLocation(true);
      });
    })
    .catch((response) => {
      if (response?.data?.errors) {
        errors.value = response?.data?.errors;
      }
    });
};

const getHotels = (url = "hotels/search") => {
  load.value = true;
  let data = new FormData();

  if (searchHotels.location == "") {
    searchHotels.location = userStore.city;
  }

  for (let key in searchHotels) {
    if (
      searchHotels[key] !== "" &&
      searchHotels[key] !== null &&
      searchHotels[key]?.length !== 0
    ) {
      if (key === "tags") {
        searchHotels.tags.forEach((item, i) => {
          data.append("tags[" + i + "]", item);
        });
      } else {
        data.append(key, searchHotels[key]);
      }
    }
  }

  return useApi()
    .postTo(url, data)
    .then((data) => {
      nextPageLink.value = data.next_page;
      count.value = data.count;
      return data;
    })
    .catch((response) => {
      throw response;
    })
    .finally(() => (load.value = false));
};

const getHotelsNext = () => {
  getHotels("hotels/search?page=" + nextPageLink.value).then((data) => {
    hotels.value.push(...data.data);
  });
};

function loadMore() {
  if (
    searchResult.value?.offsetHeight <= window.pageYOffset &&
    nextPageLink.value &&
    !load.value
  ) {
    getHotelsNext();
  }
}

watch(
  () => userStore.city,
  () => {
    getNewHotels(false);
  }
);

onMounted(() => {
  if (userStore.city) {
    getNewHotels(useRouter().query?.isSearch);
  }
  window.addEventListener("scroll", delayDecor);
});

onUnmounted(() => {
  window.removeEventListener("scroll", delayDecor);
});

provide("search", { getHotels, hotels });
</script>

<style scoped lang="stylus">
@import '../assets/styles/views/search.styl'
</style>
