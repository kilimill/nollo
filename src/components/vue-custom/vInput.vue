<template>
  <div class="form__wrapper" :class="{ 'form__wrapper_with-icon': currentIcon }">
    <input
      class="form__input"
      :id="name"
      :type="type"
      :name="name"
      @input="onInputChange"
      :value="value"
      :readonly="readonly"
      :placeholder="label"
      :required="required"
    />
    <label class="form__label" :for="name" :class="{ error: error }">
      <component class="icon form__label-icon" :is="currentIcon" />
    </label>
    <span class="form__placeholder">{{ label }}</span>
    <div class="form__label-clear" @click.prevent="resetValue" v-show="!readonly">
      <CloseIcon class="icon" />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import {
  CloseIcon,
  LockIcon,
  MailIcon,
  PhoneIcon,
  ProfileIcon,
  SearchIcon,
} from "@/layout/icon/index";

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

const iconList = {
  profile: ProfileIcon,
  lock: LockIcon,
  mail: MailIcon,
  phone: PhoneIcon,
  search: SearchIcon,
};

const emits = defineEmits(["update:value"]);

const onInputChange = (e) => {
  emits("update:value", e.target.value);

  if (!props.errors) {
    return;
  }

  props.errors[props.errorKey ? props.errorKey : props.name] = null;
};

const resetValue = () => {
  emits("update:value", "");
};

const currentIcon = computed(() => (props.icon ? iconList[props.icon] : false));
</script>
