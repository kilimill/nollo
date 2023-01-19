<template>
  <section class="create__contacts">
    <form class="create__component-inner" ref="contactsForm">
      <p class="text_middle opacity-50 mb-24">Оставьте удобные виды связи с гостями</p>
      <ul class="create__list mb-24">
        <li class="create__list-item" v-for="(contact, i) in hotelData.contacts" :key="i">
          <input
            hidden
            v-if="contact?.id"
            :name="'contacts[' + i + '][id]'"
            :value="contact.id"
          />
          <v-select
            :name="'contacts[' + i + '][type_id]'"
            label="Тип"
            :data="contactTypes"
            :errors="errors?.contacts"
            :errorKey="'contacts.' + i + '.type_id'"
            v-model:value="contact.type_id"
          />

          <v-input
            v-if="contact.type_id !== 1"
            label="Контакт"
            type="text"
            :errors="errors?.contacts"
            :errorKey="'contacts.' + i + '.value'"
            :name="'contacts[' + i + '][value]'"
            v-model:value="contact.value"
          />

          <v-phone
            v-else
            label="Контакт"
            type="text"
            :errors="errors?.contacts"
            :errorKey="'contacts.' + i + '.value'"
            :name="'contacts[' + i + '][value]'"
            v-model:value="contact.value"
          />

          <button
            class="create__list-delete"
            v-if="i !== 0"
            @click.prevent="removeArea(i)"
          >
            <TrashIcon class="icon icon--def icon_red" />
          </button>
        </li>
      </ul>
      <button class="btn btn_control btn_black" @click.prevent="addArea">
        <PlusIcon class="icon icon--small" />
        <span>Добавить еще контакт</span>
      </button>

      <UpsertHotelButtons :form="contactsForm" />
    </form>
  </section>
</template>

<script setup>
import { computed, ref, inject } from "vue";
import vPhone from "../vue-custom/vPhone.vue";
import vSelect from "../vue-custom/vSelect.vue";
import useDinamicArea from "@/composables/hotels-edit/useDinamicArea.js";
import { PlusIcon, TrashIcon } from "@/layout/icon/index";
import UpsertHotelButtons from "@/components/upsert-hotel/UpsertHotelButtons.vue";

const { hotelData, errors } = inject("create");

const contactsForm = ref();

const contactTemplate = () => {
  return {
    type_id: null,
    value: null,
  };
};

const removeContactUrl = computed(() => `hotels/${hotelData.id}/contacts/`);
const { addArea, removeArea } = useDinamicArea({
  arr: hotelData,
  key: "contacts",
  templateObj: contactTemplate,
  url: removeContactUrl,
});

const contactTypes = [
  {
    id: 1,
    name: "телефон",
  },
  {
    id: 2,
    name: "email",
  },
  {
    id: 3,
    name: "сайт",
  },
  {
    id: 4,
    name: "telegram",
  },
  {
    id: 5,
    name: "vk",
  },
];
</script>
