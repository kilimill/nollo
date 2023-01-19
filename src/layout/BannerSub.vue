<template>
  <div class="banner">
    <div class="container">
      <div class="banner__inner">
        <h3 class="title_up-middle mb-16">Будьте всегда в курсе новых предложений</h3>
        <p class="text_middle opacity-50">
          Подпишитесь на e-mail рассылку и Вы узнаете все первыми
        </p>
        <form class="form banner__form">
          <v-input icon="mail" label="E-mail" type="text" name="email" />

          <button class="btn btn_green">
            <span class="btn__content">Подписаться</span>
          </button>
        </form>
      </div>
    </div>
    <img
      class="banner__img"
      src="@/assets/images/details/mail-box.png"
      alt="Картинка Почты"
    />
  </div>
</template>

<style scoped lang="stylus">
@import '../assets/styles/vars.styl';

.banner
  position relative
  background-color #fff
  padding 56px 0
  overflow hidden

  &__inner
    position relative
    z-index 2

  &__img
    position absolute
    top 0
    right 0
    max-width 640px
    width 100%
    height 100%
    object-fit cover

  &__form
    display flex
    align-items center
    margin-top 48px

.form__wrapper
  max-width: 655px
  width 100%
  margin-right 32px

@media $tablet
  .form__wrapper
    max-width: 399px

@media $mobile
  .banner
    padding 48px 0 0 0

    &__form
      flex-direction: column
      margin-top 32px

    &__img
      position static
      transform translateX(-23%)
      margin-top -20px

    .form__wrapper
      max-width: 100%
      margin-right 0
      margin-bottom 24px

    .btn
      width 100%
</style>
