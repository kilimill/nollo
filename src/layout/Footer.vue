<template lang="pug">
footer.footer
  .container
    .footer__inner
      .footer__column
        router-link.footer__link(:to="{name: 'Home'}")
          LogoGreen.logo

        p.text_middle © Официальный сайт nollo.ru, 2022 Все права защищены

      .footer__column
        h6.title_middle Контакты

        p.text_middle По всем имеющимся вопросам обращайтесь по электронной почте:
          a.footer__link(href="mailto:info@nollo.ru") info@nollo.ru

      .footer__column
        h6.title_middle Полезная информация

        nav.footer__nav
          ul.footer__list
            li.footer__list-item(v-for="(item, i) in footerNav", :key="i")
              router-link.controls_middle(:to="{name: item.link}") {{ item.title }}

      .footer__column
        h6.title_middle Расскажи о нас друзьям

        ul.social
          li.social__item
            a.btn.social__btn(href="#")
              VkIcon.icon

          li.social__item
            a.btn.social__btn(href="#")
              OdnoklassnikiIcon.icon
</template>

<script setup>
import { reactive } from "vue";
import { VkIcon, OdnoklassnikiIcon, LogoGreen } from "@/layout/icon/index";
const footerNav = reactive([
  {
    title: "О проекте",
    link: "About",
  },
  {
    title: "Добавить базу отдыха",
    link: "Create",
  },
  {
    title: "Регистрация",
    link: "Authorization",
  },
  {
    title: "Контакты",
    link: "Contacts",
  },
  {
    title: "Политика конфиденциальности",
    link: "Terms",
  },
  {
    title: "Пользовательское соглашение",
    link: "Terms",
  },
]);
</script>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';

.footer {
  position relative
  z-index 10
  margin-top: 80px;

  &__inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 32px;
    padding: 56px 0;
    border-top: 2px solid #E5E5E5;
  }

  &__link {
    display: inline-block;
    color: $green;
  }

  .title_middle, .footer__link {
    margin-bottom: 16px;
  }

  &__list-item {
    margin-top: 8px;

    &:first-child {
      margin-top: 0;
    }
  }
}
</style>