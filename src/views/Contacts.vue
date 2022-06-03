<template lang="pug">
section.contacts
  .container-mid
    h1.title_up-middle 

    form.form
      .form__grid.form__grid_2
        label.form__label 
          ProfileIcon.icon
          input.form__input(placeholder="Имя и фамилия")

        label.form__label 
          MailIcon.icon
          input.form__input(placeholder="Телефон или e-mail")

      .form__description
        ScrollableDecorator(ref="scroll")
          .form__description-text(contenteditable="true")
      
      button.btn.btn_green 
        span.btn__content Отправить

</template>
<script setup>
import { MailIcon, ProfileIcon } from "@/layout/icon/index";
import ScrollableDecorator from "@/layout/ScrollableDecorator.vue";
</script>

<style lang="stylus" scoped>
.contacts
  .form__description
    margin 32px 0 40px
    height 108px

    &-text
      min-height: 108px

  .btn
    display block
    width 100%

  .icon
    margin-right 16px
</style>