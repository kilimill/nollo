<template>
  <section class="create__Lakes">
    <!-- //- h2.create__component-title.title_up-middle Близлежащие водоемы -->

    <form class="create__component-inner" ref="lakesForm">
      <p class="text_middle opacity-50 mb-24">
        В случае, если водоемов поблизости нет, можете пропустить этот шаг
      </p>
      <ul class="create__list mb-24">
        <li class="create__list-item mb-32" v-for="(lake, i) in hotelData.lakes" :key="i">
          <v-select
            :name="'lakes[' + i + '][id]'"
            label="Река, море или озеро"
            :data="lakes"
            :errors="errors?.lakes"
            :errorKey="'lakes.' + i + '.id'"
            v-model:value="lake.id"
          />

          <v-input
            label="Удаленность от берега, м"
            type="number"
            :errors="errors?.lakes"
            :errorKey="'lakes.' + i + '.distance_shore'"
            :name="'lakes[' + i + '][distance_shore]'"
            v-model:value="lake.distance_shore"
          />

          <button
            class="create__list-delete"
            @click.prevent="deleteArea(i)"
            v-if="i !== 0"
          >
            <TrashIcon class="icon icon--def icon_red" />
          </button>
        </li>
      </ul>
      <button class="btn btn_control btn_black" @click.prevent="addArea">
        <PlusIcon class="icon icon--small" />
        <span>Добавить еще водоем</span>
      </button>

      <UpsertHotelButtons :form="lakesForm" />
    </form>
  </section>
</template>

<script setup>
import { inject, ref, onMounted } from "vue";
import vSelect from "../vue-custom/vSelect.vue";
import { getDefParams } from "@/composables/useDefFetch.js";
import useDinamicArea from "@/composables/hotels-edit/useDinamicArea.js";
import { PlusIcon, TrashIcon } from "@/layout/icon/index";
import UpsertHotelButtons from "@/components/upsert-hotel/UpsertHotelButtons.vue";

const lakesForm = ref();

const { hotelData, errors } = inject("create");

const lakeTemplate = () => {
  return {
    type_id: null,
    value: null,
  };
};
const { addArea, deleteArea } = useDinamicArea({
  arr: hotelData,
  key: "lakes",
  templateObj: lakeTemplate,
});
const lakes = ref([]);

onMounted(() => {
  getDefParams("lakes", lakes);
});
</script>
