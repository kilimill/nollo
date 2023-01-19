<template>
  <router-link class="popular__item" to="/popular-card">
    <img class="popular__item-img" src="" alt="Фото места" />
    <div class="popular__item-info">
      <h2 class="controls_bigger mb-8">Пироговское водохранилище</h2>
      <p class="text_middle opacity-70">Тверская область</p>
    </div>
  </router-link>
</template>

<style scoped lang="stylus">
@import '../../assets/styles/vars.styl';
.popular {
  &__item {
    height: 288px;
    padding: 24px;
    border-radius: var(--radius-def);

    &-img {
      border-radius: var(--radius-def);
    }

    &:hover {
      .popular__item-img {
        transform: scale(1.1);
      }

      .text_middle {
        opacity: 1;
      }
    }
  }
}
</style>
