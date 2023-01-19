<template>
  <div class="form__wrapper" :class="{ 'form__wrapper_with-icon': icon }">
    <input
      class="form__input"
      :id="name"
      ref="phoneInput"
      type="tel"
      maxlength="18"
      :value="toMask(value)"
      @input="onPhoneChange"
      @keydown="onPhoneKeyDown"
      @paste="onPhonePaste"
      :readonly="readonly"
      :placeholder="label"
      :required="required"
    />
    <input hidden :id="name + '_hidden'" :name="name" :value="value" />
    <label class="form__label" :for="name" :class="{ error: error }">
      <PhoneIcon class="icon form__label-icon" v-show="icon" />
    </label>
    <span class="form__placeholder">{{ label }}</span>
    <div class="form__label-clear" v-show="!readonly" @click.prevent="resetValue">
      <CloseIcon class="icon" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { toMask } from "@/composables/useMask";
import { PhoneIcon, CloseIcon } from "@/layout/icon/index";

const props = defineProps({
  icon: {
    type: String,
    default: null,
  },
  label: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    required: true,
  },
  value: [String, Number],
  errors: {
    type: Object,
    default: null,
  },
  errorKey: {
    type: String,
    default: null,
  },
  readonly: {
    type: Boolean,
    default: null,
  },
  required: {
    type: Boolean,
    default: null,
  },
});

const error = computed(
  () => props.errors?.[props.errorKey ? props.errorKey : props.name]
);

const phoneInput = ref(props.name);
const emits = defineEmits(["update:value"]);

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g, "");
};

const onPhonePaste = function (e) {
  var input = e.target;
  var pasted = e.clipboardData || window.clipboardData;

  if (pasted) {
    var pastedText = pasted.getData("Text");
    if (/\D/g.test(pastedText)) {
      emits("update:value", input.value.replace(/\D/g, ""));
      return;
    }
  }
};

const onPhoneKeyDown = (e) => {
  if (e.keyCode == 8 && props.value?.length === 3) {
    resetValue();
    return;
  }
};

const onPhoneChange = (e) => {
  var input = e.target,
    inputNumbersValue = getInputNumbersValue(input),
    selectionStart = input.selectionStart;

  if (!inputNumbersValue) {
    return (input.value = "");
  }

  if (input.value.length != selectionStart) {
    // Editing in the middle of input, not last symbol
    if (e.data && /\D/g.test(e.data)) {
      // Attempt to input non-numeric symbol
      input.value = inputNumbersValue;
    }
    return;
  }

  if (error.value) {
    props.errors[props.errorKey ? props.errorKey : props.name] = null;
  }

  input.value = toMask(inputNumbersValue);
  emits("update:value", input.value.replace(/\D/g, ""));

  if (!props.errors) {
    return;
  }

  props.errors[props.errorKey ? props.errorKey : props.name] = null;
};

const resetValue = () => {
  phoneInput.value.value = "";
  emits("update:value", "");
};

onMounted(() => {
  if (props.value) {
    phoneInput.value.value = toMask(props.value);
  }
});
</script>
