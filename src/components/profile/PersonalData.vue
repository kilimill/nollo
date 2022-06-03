<template lang="pug">
section.personal 
  form.form
    .personal__item
      h2.title_middle.mb-32 Контактная информация

      .wrapper
        .personal__avatar
          //- label.personal__file
          //-   p.controls_middle Добавить фото
          //-   input.personal__file-input(type="file")
          
          .personal__avatar-content
            img.personal__avatar-img(src="@/assets/img/slide.jpg")
            .personal__avatar-bg

        .personal__contacts
          label.form__label.mb-24
            input.form__input(placeholder="Имя") 
            
          label.form__label
            input.form__input(placeholder="Телефон") 

    .personal__item
      h2.title_middle.mb-32 Сменить пароль

      label.form__label.mb-24
        input.form__input(placeholder="Старый пароль") 

      label.form__label.mb-24
        input.form__input(placeholder="Новый пароль") 

      label.form__label
        input.form__input(placeholder="Новый пароль ещё раз") 

    button.btn.btn_green 
      span.btn__content Сохранить изменения  


</template>

<style scoped lang='stylus'>
@import '@/assets/styles/vars.styl';

.personal 
  width 100%

  &__item
    padding 40px
    background-color #fff
    border-radius var(--radius)
    margin-bottom var(--offset-up-mid)

  &__file
    display flex
    align-items center
    justify-content center
    flex-direction: column
    width 100%
    height 100%
    position relative
    background-color $gray
    cursor pointer

    .controls_middle
      max-width 104px
      text-align: center

    &-input
      position absolute
      visibility: hidden
      opacity 0

  &__avatar
    width 152px
    height 152px
    flex-shrink: 0;
    margin-right 32px
    overflow hidden
    border-radius 20px

    &-content
      position: relative
      height 100%

      &:hover
        .personal__avatar-bg
          opacity 1

    &-bg
      cursor pointer
      position: absolute
      display flex
      align-items center
      justify-content center
      left 0
      top 0
      width 100%
      height 100%
      opacity 0
      transition  opacity .3s
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.42), rgba(0, 0, 0, 0.42));

      &::before
        content ''
        display: inline-block
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M3.55132 15.6617L17.5525 1.66054C17.5891 1.64879 17.632 1.63592 17.6805 1.62278C17.8837 1.56774 18.1757 1.51068 18.5188 1.50595C19.1849 1.49676 20.0653 1.68066 20.9201 2.53553C21.775 3.3904 21.9589 4.27079 21.9497 4.93692C21.945 5.27995 21.8879 5.57197 21.8329 5.77516C21.8198 5.82368 21.8069 5.86655 21.7951 5.90318L7.79396 19.9044L2.97278 20.4829L3.55132 15.6617Z' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3Cpath d='M14.2676 3.53125L19.6551 8.91873' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
        width 24px
        height 24px


    &-img
      width 100%
      height 100%
      object-fit cover
      object-position center

  &__contacts
    width 100%

  .btn
    width 100%

</style>