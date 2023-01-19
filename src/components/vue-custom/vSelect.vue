<template>
  <div
    class="select"
    data-state=""
    ref="selectSingle"
    :class="{ 'select-scroll': data?.length > 5, error: error }"
  >
    <input
      hidden
      ref="selectInput"
      type="radio"
      :name="name"
      :value="value"
      :checked="value"
    />
    <input
      id="selectInput"
      class="form__input"
      :value="data.find((item) => item.id == value)?.name"
      placeholder="1"
      readonly
    />

    <span class="form__placeholder"> {{ label }}</span>
    <label class="select__btn" for="selectInput" @click.prevent="toggleMenu"></label>

    <div class="select__content">
      <div class="select__content-wrapper custom-scroll">
        <div class="select__content-item" v-for="(item, i) in data" :key="i">
          <input
            class="select__input"
            :id="name + i"
            type="radio"
            :value="item.id"
            v-model="iValue"
            hidden
          />
          <label class="select__label" :for="name + i">{{ item.name }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, computed, ref } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  data: {
    type: Array,
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
});
const error = computed(
  () => props.errors?.[props.errorKey ? props.errorKey : props.name]
);
const emits = defineEmits(["update:value"]);

const selectSingle = ref("select_" + props.name);
const selectInput = ref("input_" + props.name);
const selectSingleLabel = ref();

const toggleMenu = () => {
  if ("active" === selectSingle.value.getAttribute("data-state")) {
    selectSingle.value.setAttribute("data-state", "");
  } else {
    selectSingle.value.setAttribute("data-state", "active");
  }
};

const closeMenu = (e) => {
  if (
    e.target !== selectSingleLabel.value &&
    "active" === selectSingle.value.getAttribute("data-state")
  ) {
    selectSingle.value.setAttribute("data-state", "");
  }
};

const iValue = computed({
  get: () => props.value,
  set: (vl) => {
    emits("update:value", vl);
    selectSingle.value.setAttribute("data-state", "");
    if (!props.errors) {
      return;
    }

    props.errors[props.errorKey ? props.errorKey : props.name] = null;
  },
});

onMounted(() => {
  selectSingleLabel.value = selectSingle.value.querySelector(".select__btn");
  window.addEventListener("click", closeMenu);
});

onUnmounted(() => {
  window.removeEventListener("click", closeMenu);
});
</script>

<style scoped lang="stylus">
@import '../../assets/styles/vars.styl';
.select {
  position: relative;
  width: 100%;
  height: var(--heigth-elems);
  border-radius: var(--radius-def);
  background-color: #F5F5F5;

  .form__input {
    position: absolute;
    width: calc(100% - 74px);
    top: 31px;
    left: 24px;
    z-index: 1;
    pointer-events: none;
  }

  &[data-state="active"] .select__btn,
  .form__input:focus ~ .select__btn {
    border-color: #06CC79;
    box-shadow: 0 0 0 4px #BFFDE3;
    border-radius: 16px;
  }

  &.error {
    border-color #F72921
    background-color: #FFF2F7;

    .select__btn-label {
      color #F72921
    }
  }

  &-scroll {
    .select__content-wrapper {
      height 322px;
      overflow-y: scroll;
      margin-right: 3px
    }
  }

  &_white {
    background-color: #fff;
  }

  &[data-state='active'] {
    .select__btn {
      &::before {
        transform: translate(-3px, -50%) rotate(-45deg);
      }

      &::after {
        transform: translate(3px, -50%) rotate(45deg);
      }
    }

    .select__content {
      opacity: 1;
      z-index: 100;
      height auto
    }

    .select__label {
      max-height: 100%;
      border-top-width: 1px;
    }
  }
}

.select__btn {
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 10px 24px;
  cursor: pointer;
  border-radius: var(--radius-def);
  border: 2px solid transparent;

  &::before, &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 24px;
    display: block;
    width: 10px;
    height: 2px;
    transition: all 0.3s ease-out;
    background-color: $black;
    transform: translate(-3px, -50%) rotate(45deg);
  }

  &::after {
    transform: translate(3px, -50%) rotate(-45deg);
  }

  &-label {
    margin: auto 0;
    opacity: 0.7;
  }
}

.select__content {
  position: absolute;
  overflow: hidden;
  top: 82%;
  left: 2px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: calc(100% - 4px);
  height 0
  padding: 10px 0;
  background-color: #F5F5F5;
  border-top: none;
  border-bottom-left-radius: var(--radius-def);
  border-bottom-right-radius: var(--radius-def);
  transition: all 0.3s ease-out;
  opacity: 0;
  z-index: 8;
  box-shadow: -9px -10px 11px rgba(0, 0, 0, 0.01), 18px 20px 37px rgba(0, 0, 0, 0.06);
}

.select__input {
  &:checked + label {
    background-color: #dedede;
  }

  &:disabled + label {
    opacity: 0.6;
    pointer-events: none;
  }
}

.select__label {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--heigth-elems);
  max-height: 0;
  padding: 0 24px;
  transition: background-color 0.2s ease-out;
  cursor: pointer;
  overflow: hidden;
  color: $black;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100%;
    width: 4px;
    background-color: transparent;
    transition: background-color 0.2s;
  }

  & + input + & {
    border-top: 0 solid #C7CCD160;
  }

  &:hover, &:focus {
    background-color: #BFFDE3 !important;

    &::before {
      background-color: $green;
    }
  }
}
</style>
