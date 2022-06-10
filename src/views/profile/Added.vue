<template lang="pug">
section.added
  .added__inner
    img.added__img.mb-16(src="@/assets/img/details/added.jpg") 
    h2.title_up-middle.added__title.mb-16 Объект добавлен
    p.text_middle.opacity-50.mb-32 Перед публикацией модератор проверит все данные. Вы можете отслеживать статус в своём профиле.
    router-link.btn.btn_green(:to="{ name: 'Home' }") Понятно
</template>

<style scoped lang='stylus'>
.added {
  padding: 56px 80px;

  &__inner {
    max-width: 470px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }

  &__img {
    width: 100%;
    height: 256px;
    object-fit: cover;
    object-position: center;
  }

  .btn {
    margin: 0 auto;
  }
}
</style>