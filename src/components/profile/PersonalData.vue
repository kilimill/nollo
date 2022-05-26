<template lang="pug">
section.personal 
  form.form
    .personal__item
      h2.title_middle.mb-32 Контактная информация

      .wrapper
        .personal__avatar
          label.personal__file
            p.controls_middle Добавить фото
            input.personal__file-input(type="file")
          
          //- img.personal__avatar-img(src="@/assets/img/slide.jpg")

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

    button.btn Сохранить изменения  


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