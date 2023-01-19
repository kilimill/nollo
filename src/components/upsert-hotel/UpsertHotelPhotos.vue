<template>
  <section class="create__photos">
    <form class="create__component-inner" ref="photosForm">
      <p class="text_middle opacity-50 mb-24">
        Создайте галерею фотографий и отметьте одну, которая будет отображаться в карточке
      </p>
      <DropFiles
        name="media[]"
        :media="hotelData.media"
        :id="hotelData.id"
        :errors="errors?.photos"
      />

      <UpsertHotelButtons :form="photosForm" />
    </form>
  </section>
</template>

<script setup>
import { inject, ref } from "vue";
import UpsertHotelButtons from "@/components/upsert-hotel/UpsertHotelButtons.vue";
import DropFiles from "@/layout/drop-files/DropFiles.vue";

const { hotelData, errors } = inject("create");

const photosForm = ref();
</script>
