<template>
  <div class="authorization__wrapper">
    <div class="authorization__inner">
      <button class="btn__back btn btn_black" @click="$emit('update:confirm', undefined)">
        <ArrowPrevIcon class="icon icon--def mr-16" />
        <span class="controls_bigger">Назад</span>
      </button>

      <div class="mb-100">
        <div class="authorization__content-header">
          <h2 class="title_bigger mb-16">Введите код из смс</h2>
        </div>

        <form class="authorization__form" @submit.prevent="entry">
          <v-input
            class="mb-24"
            icon="lock"
            label="Код"
            type="text"
            name="code"
            :errors="errors"
            v-model:value="code"
            required
          />

          <button class="authorization__sub btn btn_green" :disabled="isSent">
            <span class="btn__content">Войти</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useApi } from "@/composables/useApi";
import { ArrowPrevIcon } from "@/layout/icon/index";

const router = useRouter();
defineEmits(["update:confirm"]);

const props = defineProps({
  confirm: String,
});

const code = ref();
const errors = ref({});
const isSent = ref(false);
const entry = () => {
  isSent.value = true;
  useApi()
    .inputPrivateCode({
      code: code.value,
      phone: props.confirm,
    })
    .then(() => getUser())
    .catch((response) => {
      isSent.value = false;
      if (response?.data?.errors) {
        errors.value = response.data.errors;
      }
    });
};

const getUser = () => {
  useApi()
    .getProfile("profile")
    .then(() => {
      router.back();
    })
    .finally(() => (isSent.value = false));
};
</script>

<style scoped>
.btn__back {
  padding-right: 0;
  padding-left: 0;
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}
</style>
