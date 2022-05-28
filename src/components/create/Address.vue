<template lang="pug">
section.address
  h2.title_up-middle Фотографии
  p.text_middle.opacity-50.mb-24 Создайте галерею фотографий и отметьте одну, которая будет отображаться в карточке

  .wrapper.wrapper_h-btw.mb-32 
    select.form__text
      option adwdawd
      option adwdawd
      option adwdawd

    select.form__text
      option adwdawd
      option adwdawd
      option adwdawd

  .wrapper.wrapper_h-btw.mb-32
    label.form__label
      input.form__input(placeholder="Город или населенный пункт")

    label.form__label
      input.form__input(placeholder="Удаленность от населенного пункта, км")

  .wrapper.wrapper_h-btw
    label.form__label.form__label-street
      input.form__input(placeholder="Улица")

    label.form__label
      input.form__input(placeholder="Дом")
</template>

<style scoped lang='stylus'>
.address 
  .form__label,
  select
    width 48%

  .form__label
    &-street
      max-width 100%
      margin-right 32px
      width 100%
    
</style>