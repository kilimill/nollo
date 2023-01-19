<template>
  <div class="map">
    <yandexMap
      :controls="['zoomControl']"
      :coords="coords"
      :zoom="15"
      :options="optionsMap"
    >
      <ymapMarker :marker-id="111" :coords="coords" :options="markerOptions" />
    </yandexMap>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import useMap from "@/composables/useMap.js";

const props = defineProps({
  coords: Array,
});

const { optionsMap, markerOptions } = useMap();

const coords = ref(["55", "44"]);

onMounted(() => {
  if (props.coords) {
    coords.value = props.coords;
  }
});
</script>
