<template>
  <section class="create__data">
    <form class="create__component-inner">
      <p class="text_middle pacity-50 mb-24">
        Укажите только название объекта, не добавляя слова "турбаза" или "база отдыха"
      </p>
      <div class="grid grid_2 mb-32">
        <v-input
          label="Наименование"
          type="text"
          name="name"
          :errors="errors?.index"
          v-model:value="hotelData.name"
        />

        <v-select
          name="type_id"
          label="Вид объекта"
          :data="hotelTypes"
          :errors="errors?.index"
          v-model:value="hotelData.type_id"
        />
      </div>
      <v-message
        name="description"
        label="Сообщение"
        :errors="errors?.index"
        v-model:value="hotelData.description"
      />

      <UpsertHotelButtons />
    </form>
  </section>
</template>

<script setup>
import { inject } from "vue";
import vMessage from "../vue-custom/VMessage.vue";
import vSelect from "../vue-custom/vSelect.vue";
import UpsertHotelButtons from "@/components/upsert-hotel/UpsertHotelButtons.vue";

const { hotelData, errors } = inject("create");

const hotelTypes = [
  {
    id: 1,
    name: "отель",
  },
  {
    id: 2,
    name: "база отдыха",
  },
  {
    id: 3,
    name: "санаторий",
  },
];
</script>
