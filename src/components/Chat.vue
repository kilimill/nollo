<template>
  <section class="chat">
    <header class="chat__header wrapper wrapper_h-btw wrapper_v-ctr">
      <div class="chat__user wrapper wrapper_v-ctr">
        <img class="chat__user-avatar" src="@/assets/images/avatar.jpg" alt="Аватарка" />

        <div class="chat__user-info">
          <p class="controls_middle mb-8">Александр Родничев</p>
          <p class="text_small opacity-50">Был в сети 40 минут назад</p>
        </div>
      </div>

      <button class="chat__settings">
        <MenuIcon class="icon icon--def" />
      </button>
    </header>

    <div class="chat__content">
      <div class="chat__hint">
        <div class="chat__alert chat__alert--success">
          <div class="chat__alert-header">
            <p class="chat__alert-title title_pre-middle">
              Александр Родничев отправил запрос на проживание
            </p>
            <div class="hint" :tooltip="'Сервисное сообщение'" positionTool="bottom">
              <AlertInfoIcon class="hint__ico icon icon--def" />
            </div>
          </div>
          <div class="chat__alert-content">
            <p class="text_middle">
              Ознакомьтесь с деталями бронирования в боковом блоке и ответьте на запрос.
            </p>
          </div>
        </div>
        <div class="chat__alert chat__alert--success">
          <div class="chat__alert-header">
            <p class="chat__alert-title title_pre-middle">Запрос принят</p>
            <div class="hint" :tooltip="'Сервисное сообщение'" positionTool="bottom">
              <AlertInfoIcon class="hint__ico icon icon--def" />
            </div>
          </div>

          <div class="chat__alert-content">
            <p class="text_middle">
              <span>Гость получил уведомление о подтверждении бронирования</span>
              <span>Теперь вы можете отправлять ему сообщения.</span>
            </p>
          </div>
        </div>
        <div class="chat__alert chat__alert--error">
          <div class="chat__alert-header">
            <p class="chat__alert-title title_pre-middle">Запрос отклонен</p>
            <div class="hint" :tooltip="'Сервисное сообщение'" positionTool="bottom">
              <AlertInfoIcon class="hint__ico icon icon--def" />
            </div>
          </div>

          <div class="chat__alert-content">
            <p class="text_middle">Гость получил уведомление об отмене бронирования.</p>
          </div>
        </div>

        <div class="chat__alert chat__alert--success">
          <div class="chat__alert-header">
            <p class="chat__alert-title title_pre-middle">
              Внесите предоплату для подтверждения бронирования
            </p>
            <div class="hint" :tooltip="'Сервисное сообщение'" positionTool="bottom">
              <AlertInfoIcon class="hint__ico icon icon--def" />
            </div>
          </div>

          <div class="chat__alert-content">
            <p class="text_middle mb-16">Итоговая стоимость проживания: 71 500 ₽</p>
            <p class="text_middle mb-8">Предоплата (15%): 10 725 ₽</p>
            <p class="text_middle mb-24">При заселении: 60 775 ₽</p>
            <p class="text_middle">
              В целях обеспечения гарантий предоплата поступит владельцу на следующий день
              после вашего заселения.
              <a class="c-green" href="#">Подробнее</a>
            </p>
          </div>
        </div>

        <div class="chat__alert chat__alert--success">
          <div class="chat__alert-header">
            <p class="chat__alert-title title_pre-middle">
              Внесите предоплату для подтверждения бронирования
            </p>
            <div class="hint" :tooltip="'Сервисное сообщение'" positionTool="bottom">
              <AlertInfoIcon class="hint__ico icon icon--def" />
            </div>
          </div>

          <div class="chat__alert-content">
            <button class="btn btn_green">Отправить запрос повторно</button>
          </div>
        </div>

        <div class="chat__alert chat__alert--success">
          <div class="chat__alert-header">
            <p class="chat__alert-title title_pre-middle">
              Готовы рассмотреть другие варианты проживания?
            </p>
            <div class="hint" :tooltip="'Сервисное сообщение'" positionTool="bottom">
              <AlertInfoIcon class="hint__ico icon icon--def" />
            </div>
          </div>

          <div class="chat__alert-content">
            <button class="btn btn_white">Отправить запрос повторно</button>
          </div>
        </div>

        <div class="chat__hint-btns wrapper wrapper_h-btw">
          <button class="btn btn_white">Отклонить</button>
          <button class="btn btn_green">Принять</button>
        </div>
      </div>
      <div class="chat__message chat__message--left">
        <div class="chat__message-info readed">
          <time class="chat__message-time text_small">15:52</time>
        </div>
        <div class="chat__message-item">
          <p class="text_middle">
            Здравствуйте! Очень рады, что Вы выбрали наш коттедж. Будем рады вас принять.
          </p>
        </div>
      </div>
      <div class="chat__message chat__message--right">
        <div class="chat__message-item">
          <p class="text_middle">
            Здравствуйте! Очень рады, что Вы выбрали наш коттедж. Будем рады вас принять.
          </p>
        </div>
        <div class="chat__message-info readed">
          <time class="chat__message-time text_small">15:52</time>
        </div>
      </div>
    </div>
    <form class="form chat__form">
      <div class="wrapper wrapper_h-btw">
        <label class="form__label">
          <input class="form__input" placeholder="Введите сообщение" required />
        </label>

        <button class="btn btn_green btn_chat">
          <span class="btn__text not-desktop-hide">Отправить</span>
          <TelegramIcon class="desktop-hide" />
        </button>
      </div>
    </form>
    <!-- //- p.text_middle Вы сможете отправлять сообщения после принятия запроса -->
  </section>
</template>

<script setup>
import { MenuIcon, TelegramIcon, AlertInfoIcon } from "@/layout/icon/index";
</script>

<style scoped lang="stylus">
@import '../assets/styles/layout/chat.styl';
</style>
