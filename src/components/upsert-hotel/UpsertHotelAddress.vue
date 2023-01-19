<template>
  <section class="create__address">
    <!-- //- h2.create__component-title.title_up-middle Фотографии -->

    <form class="create__component-inner">
      <p class="text_middle opacity-50 mb-24">
        Введите данные или добавьте точку на карту
      </p>

      <div class="wrapper">
        <v-input
          class="mb-32"
          label="Улица"
          type="text"
          name="address"
          :errors="errors?.address"
          v-model:value="address.name"
        />
        <p class="controls_middle address__error btn_red" v-if="fieldError">
          {{ fieldError }}
        </p>
      </div>

      <v-input
        label="Удаленность от населенного пункта, км"
        type="number"
        name="distance_city"
        :errors="errors?.address"
        v-model:value="hotelData.distance_city"
      />

      <div class="map create__address-map" v-if="ymaps">
        <yandexMap
          :controls="['zoomControl']"
          :coords="coords"
          :zoom="15"
          @click="searchAddress"
          :options="optionsMap"
          :modules="['suggestView']"
        >
          <ymapMarker :marker-id="111" :coords="coord" :options="markerOptions" />
        </yandexMap>
      </div>

      <div class="create__btns grid grid_2">
        <button
          class="btn btn_white"
          @click.prevent="saveCurrentChange"
          :disabled="isSent"
        >
          Сохранить как черновик
        </button>
        <button class="btn btn_green" @click.prevent="nextStep" :disabled="isSent">
          Продолжить
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { inject, watch, onMounted, ref } from "vue";
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { useUserStore } from "@/stores/userStore";
import useUpsertHotelButtons from "@/composables/useUpsertHotelButtons.js";
import useMap from "@/composables/useMap.js";

const userStore = useUserStore();
const { proceed, save } = useUpsertHotelButtons();
const { hotelData, address, errors, isSent } = inject("create");

const { optionsMap, markerOptions } = useMap();

const coords = ref([55.7522, 37.6156]);
const coord = ref([]);
const ymaps = ref(null);
const suggestView = ref(undefined);

const fieldError = ref();

const searchCoords = () => {
  const request = suggestView.value.state.get("request");
  return ymaps.value.geocode(request).then((res) => {
    const obj = res.geoObjects.get(0);
    let error;
    if (obj) {
      switch (obj.properties.get("metaDataProperty.GeocoderMetaData.precision")) {
        case "exact":
          break;
        case "number":
        case "near":
        case "range":
          error = "Уточните номер дома";
          break;
        case "street":
          error = "Уточните номер дома";
          break;
        case "other":
        default:
          error = "Уточните адрес";
      }
    } else {
      error = "Уточните адрес";
    }

    if (!error) {
      setCoords(obj.geometry.getCoordinates());
      getAddress(obj);
      return res;
    } else {
      fieldError.value = error;
      throw "error";
    }
  });
};

const saveCurrentChange = () => {
  if (!address.name == "" || !address.name == null) {
    searchCoords().then(() => save());
  } else {
    save();
  }
};

const nextStep = () => {
  if (!address.name == "" || !address.name == null) {
    searchCoords().then(() => proceed());
  } else {
    proceed();
  }
};

const searchAddress = (e) => {
  if (e?.get) {
    setCoords(e.get("coords"));
    ymaps.value.geocode(coords.value).then((res) => {
      const obj = res.geoObjects.get(0);

      address.name = obj.getAddressLine();
      getAddress(obj);
    });
  }
};

const getAddress = (obj) => {
  let arrAddress = obj.properties.get(
    "metaDataProperty.GeocoderMetaData.Address.Components"
  );

  hotelData.address = JSON.stringify(arrAddress);
  hotelData.coordinates = JSON.stringify(coords.value);
};

const setCoords = (vl) => {
  fieldError.value = "";
  coords.value = vl;
  coord.value = vl;
};

const addressInit = () => {
  if (userStore.isGotLocation) {
    ymaps.value = window.ymaps;
    suggestView.value = new ymaps.value.SuggestView("address");

    if (address.coordinates) {
      setCoords(address.coordinates);
    }
  }
};

watch(
  () => userStore.isGotLocation,
  () => addressInit()
);

onMounted(() => {
  addressInit();
});
</script>

<style scoped lang="stylus">
@import '../../assets/styles/vars.styl';
.create__address {
  &-map {
    height: 280px;
    margin-bottom: 56px;
    border-radius: 16px;
    margin-top: 40px;

    @media $mobile {
      margin-bottom: 32px;
    }
  }

  .wrapper {
    position: relative
  }

  .address__error {
    position: absolute
    bottom 6px
  }
}
</style>
