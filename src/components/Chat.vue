<template lang="pug">
section.chat
  header.chat__header.wrapper.wrapper_h-btw.wrapper_v-ctr
    .chat__user.wrapper.wrapper_v-ctr
      img.chat__user-avatar(src="@/assets/img/avatar.jpg")

      .chat__user-info 
        p.controls_middle.mb-8 Александр Родничев
        p.text_small.opacity-50 Был в сети 40 минут назад
    
    .chat__settings
      button
        MenuIcon.icon

  .chat__content 
    .chat__hint
      .chat__alert.chat__alert--success
        p.title_pre-middle Александр Родничев отправил запрос на проживание
        p.text_middle Ознакомьтесь с деталями бронирования в боковом блоке и ответьте на запрос.

      .chat__alert.chat__alert--success
        p.title_pre-middle Запрос принят
        p.text_middle 
          span Гость получил уведомление о подтверждении бронирования. 
          span Теперь вы можете отправлять ему сообщения.

      .chat__alert.chat__alert--error
        p.title_pre-middle Запрос отклонен
        p.text_middle 
          span Гость получил уведомление об отмене бронирования.
      
      //- .chat__hint-btns.wrapper.wrapper_h-btw
      //-   button.btn.btn_white Отклонить
      //-   button.btn Принять

    .chat__message.chat__message--left
      .chat__message-info.readed
        time.chat__message-time.text_small 15:52
      .chat__message-item
        p.text_middle Здравствуйте! Очень рады, что Вы выбрали наш коттедж. Будем рады вас принять.

    .chat__message.chat__message--right
      //- .chat__message-info.readed
      //-   time.chat__message-time.text_small 15:52
      .chat__message-item
        p.text_middle Здравствуйте! Очень рады, что Вы выбрали наш коттедж. Будем рады вас принять.
      .chat__message-info.readed
        time.chat__message-time.text_small 15:52
        


  form.form.chat__form
    label.form__label
      input.form__input(placeholder="Вы сможете отправлять сообщения после принятия запроса")

</template>

<script setup>
import {MenuIcon} from '@/layout/icon/index'
</script>

<style scoped lang='stylus'>
.chat
  max-height: 926px
  border-radius: 16px
  object-fit: cover
  object-position center
  background-color #FFFFFF

  &__message
    display flex
    align-items flex-end
    margin-top 8px

    &:first-child
      margin-top 0

    &--left
      justify-content flex-end

      .chat__message-item
        border-radius: 12px 12px 0px 12px;
      
      .chat__message-info
        margin-right 8px

        &.readed::after
          display block
          margin-left 8px

    &--right
      justify-content flex-start

      .chat__message-item
        border-radius: 12px 12px 12px 0px;

      .chat__message-info
        margin-left 8px

        &.readed::before
          display block
          margin-right 8px

    &-item
      max-width: 598px
      padding 16px 24px
      background-color #F5F5F5

    &-info
      position relative
      display flex
      align-items: flex-end

      &::before,
      &::after
        content ''
        display block
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 21 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3.44444L6.52326 9L14.4767 1M12.2674 9L20 1' stroke='%2306CC79' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
        width 21px
        height 10px
        margin-bottom 2px
        display none

    &-time
      color #C8C8C8

  &__header
    padding 24px 32px
    border-bottom 2px solid #F5F5F5

  &__user
    &-avatar
      width 48px
      height 48px

    &-info 
      margin-left 16px

  &__content
    padding 0 24px 40px

  &__hint
    .title_pre-middle
      margin-bottom 12px

    &-btns
      margin-top 40px

      .btn
        width 48%

  &__alert
    padding 24px
    border-radius: 8px
    margin-top 12px

    &:first-child
      margin-top 0

    &--error
      background-color #FFF2F7

    &--success
      background-color #F0FFF4

  &__form
    border-top 2px solid #F5F5F5

    .form__label
      background-color #FFFFFF

    .form__input::placeholder
      color #C8C8C8
</style>