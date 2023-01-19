<template>
  <div
    class="form__description"
    @click.prevent="focusText($event)"
    :class="{ error: error }"
  >
    <textarea
      class="form__description-text custom-scroll"
      ref="textarea"
      :name="name"
      :value="value"
      :placeholder="label"
      @input="onValueChange"
    />
    <span class="form__placeholder">{{ label }}</span>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
const props = defineProps({
  label: String,
  name: {
    type: String,
    required: true,
  },
  value: String,
  errors: {
    type: Object,
    default: null,
  },
  errorKey: {
    type: String,
    default: null,
  },
});
const error = computed(
  () => props.errors?.[props.errorKey ? props.errorKey : props.name]
);
const textarea = ref(props.name);
const emits = defineEmits(["update:value"]);

const focusText = (e) => {
  if (e.target?.classList[0] === "form__description") {
    textarea.value.focus();
  }
};

const onValueChange = (e) => {
  emits("update:value", e.target.value);
  if (!props.errors) {
    return;
  }

  props.errors[props.errorKey ? props.errorKey : props.name] = null;
};
</script>

<style lang="stylus" scoped>
.testet {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  top: 0;
}
</style>
