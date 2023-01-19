<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__inner grid grid_4">
        <div class="footer__column footer__column-logo">
          <p class="text_middle">© Официальный сайт nollo.ru, 2022 Все права защищены</p>

          <router-link class="footer__link" :to="{ name: 'Home' }">
            <img class="logo icon_green" src="/images/logo.svg" alt="Логотип" />
          </router-link>
        </div>
        <div class="footer__column">
          <h6 class="title_middle">Контакты</h6>

          <p class="text_middle mb-8">
            По всем имеющимся вопросам обращайтесь по электронной почте:
            <a class="c-green" href="mailto:info@nollo.ru">info@nollo.ru</a>
          </p>

          <ul class="footer__list">
            <li class="footer__list-item">ООО "НОЛЛО"</li>
            <li class="footer__list-item">ИНН 2635253382</li>
            <li class="footer__list-item">ОГРН 1222600005660</li>
            <li class="footer__list-item">Свидетельство от 19.05.2022 года.</li>
          </ul>
        </div>

        <div class="footer__column">
          <h6 class="title_middle">Полезная информация</h6>

          <nav class="footer__nav">
            <ul class="footer__list">
              <li class="footer__list-item" v-for="(item, i) in footerNav" :key="i">
                <router-link class="controls_middle" :to="{ name: item.link }">
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="footer__column">
          <h6 class="title_middle">Расскажи о нас друзьям</h6>

          <ul class="social">
            <li class="social__item">
              <a class="btn social__btn" href="#">
                <VkIcon class="icon icon--small" />
              </a>
            </li>
            <li class="social__item">
              <a class="btn social__btn" href="#">
                <OdnoklassnikiIcon class="icon icon--small" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { VkIcon, OdnoklassnikiIcon } from "@/layout/icon/index";
const footerNav = [
  {
    title: "О проекте",
    link: "About",
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
    link: "Politics",
  },
  {
    title: "Пользовательское соглашение",
    link: "Rules",
  },
];
</script>

<style scoped lang="stylus">
@import '../assets/styles/vars.styl';
.content-white {
  .footer {
    background-color: $gray;
  }
}

.footer {
  position: relative;
  z-index: 10;
  margin-top: 80px;

  @media $mobile {
    border-top: 2px solid #E5E5E5;
  }

  &__inner {
    padding: 56px 0;
    border-top: 2px solid #E5E5E5;

    @media $mobile {
      grid-gap: 40px;
      padding: 40px 0;
      border-top: none;
    }
  }

  &__column {
    &-logo p{
      margin-top 2px
    }

    &:first-child {
      @media $mobile {
        order: 1;
      }
    }
  }

  &__link {
    display: inline-block;
    color: $green;
    margin-top: 11px;
  }

  .title_middle {
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
