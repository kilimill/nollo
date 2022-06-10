<template lang="pug">
.calendar
  Datepicker(
    v-model="picked",
    :clearable="true",
    monthNameFormat="long",
    locale="ru",
    :range="multiCalendars",
    :multiCalendars="multiCalendars",
    :placeholder="placeholder",
    autoApply,
    required,
    :minDate="new Date()",
    :enableTimePicker="false"
  )
    template(#arrow-right)
      ArrowRightCalendar.slot-icon
    template(#arrow-left)
      ArrowLeftCalendar.slot-icon
    template(#input-icon)
      CalendarIcon.icon.input-slot-image
</template>


<script setup>
import { defineProps, ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import {
  CalendarIcon,
  ArrowLeftCalendar,
  ArrowRightCalendar,
} from "@/layout/icon/index";

defineProps({
  multiCalendars: Boolean,
  placeholder: String,
});

const picked = ref();
</script>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';

</style>