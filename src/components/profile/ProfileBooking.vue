<template lang="pug">
section.profile-booking
  NotFound(pageInfo="booking")

  ul.profile-booking__list
    li.profile-booking__item
      img.profile-booking__img(src="@/assets/img/slide.jpg")

      .profile-booking__box
        .profile-booking__header.wrapper.wrapper_h-btw.wrapper_v-ctr
          .alert.alert_wait
            p.controls_middle Ожидает подтверждения
          //- .alert.alert_success
          //-   p.controls_middle Подтверждено
          //- .alert.alert_error
          //-   p.controls_middle Отклонено

          .wrapper.wrapper_v-ctr
            img.profile-booking__avatar(src="@/assets/img/avatar.jpg")
            span.controls_middle.profile-booking__name Дмитрий

        h3.controls_bigger.mb-8 Коттедж «Ультрасовременный домик»
        p.text_middle.opacity-50 Номер «Стандарт»


        .wrapper
          .profile-booking__info 
            .icon
            span.controls_middle.opacity-70 28 апр – 9 мая (11 ночей)

          .profile-booking__info 
            .icon
            span.controls_middle.opacity-70 4 человека

          .profile-booking__info 
            .icon
            span.controls_middle.opacity-70 71 500 ₽
</template>

<script setup>
import NotFound from "@/components/NotFound.vue";
</script>

<style scoped lang='stylus'>
.profile-booking
  &__item
    display flex
    height 240px
    border-radius: 16px
    margin-top 32px
    overflow: hidden
    background-color #fff

    &:first-child
      margin-top 0

  &__header
    margin-bottom 20px

  &__box
    width 100%
    padding 32px

  &__img,
  &__avatar
    object-fit: cover
    object-position: center

  &__img
    width 240px
    height 100%
    border-radius: 16px
    flex-shrink 0

  &__avatar
    width 32px
    height 32px
    margin-right 12px
    border-radius 50%

  &__info
    margin-left 24px

    &:first-child
      margin-left 0




</style>