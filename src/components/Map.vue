<template>
  <yandexMap :coords="coords" :zoom="10" :settings="settings">
    <ymapMarker
      :coords="coords"
      marker-id="123"
      hint-content="some hint"
      marker-type="placemark"
    />
  </yandexMap>
</template>
  
<script>
const settings = {
  apiKey: "932c21e6-ab0e-47d6-b65e-56afd7356cf9",
  lang: "ru_RU",
  coordorder: "latlong",
  enterprise: false,
  version: "2.1",
};
import { yandexMap, ymapMarker, loadYmap } from "vue-yandex-maps";

export default {
  components: { yandexMap, ymapMarker },
  // other options

  data() {
    return {
      settings: settings,
      coords: [54.82896654088406, 39.831893822753904],
    };
  },
  // methods: {
  //   onClick(e) {
  //     this.coords = e.get("coords");
  //   },
  // },
  async mounted() {
    await loadYmap(settings);
    console.log(window.ymaps);
  },
};
</script>
