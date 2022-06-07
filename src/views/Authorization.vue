<template lang="pug">
section.authorization
  //- .authorization__bg
  .authorization__content
    .authorization__wrapper
      header.authorization__header(v-if="ss")
        h2.title_bigger.mb-16 Добро пожаловать
        p.text_bigger.opacity-50 Войдите в аккаунт для продолжения работы

      header.authorization__header(v-if="!ss")
        h2.title_bigger.mb-16 Регистрация
        p.text_bigger.opacity-50 Введите свои данные

      form.authorization__form(v-if="ss")
        label.form__label.form__label_with-icon.mb-24
          ProfileIcon.icon.form__label-icon
          input.form__input(type="text" required)
          span.form__placeholder Телефон или e-mail
          button.form__label-clear
            CloseIcon.icon

        label.form__label.form__label_with-icon.error
          LockIcon.icon.form__label-icon
          input.form__input(type="password" required)
          span.form__placeholder Пароль
          button.form__label-clear
            CloseIcon.icon

        p.authorization__text-error.controls_small Неправильно введен пароль

        button.authorization__recover 
          RefreshIcon.icon.icon_green
          p.controls_middle.opacity-70 Восстановить пароль

        button.authorization__sub.btn.btn_green 
          span.btn__content Войти

      form.authorization__form(v-if="!ss")
        label.form__label.form__label_with-icon.mb-24
          ProfileIcon.icon.form__label-icon
          input.form__input(type="text" required)
          span.form__placeholder Имя и фамилия
          button.form__label-clear
            CloseIcon.icon

        label.form__label.form__label_with-icon.mb-24
          MailIcon.icon.form__label-icon
          input.form__input(type="text" required)
          span.form__placeholder Телефон или e-mail
          button.form__label-clear
            CloseIcon.icon

        label.form__label.form__label_with-icon.mb-24
          LockIcon.icon.form__label-icon
          input.form__input(type="password" required)
          span.form__placeholder Пароль
          button.form__label-clear
            CloseIcon.icon

        label.form__label.form__label_with-icon
          LockIcon.icon.form__label-icon
          input.form__input(type="password" required)
          span.form__placeholder Повторите пароль
          button.form__label-clear
            CloseIcon.icon

        .authorization__form-checkboxes
          .authorization__form-checkbox.mb-16
            label.form__checkbox-label
              input.form__checkbox(type="checkbox", value="", name="kk")
              span.controls_middle Согласен с
                a(href="#") правилами сервиса

          .authorization__form-checkbox
            label.form__checkbox-label
              input.form__checkbox(type="checkbox", value="", name="kk")
              span.controls_middle Я представитель турбазы

        button.authorization__sub.btn.btn_green 
          span.btn__content Зарегистрироваться

      .authorization__helper
        span.text_middle.authorization__helper-text.mb-24 или войти с помощью

        ul.social
          li.social__item
            button.btn.social__btn
              VkIcon.icon
          li.social__item
            button.btn.social__btn
              OdnoklassnikiIcon.icon
          li.social__item
            button.btn.social__btn
              GoogleIcon.icon

      p.authorization__reg.text_bigger 
        span.authorization__reg-text Еще нет аккаунта?
        button.authorization__reg-btn Регистрация
</template>

<script setup>
import {
  ProfileIcon,
  LockIcon,
  MailIcon,
  CloseIcon,
  RefreshIcon,
  VkIcon,
  GoogleIcon,
  OdnoklassnikiIcon,
} from "@/layout/icon/index";
const ss = true;
</script>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';

.authorization {
  display: flex;
  width: 100%;
  height: 100%;

  &__header {
    margin-bottom: 40px;
  }

  // &__bg {
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   // bottom: 0
  //   width: 624px;
  //   min-height: 100vh;
  //   height: 100%;
  //   background-color: #FFFFFF;
  //   border-radius: 0px 32px 32px 0px;
  // }

  &__wrapper {
    width: 100%;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 1;
    padding: 32px 64px;
    max-width: 624px;
    width: 100%;
    height: 100%;
  }

  &__recover {
    display: flex;
    align-items: center;
    margin: 32px 0 32px auto;

    .icon {
      margin-right: 8px;
    }
  }

  &__form {
    &-checkboxes {
      margin: 32px 0;

      a {
        color: $green;
      }
    }
  }

  .form__label.error {
    background-color: #FFF2F7;
    border: 2px solid #F72921;

    svg path {
      stroke: #F72921 !important;
    }
  }

  &__sub {
    margin-bottom: 64px;
    display: block;
    width: 100%;
  }

  &__helper {
    text-align: center;
    margin-bottom: 24px;

    &-text {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;
      opacity: 0.5;

      &::before, &::after {
        content: '';
        display: block;
        background-color: #000000;
        height: 1px;
        max-width: 149px;
        width: 100%;
      }
    }
  }

  &__text-error {
    margin-top: 9px;
    color: #F72921;
  }

  &__reg {
    text-align: center;

    &-text {
      opacity: 0.5;
    }

    &-btn {
      margin-left: 12px;
      color: $green;
      opacity: 1;
    }
  }
  
  .social {
    &__item {
      margin-left 16px
    }
        
    &__btn {
      padding 12px
      background-color $gray
      border-radius var(--radius-12)
    }
  }
}
</style>