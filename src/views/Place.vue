<template lang="pug">
section.place
  .container
    .place__wrapper
      section.place__content
        h1.title_bigger.mb-32 Коттедж «Ультрасовременный домик»

        .place__controls
          button.place__controls-btn
            HeartIcon.place__controls-ico.mr-16
            span.controls_middle Добавить в избранное

          button.place__controls-btn
            ShareIcon.place__controls-ico.mr-16
            span.controls_middle Поделиться

        Slider.mb-40(:images="images")

        .place__info.mb-40
          h2.title_up-middle.border-btm.mb-24 Коттедж «Ультрасовременный домик»
          p.text_middle.opacity-70 Красивое место на берегу озера в 20 минутах от метро для отдыха от городской суеты. Вы почувствуете комфорт, уют и практичность в каждой мелочи. В доме есть кондиционирование с очисткой воздуха, электрокамин, микроволновая печь, кофеварка, оборудованная кухня и т.д. По формату это дом с двумя спальнями, гостиной, санузлом и сауной. В доме есть профессиональная сауна. Сауна выложена с применением гималайской соли и яшмы для максимальной релаксации. Свой отдельный участок с мангалом и парковкой. Напротив участка красивое поле и лес, с другой стороны участка каскад Череповецких озер. Магазины, аптеки в двух минутах на авто. Автобусная остановка напротив дома.

        form.form.place__form.mb-40
          h3.title_middle.mb-24 Доступные номера
          .wrapper.wrapper_h-btw.place__form-inner
            label.form__label
              CalendarIcon.form__label-icon
              input.form__input.controls_middle(placeholder="E-mail")
            label.form__label
              CalendarIcon.form__label-icon
              input.form__input.controls_middle(placeholder="E-mail")

          .wrapper.wrapper_h-btw
            .form__label.wrapper.wrapper_h-btw
              p.controls_middle Взрослые

              .form__controls
                button.form__controls-btn.form__controls-btn--minus 
                p.form__controls-numb {{ adults }}
                button.form__controls-btn.form__controls-btn--plus 

            .form__label.wrapper.wrapper_h-btw
              p.controls_middle Дети

              .form__controls
                button.form__controls-btn.form__controls-btn--minus 
                p.form__controls-numb {{ children }}
                button.form__controls-btn.form__controls-btn--plus 

        .place__booking
          img.place__booking-img(:src="images[0]")

          .place__booking-box
            .place__booking-info
              h3.title_pre-middle.mb-16 Ультрасовременный домик для 2-6 гостей в Новой Москве

              .details
                .details__item
                  FoodIcon.icon
                  span.controls_small без питания

                .details__item
                  ProfileIcon.icon
                  span.controls_small 2+4 гостя

            .place__booking-bottom
              a.btn.btn_green.btn_link.mr-24 Забронировать

              span.title_pre-middle от 6 500 ₽/сутки

        .place__service
          h3.title_middle.mb-24 Услуги

          .wrapper.place__service
            .wrapper.wrapper_v-ctr.place__service-item
              CardIcon.icon.mr-16
              span.place__services-text 1 км до моря
            .wrapper.wrapper_v-ctr.place__service-item
              CardIcon.icon.mr-16
              span.place__services-text 1 км до моря
            .wrapper.wrapper_v-ctr.place__service-item
              CardIcon.icon.mr-16
              span.place__services-text 1 км до моря

        Accordion

        .place__contacts
          h3.title_middle.mb-24 Контакты

          .wrapper
            .place__contacts__item
              a.controls_middle(href="tel:89998887766") +7 (999) 888 77 66

            .place__contacts__item
              a.controls_middle(href="mailto:info@kaskaransi.ru") info@kaskaransi.ru

      aside.place__aside
        h4.title_up-middle.mb-32 Вам может понравиться

        CardPlace(v-for="(place, i) of places", :key="i", :place="place")

    Suggestions(:places="places", title="Вам может понравиться")

    Suggestions(:places="places", title="Ранее просмотренные") 
</template>

<script setup>
import Slider from "@/layout/Slider";
import Accordion from "@/layout/Accordion";
import CardPlace from "@/layout/CardPlace";
import Suggestions from "@/layout/Suggestions";
import {
  CalendarIcon,
  ShareIcon,
  HeartIcon,
  FoodIcon,
  ProfileIcon,
  CardIcon,
} from "@/layout/icon/index.js";
import { reactive, ref } from "vue";
const adults = ref(0);
const children = ref(0);
const images = reactive([
  "./slide.jpg",
  "./slide2.jpg",
  "./slide.jpg",
  "./slide2.jpg",
  "./slide.jpg",
  "./slide.jpg",
]);

const places = reactive([
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "15 000",
    new: true,
  },
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "15 000",
    new: false,
  },
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "15 000",
    new: true,
  },
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "10 000",
    new: false,
  },
  {
    title: "Дом отдыха «Кашкаранцы»",
    city: "Москва",
    price: "10 000",
    new: false,
  },
]);
</script>

