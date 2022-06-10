<template lang="pug">
section.found
  .container
    form.found__form
      .wrapper.wrapper_v-ctr.mb-24
        label.form__label.found__form-place.form__label_with-icon
          SearchIcon.form__label-icon
          input.form__input.controls_middle(type="text", required)
          span.form__placeholder Место или наименование турбазы

        DataPicker(:multiCalendars="true", placeholder="Даты заезда и выезда")

        label.form__checkbox-label
          input.form__checkbox(
            type="checkbox",
            value="category.value",
            name="kk"
          )
          span.controls_middle.opacity-70 ± 3 дня

      FilterBtns.mb-24

      .wrapper.mb-40
        .form__grid.form__grid_4
          label.form__label
            input.form__input.controls_middle(type="text", required)
            span.form__placeholder Стоимость от

          label.form__label
            input.form__input.controls_middle(type="text", required)
            span.form__placeholder Стоимость до

          CustomSelect

          CustomSelect

        button.btn.btn_green.found__btn Найти

    Catalog
</template>

<script setup>
import DataPicker from "@/layout/DataPicker";
import CustomSelect from "@/layout/CustomSelect.vue";
import FilterBtns from "@/layout/FilterBtns.vue";
import Catalog from "@/components/Catalog.vue";
import { SearchIcon } from "@/layout/icon/index";
</script>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';
@import '@/assets/styles/mixins.styl';

.found {
  &__form {
    &-place {
      max-width: 752px;
      width: 100%;
      margin-right: 32px;
    }

    .calendar {
      max-width: 304px;
      margin-right: 32px;
    }

    .form__checkbox-label span::before {
      background-color: #fff;
    }
  }

  &__btn {
    max-width: 304px;
    width: 100%;
    margin-left: 32px;
  }
}
</style>