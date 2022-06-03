<template lang="pug">
.banner
  .container
    .banner__inner
      h3.title_up-middle.mb-16 Будьте всегда в курсе новых предложений
      p.text_middle.opacity-50 Подпишитесь на e-mail рассылку и Вы узнаете все первыми
      form.form.banner__form
        label.form__label
          MailIcon.form__label-icon
          input.form__input.controls_middle(placeholder="E-mail")
        button.btn.btn_green
          span.btn__content Подписаться

  img.banner__img(src="@/assets/img/details/mail-box.png")
 
</template>

<script setup>
import { MailIcon } from "@/layout/icon/index.js"
</script>