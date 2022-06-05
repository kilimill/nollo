<template lang="pug">
header.header
  .container
    .header__inner
      .header__wrapper
        a.header__wrapper(href="#")
          img.logo(src="@/assets/img/logo.png")

          span.controls_middle.header__text Найди идеальное место для своего отдыха

        button.header__location
          span.controls_middle Москва

      .header__wrapper
        .header__profile
          .header__profile-default
            ProfileIcon.icon.mr-16
            span.controls_middle Профиль

          //- .header__wrapper.header__profile-user 
            img.header__profile-avatar(src="@/assets/img/avatar.jpg")
            p.controls_middle.ml-16 Александр Р.

          ul.drop-down
            li.drop-down__item
              button.drop-down__btn 
                ProfileIcon.icon
                span.drop-down__text Профиль
            li.drop-down__item
              button.drop-down__btn 
                GetOutIcon.icon
                span.drop-down__text Выйти

        ul.social
          li.social__item
            a.btn.social__btn(href="#")
              VkIcon.icon
          li.social__item
            a.btn.social__btn(href="#")
              OdnoklassnikiIcon.icon
</template>

<script setup>
import {
  ProfileIcon,
  GetOutIcon,
  OdnoklassnikiIcon,
  VkIcon,
} from "@/layout/icon/index";
</script>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';
@import '@/assets/styles/mixins.styl';

.header {
  position: relative;
  z-index: 10;
  margin-bottom: 40px;

  &__inner {
    padding: var(--offset-big) 0;
    border-bottom: 2px solid #E5E5E5;
    justify-content: space-between;
  }

  &__inner, &__wrapper {
    display: flex;
    align-items: center;
  }

  &__text {
    pos: relative;
    max-width: 227px;
    width 100%
    padding-left: 27px;
    margin-left: 24px;

    &::before {
      content: '';
      pos: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 3px;
      height: 40px;
      background-color: $black;
    }
  }

  &__location {
    position: relative;
    padding-left: 32px;
    margin-left: 120px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 18px;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.6663 8.33341C14.6663 11.0374 11.0706 14.4442 9.16064 16.063C8.4842 16.6364 7.51514 16.6364 6.83871 16.063C4.92874 14.4442 1.33301 11.0374 1.33301 8.33341C1.33301 4.65152 4.31778 1.66675 7.99967 1.66675C11.6816 1.66675 14.6663 4.65152 14.6663 8.33341Z' stroke='%23222222' stroke-width='2'/%3E%3Cellipse cx='8' cy='8.33325' rx='2' ry='2' stroke='%23222222' stroke-width='2'/%3E%3C/svg%3E%0A");
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
  }

  &__profile {
    position: relative;
    padding-bottom: 17px;
    padding-top: 17px;
    margin-right: 90px;

    &-default .icon {
      width: 16px;
      height: 16px;
    }

    &-avatar {
      width: 48px;
      height: 48px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .drop-down {
    right: 0;
    width: 195px;
  }
}
</style>

