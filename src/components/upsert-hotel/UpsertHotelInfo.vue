<template>
  <section class="create__info">
    <!-- //- h2.create__component-title.title_up-middle Информация для гостей -->

    <form class="create__component-inner">
      <p class="text_middle opacity-50 mb-24">
        Последний этап добавления объекта, который поможет гостям узнать больше об
        условиях вашей турбазы
      </p>
      <v-message
        class="mb-32"
        label="Как добраться"
        name="detailed_route"
        :errors="errors?.info"
        v-model:value="hotelData.detailed_route"
      />

      <v-message
        class="mb-32"
        label="Условия проживания"
        name="conditions"
        :errors="errors?.info"
        v-model:value="hotelData.conditions"
      />

      <h3 class="title_middle mb-24">Сезон работы</h3>

      <ul class="create__info-list mb-40">
        <li class="create__info-item mb-24" v-for="season in seasonList" :key="season.id">
          <label class="form__label-radio">
            <input
              class="form__radio"
              type="radio"
              name="season_id"
              :value="season.id"
              v-model="hotelData.season_id"
            />
            <span class="controls_middle">{{ season.name }}</span>
          </label>
        </li>
      </ul>

      <h3 class="title_middle mb-24">Условия заселения</h3>

      <v-select
        class="mb-32"
        name="min_days"
        label="Минимальный срок бронирования"
        :data="minDayList"
        :errors="errors?.info"
        v-model:value="hotelData.min_days"
      />

      <div class="grid grid_2">
        <v-select
          name="check_in_hour"
          label="Время заезда"
          :errors="errors?.info"
          :data="checkList"
          v-model:value="hotelData.check_in_hour"
        />

        <v-select
          name="check_out_hour"
          label="Время выезда"
          :errors="errors?.info"
          :data="checkList"
          v-model:value="hotelData.check_out_hour"
        />
      </div>

      <UpsertHotelButtons />
    </form>
  </section>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import vMessage from "../vue-custom/VMessage.vue";
import vSelect from "../vue-custom/vSelect.vue";
import { decline } from "@/composables/useDeclination.js";
import UpsertHotelButtons from "@/components/upsert-hotel/UpsertHotelButtons.vue";

const { hotelData, errors } = inject("create");

const seasonList = [
  {
    id: 1,
    name: "Круглогодично",
  },
  {
    id: 2,
    name: "В теплое время года",
  },
  {
    id: 3,
    name: "В теплое время года и новогодние праздники",
  },
];

const checkList = ref([]);
const minDayList = ref([]);

const generateCheckTime = () => {
  for (let i = 0; i <= 23; i++) {
    let timeObj = {
      id: i,
      name: i < 10 ? `0${i}:00` : i + ":00",
    };

    checkList.value.push(timeObj);
  }
};

const generateMinDays = () => {
  for (let i = 1; i <= 30; i++) {
    minDayList.value.push({
      id: i,
      name: decline(i, "days"),
    });
  }
};

onMounted(() => {
  generateMinDays();
  generateCheckTime();
});
</script>
