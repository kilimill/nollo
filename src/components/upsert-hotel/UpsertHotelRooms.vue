<template>
  <section class="rooms">
    <!-- //- h2.create__component-title.title_up-middle Контактные данные -->

    <form class="create__component-inner" ref="roomsForm">
      <p class="text_middle opacity-50 mb-24">Оставьте удобные виды связи с гостями</p>
      <div class="rooms__content">
        <div class="rooms__item" v-for="(room, i) in hotelData.rooms" :key="i">
          <div class="wrapper wrapper_h-btw wrapper_v-ctr">
            <h3 class="title_pre-middle">Номер №{{ i + 1 }}</h3>

            <button class="btn btn_control btn_red" @click.prevent="removeArea(i)">
              <TrashIcon class="icon icon--small" />
              <span>Удалить</span>
            </button>
          </div>

          <div class="grid grid_2 mb-32">
            <input
              hidden
              v-if="room?.id"
              :name="'rooms[' + i + '][id]'"
              :value="room.id"
            />
            <v-input
              label="Наименование"
              :name="'rooms[' + i + '][name]'"
              :errors="errors?.rooms"
              :errorKey="'rooms.' + i + '.name'"
              v-model:value="room.name"
            />
            <v-input
              :name="'rooms[' + i + '][guest_count]'"
              label="Количество гостей"
              type="number"
              :errors="errors?.rooms"
              :errorKey="'rooms.' + i + '.guest_count'"
              v-model:value="room.guest_count"
            />
          </div>
          <div class="grid grid_2 mb-32">
            <v-input
              :name="'rooms[' + i + '][price]'"
              label="Стоимость"
              type="number"
              :errors="errors?.rooms"
              :errorKey="'rooms.' + i + '.price'"
              v-model:value="room.price"
            />
            <v-input
              :name="'rooms[' + i + '][price_weekend] '"
              label="Стоимость в выходные"
              type="number"
              :errors="errors?.rooms"
              :errorKey="'rooms.' + i + '.price_weekend'"
              v-model:value="room.price_weekend"
            />
          </div>
          <div class="rooms__details grid grid_2 mb-32">
            <v-select
              :name="'rooms[' + i + '][meals_id]'"
              label="Питание"
              :data="defaultStore.meals"
              :errors="errors?.rooms"
              :errorKey="'rooms.' + i + '.meals_id'"
              v-model:value="room.meals_id"
            />

            <v-input
              :name="'rooms[' + i + '][quantity]'"
              label="Количество номеров класса"
              type="number"
              :errors="errors?.rooms"
              :errorKey="'rooms.' + i + '.quantity'"
              v-model:value="room.quantity"
            />
          </div>
          <v-message
            class="mb-32"
            :name="'rooms[' + i + '][description]'"
            label="Сообщение"
            :errors="errors?.rooms"
            :errorKey="'rooms.' + i + '.description'"
            v-model:value="room.description"
          />

          <SingleDropFile
            class="mb-32"
            :name="'rooms[' + i + '][media][]'"
            v-model:media="room.media"
            :errors="errors?.rooms"
            :errorKey="'rooms.' + i + '.media'"
            :id="hotelData.id"
          />
        </div>
      </div>
      <button class="btn btn_control" @click.prevent="addArea">
        <PlusIcon class="icon icon--small" />
        <span>Добавить еще номер</span>
      </button>

      <UpsertHotelButtons :form="roomsForm" />
    </form>
  </section>
</template>

<script setup>
import { computed, inject, ref } from "vue";
import vMessage from "../vue-custom/VMessage.vue";
import vSelect from "../vue-custom/vSelect.vue";
import { useDefaultStore } from "@/stores/defaultStore";
import useDinamicArea from "@/composables/hotels-edit/useDinamicArea.js";
import UpsertHotelButtons from "@/components/upsert-hotel/UpsertHotelButtons.vue";
import { PlusIcon, TrashIcon } from "@/layout/icon/index";
import SingleDropFile from "@/layout/drop-files/SingleDropFile.vue";

const { hotelData, errors } = inject("create");

const defaultStore = useDefaultStore();

const roomTemplate = () => {
  return {
    name: null,
    description: null,
    guest_count: null,
    meals_id: null,
    quantity: null,
    price: null,
    price_weekend: null,
    media: null,
  };
};

const removeRoomUrl = computed(() => `hotels/${hotelData.id}/rooms/`);

const { addArea, removeArea } = useDinamicArea({
  arr: hotelData,
  key: "rooms",
  templateObj: roomTemplate,
  url: removeRoomUrl,
});

const roomsForm = ref();
</script>

<style scoped lang="stylus">
.rooms {
  .form__description {
    height: 112px;
  }
}
</style>
