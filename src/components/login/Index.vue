<template>
  <div class="authorization__wrapper">
    <div class="authorization__inner">
      <div class="authorization__content-header">
        <h2 class="title_bigger mb-16">Добро пожаловать</h2>
        <p class="text_bigger opacity-50">Введите номер для продолжения работы</p>
      </div>

      <form class="authorization__form" @submit.prevent="auth">
        <v-phone
          class="mb-24"
          icon="phone"
          label="Телефон"
          type="tel"
          name="phone"
          :errors="errors"
          v-model:value="phone"
          required
        />

        <button class="authorization__sub btn btn_green" :disabled="isSent">
          <span class="btn__content">Далее</span>
        </button>
      </form>

      <div class="authorization__helper">
        <span class="text_middle authorization__helper-text mb-24"
          >или войти с помощью</span
        >

        <ul class="social">
          <li class="social__item">
            <button class="btn social__btn">
              <VkIcon class="icon icon--def" />
            </button>
          </li>
          <li class="social__item">
            <button class="btn social__btn">
              <OdnoklassnikiIcon class="icon icon--def" />
            </button>
          </li>
          <li class="social__item">
            <button class="btn social__btn">
              <GoogleIcon class="icon icon--def" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import vPhone from "../vue-custom/vPhone.vue";
import { useApi } from "@/composables/useApi";
import { GoogleIcon, OdnoklassnikiIcon, VkIcon } from "@/layout/icon/index";

const emit = defineEmits(["update:confirm"]);
const phone = ref();

const isSent = ref(false);
const errors = ref({});
const auth = () => {
  isSent.value = true;
  useApi()
    .auth({ phone: phone.value })
    .then(() => emit("update:confirm", phone.value))
    .catch((response) => {
      if (response.data.errors) {
        errors.value = response.data.errors;
      }
    })
    .finally(() => (isSent.value = false));
};
</script>
