<template>
  <div class="calendar" :class="{ filled: calendarFilled, error: error }">
    <span class="form__placeholder">{{ placeholder }}</span>
    <Datepicker
      v-model="picked"
      :clearable="true"
      month-name-format="long"
      :range="multiCalendars"
      :multi-calendars="multiCalendars"
      format="dd.MM.yyyy"
      auto-apply
      :min-date="new Date()"
      :enable-time-picker="false"
      position="left"
    >
      <template #arrow-right>
        <ArrowRightCalendar class="slot-icon" />
      </template>
      <template #arrow-left>
        <ArrowLeftCalendar class="slot-icon" />
      </template>
      <template #input-icon>
        <CalendarIcon class="icon icon--def input-slot-image" />
      </template>
      <!-- <template #clear-icon>
        <CloseIcon class="icon" />
      </template> -->
    </Datepicker>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import Datepicker from "@vuepic/vue-datepicker";
import { ru } from "date-fns/locale";
// import Datepicker from "@vuepic/vue-datepicker.vue";
// import Datepicker from "@vuepic/vue-data";
import moment from "moment";
import "moment/dist/locale/ru";
import "@vuepic/vue-datepicker/dist/main.css";
import {
  CalendarIcon,
  ArrowLeftCalendar,
  ArrowRightCalendar,
  CloseIcon,
} from "@/layout/icon/index";
moment.locale("ru");
const props = defineProps({
  multiCalendars: Boolean,
  placeholder: String,
  name: {
    type: String,
    required: true,
  },
  errors: {
    type: Object,
    default: null,
  },
  value: Object,
});

const error = computed(() => props.errors?.[props.name]);

const emits = defineEmits(["update:value"]);

const calendarFilled = ref(false);
const picked = computed({
  get: () => {
    if (props.value) {
      return Array.from(Object.values(props.value));
    } else {
      return "";
    }
  },
  set: (vl) => {
    if (vl == null) {
      calendarFilled.value = false;
      emits("update:value", null);
    } else {
      calendarFilled.value = true;
      emits("update:value", {
        check_in: moment(vl[0]).format("YYYY-MM-DD"),
        check_out: moment(vl[1]).format("YYYY-MM-DD"),
      });

      if (props.errors) {
        props.errors[props.name] = null;
      }
    }
  },
});

onMounted(() => {
  if (picked.value !== "") {
    calendarFilled.value = true;
  }
});
</script>
