<template>
  <section class="contacts">
    <div class="container-mid">
      <BreadCrumbs :crumbs="[{ name: 'Контакты', to: '/contacts' }]" />
      <h1 class="title_up-middle mb-40">Свяжитесь с нами</h1>

      <form class="form">
        <div class="grid grid_2">
          <v-input
            icon="profile"
            label="Имя и фамилия"
            type="text"
            name="wwwwwwwwwww"
            required
          />

          <v-input
            icon="mail"
            label="Телефон или e-mail"
            type="text"
            name="email"
            required
          />
        </div>

        <v-message name="description" label="Сообщение" />

        <button class="btn btn_green">
          <span class="btn__content">Отправить</span>
        </button>
      </form>
    </div>
  </section>
</template>
<script setup>
import vMessage from "../components/vue-custom/VMessage.vue";
import BreadCrumbs from "@/layout/BreadCrumbs.vue";
</script>

<style lang="stylus" scoped>
.contacts {
  background-color: #FFFFFF;

  .form__description {
    margin: 32px 0 40px;
    height: 108px;
    min-height: 108px;
  }

  .btn {
    display: block;
    width: 100%;
  }
}
</style>
