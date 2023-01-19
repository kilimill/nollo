<template>
  <section class="create__categories">
    <!-- //- h2.create__component-title.title_up-middle Категории -->

    <form class="create__component-inner" ref="formCategories">
      <p class="text_middle opacity-50 mb-24">
        Отметьте категории, которые подходят вашей турбазе
      </p>
      <ol class="create__categories-list">
        <li
          class="create__categories-item"
          v-for="(category, i) in useDefaultStore().tags"
          :key="i"
        >
          <label class="form__checkbox-label">
            <input
              class="form__checkbox"
              type="checkbox"
              :value="category.id"
              name="tags[]"
              v-model="hotelData.tags"
            />
            <span class="controls_middle"> {{ category.name }}</span>
          </label>
        </li>
      </ol>

      <UpsertHotelButtons :form="formCategories" />
    </form>
  </section>
</template>

<script setup>
import { inject, ref } from "vue";
import { useDefaultStore } from "@/stores/defaultStore";
import UpsertHotelButtons from "@/components/upsert-hotel/UpsertHotelButtons.vue";

const { hotelData } = inject("create");
const formCategories = ref();
</script>

<style setup lang="stylus">
@import '../../assets/styles/vars.styl';

.create__categories {
  &-list {
    columns: 2;
    margin-bottom: -24px;

    @media $mobile {
      columns: 1;
      margin-bottom: 0;
    }
  }

  &-item {
    margin-bottom: 24px;

    @media $mobile {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
