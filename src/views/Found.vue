<template lang="pug">
section.found
  .container
    form.found__form
      .wrapper.wrapper_v-ctr.mb-24
        label.form__label.found__form-place
          SearchIcon.form__label-icon
          input.form__input.controls_middle(
            placeholder="Место или наименование турбазы"
          )

        DataPicker

        label.form__checkbox-label
          input.form__checkbox(
            type="checkbox",
            value="category.value",
            name="kk"
          )
          span.controls_middle.opacity-70 ± 3 дня

      FilterBtns.mb-24

      .wrapper
        .form__grid.form__grid_4
          label.form__label
            input.form__input.controls_middle(placeholder="Стоимость от")

          label.form__label
            input.form__input.controls_middle(placeholder="Стоимость до")

          CustomSelect

          CustomSelect

        button.btn.btn_green.found__btn Найти
</template>

<script setup>
import DataPicker from "@/layout/DataPicker";
import CustomSelect from "@/layout/CustomSelect.vue";
import FilterBtns from "@/layout/FilterBtns.vue";
import { SearchIcon } from "@/layout/icon/index";
</script>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';
@import '@/assets/styles/mixins.styl';

.found {
  &__form {
    &-place {
      width: vw(752);
      margin-right: vw(32);
    }

    .calendar {
      width: vw(304);
      margin-right: vw(32);
    }

    .form__checkbox-label span::before {
      background-color: #fff;
    }
  }

  &__btn {
    width: vw(304);
    margin-left: vw(32);
  }
}
</style>