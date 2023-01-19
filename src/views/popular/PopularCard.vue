<template>
  <div class="popular">
    <div class="container container_mob-hide">
      <div class="popular__item mb-32">
        <img class="popular__item-img" src="" alt="Фото места" />
        <div class="popular__item-info">
          <h2 class="title_up-middle mb-16">Пироговское водохранилище</h2>
          <p class="text_middle opacity-70">Тверская область</p>
        </div>
      </div>
    </div>

    <div class="container">
      <form class="form wrapper mb-48">
        <v-input
          icon="search"
          label="Место или наименование турбазы"
          type="text"
          name="place"
        />

        <v-input label="Стоимость от" type="text" name="costFrom" />

        <v-input label="Стоимость до" type="text" name="costTo" />

        <button class="popular__btn btn btn_green">
          <span class="btn__conten">Найти</span>
        </button>
      </form>

      <Catalog title="Популярные базы отдыха" />
    </div>
  </div>
</template>

<script setup>
import Catalog from "@/components/Catalog.vue";
</script>

<style lang="stylus" scoped>
@import '../../assets/styles/vars.styl';
.popular {
  .wrapper {
    @media $mobile {
      display: block;
    }
  }

  .form__wrapper {
    flex-shrink: 0;
    max-width: 192px;
    width 100%
    margin-right: 32px;
    background-color: #FFFFFF;

    &:first-child {
      max-width: 640px;
      width: 100%;
      flex-shrink: 1;

      @media $mobile {
        max-width: 100%;
      }
    }

    @media $mobile {
      max-width: 100%;
      margin-right: 0;
      margin-bottom: 24px;
    }
  }

  &__btn {
    max-width: 192px;
    width: 100%;

    @media $tablet {
      max-width: 128px;
    }

    @media $mobile {
      max-width: 100%;
    }
  }

  .card {
    margin-bottom: 0;
  }

  .popular__item {
    height: 440px;
    border-radius: 32px;
    padding: 40px;

    &-img {
      border-radius: 32px;
    }

    @media $tablet {
      height: 400px;
    }

    @media $mobile {
      height: 400px;
      padding: 40px 24px;
    }
  }
}
</style>
