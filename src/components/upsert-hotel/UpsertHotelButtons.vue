<template>
  <div class="create__btns grid grid_2">
    <button class="btn btn_white" @click.prevent="save" :disabled="isSent">
      Сохранить как черновик
    </button>

    <button
      class="btn btn_green"
      v-if="!isLastStep"
      @click.prevent="proceed"
      :disabled="isSent"
    >
      Продолжить
    </button>
    <button class="btn btn_green" v-else @click.prevent="proceed" :disabled="isSent">
      Добавить объект
    </button>
  </div>
</template>

<script setup>
import { inject } from "vue";
import useUpsertHotelButtons from "@/composables/useUpsertHotelButtons.js";

const { isLastStep, isSent } = inject("create");

const props = defineProps({
  form: {
    type: Object,
    default: null,
  },
});

const { proceed, save } = useUpsertHotelButtons(props);
</script>
