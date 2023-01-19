<template>
  <div class="index">
    <div class="container">
      <section class="index__head">
        <h1 class="title_bigger mb-24">Бронируй легко</h1>
        <p class="text_middle">Загородный отдых - это просто</p>
      </section>
      <div class="index__search">
        <form class="form index__form" @submit.prevent="search">
          <v-input
            class="index__form-place"
            icon="search"
            label="Место или название"
            type="text"
            name="place"
            v-model:value="searchHotels.location"
          />

          <div class="index__form-wrapper">
            <DataPicker
              v-model:value="searchHotels.dates"
              :multi-calendars="true"
              placeholder="Выберите даты"
              name="data"
            ></DataPicker>
            <v-input
              name="guest_count"
              label="Кол-во гостей"
              type="number"
              v-model:value="searchHotels.guest_count"
            ></v-input>

            <div
              class="index__form-price"
              :class="{
                hidden: hiddenObjects.price && !useCommonStore().mobile,
              }"
              ref="indexPriceContent"
            >
              <v-input
                class="index__form-price-label mb-8"
                label="Цена от"
                type="number"
                name="min_price"
                v-model:value="searchHotels.min_price"
              ></v-input>
              <v-input
                class="index__form-price-label mb-24"
                label="Цена до"
                type="number"
                name="max_price"
                v-model:value="searchHotels.max_price"
              ></v-input>
              <button
                class="btn btn_control btn_green mobile-hide"
                type="button"
                @click="toggleHidden('price')"
              >
                подтвердить
              </button>
            </div>

            <button
              class="index__form-price-btn mobile-hide"
              type="button"
              @click="toggleHidden('price')"
              :class="{ active: !hiddenObjects.price }"
              ref="indexPriceBtn"
            >
              <span class="controls_bigger"> ₽ </span>
            </button>
            <button class="index__search-sub btn btn_green" @click="search">Найти</button>
          </div>
        </form>
      </div>
    </div>

    <div class="container container_mob-hide">
      <Map class="index__map" :hotels="useDefaultStore().allHotels" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useDefaultStore } from "@/stores/defaultStore";
import { useCommonStore } from "@/stores/commonStore";
import { searchHotels } from "@/composables/useSearchHotels";
// import { vkInit } from "@/helpers/vk.js";
// import { useApi } from "@/composables/useApi";
import Map from "@/components/maps/Map.vue";
import CardHotel from "@/layout/cards/CardHotel.vue";
import BannerSub from "@/layout/BannerSub.vue";
import DataPicker from "@/layout/DataPicker.vue";
import Loader from "@/layout/Loader.vue";
import SliderCards from "@/layout/sliders/SliderCards.vue";

const router = useRouter();

const hiddenObjects = reactive({
  info: true,
  price: true,
});

const search = () => {
  router.replace({ name: "Search", query: { isSearch: true } });
};

const indexPriceContent = ref();
const indexPriceBtn = ref();

const hiddePrice = (e) => {
  if (
    !e.target.closest(".index__form-price") &&
    !hiddenObjects.price &&
    e.target !== indexPriceBtn.value
  ) {
    hiddenObjects.price = true;
  }
};

const toggleHidden = (arg) => {
  hiddenObjects[arg] = !hiddenObjects[arg];
};

onMounted(() => {
  if (!useCommonStore().mobile) {
    window.addEventListener("click", hiddePrice);
  }
});

onUnmounted(() => {
  if (!useCommonStore().mobile) {
    window.removeEventListener("click", hiddePrice);
  }
});

// const hotels = ref();

// const getAllHotels = () => {
//   useApi()
//     .postTo('hotels', { per_page: 9, location: userStore.city })
//     .then(({ data }) => {
//       hotels.value = data.data;
//     })
//     .catch(({ response }) => {
//       showFlashError(response);
//     });
// };

// watch(() => userStore.city, () => {
//   getAllHotels();
// });

// onMounted(() => {
//   if (userStore.city) {
//     getAllHotels();
//   }

//   // vkInit();
// });

// <div class="container">
//       <section class="performance">
//         <div class="performance__item">
//           <h2 class="title_middle mb-16">Наша миссия</h2>
//           <p class="text_middle">— Базы отдыха России с ценами 2022 и отзывами!</p>
//         </div>
//         <div class="performance__item">
//           <h2 class="title_up-middle">5 720</h2>
//           <p class="text_middle">объектов</p>
//         </div>
//         <div class="performance__item">
//           <h2 class="title_up-middle">106</h2>
//           <p class="text_middle">мест отдыха</p>
//         </div>
//       </section>
//     </div>
//     <div class="container container_mob-hide">
//       <section class="index__preview">
//         <div class="index__preview-box">
//           <div class="index__preview-wrapper mb-40">
//             <h3 class="title_up-middle mb-16">Популярные базы отдыха</h3>
//             <p class="text_middle opacity-50">
//               Список самых популярных объектов в вашем регионе
//             </p>
//           </div>
//           <router-link class="btn c-green" :to="{ name: 'Search' }"
//             >Смотреть все</router-link
//           >
//           <SliderCards
//             v-if="useDefaultStore().allHotels"
//             type="hotel"
//             name="catalogSlider"
//             :hotels="useDefaultStore().allHotels"
//           />
//           <Loader v-else />
//           <div class="grid grid_3" v-else>
//             <CardHotel
//               v-for="(hotel, i) in useDefaultStore().allHotels"
//               :key="i"
//               :hotel="hotel"
//             />
//           </div>
//         </div>
//         <div class="index__preview-box">
//           <div class="index__preview-wrapper mb-40">
//             <h3 class="title_up-middle mb-16">Популярные базы отдыха</h3>
//             <p class="text_middle opacity-50">
//               Список самых популярных объектов в вашем регионе
//             </p>
//           </div>
//           <router-link class="btn c-green" :to="{ name: 'Search' }">
//             Смотреть все</router-link
//           >
//           <Loader v-if="!useDefaultStore().allHotels" />
//           <SliderCards
//             v-else
//             type="popular"
//             name="popularSlider"
//             :hotels="useDefaultStore().allHotels"
//           />
//         </div>
//       </section>
//     </div>
//     <BannerSub />
//     <div class="container">
//       <section class="index__info">
//         <div class="index__info-inner">
//           <h3 class="title_up-middle mb-32">
//             Базы отдыха России с ценами 2022 &nbsp;и&nbsp;отзывами
//           </h3>
//           <div class="index__info-block">
//             <div class="index__info-descr" :class="{ hidden: hiddenObjects.info }">
//               <p class="text_middle index__info-text">
//                 Какой тип отдыха способен подарить человеку самые положительные эмоции и
//                 море приятных воспоминаний? Путешествия! Только путешествуя, человек
//                 способен сбросить груз ежедневных проблем, которые долго разъедали его
//                 изнутри. Только покинув знакомую обстановку, можно восстановить
//                 пошатнувшееся душевное равновесие и по-настоящему отдохнуть.
//               </p>
//               <p class="text_middle index__info-text">
//                 Отдых на природе является одним из лучших способов расслабиться и
//                 восстановиться от городской суеты, которая ежедневно вытягивает из
//                 человека все силы, постепенно загоняя его в состояние апатии. Максимальный
//                 комфорт от отдыха на природе можно получить, забронировав номер на
//                 туристической базе. Но далеко не всегда удается успеть забронировать для
//                 себя хороший номер. Также бывают случаи, когда свободных номеров не
//                 остается вовсе. Как лучше поступить в этой ситуации человеку, которому
//                 отдых на красивой природе жизненно необходим?
//               </p>
//               <p class="text_middle index__info-text">
//                 Воспользуйтесь услугами нашей компании. Мы – это превосходный сервис,
//                 благодаря которому каждый человек имеет возможность забронировать номер
//                 практически в любой базе отдыха на территории России. Мы заключили
//                 договора с большим количеством туристических баз, и внесли их в свой
//                 каталог. Это позволяет клиентам заранее оценить комфорт баз отдыха,
//                 внутреннюю обстановку номеров и ценовой диапазон. Заключение договоров с
//                 турбазами оказалось довольно непростым мероприятием. Большая часть из них
//                 находится далеко за пределами больших городов. Но мы это сделали.
//               </p>
//               <p class="text_middle index__info-text">
//                 Теперь вы имеете возможность, не выходя из дома и не тратя собственное
//                 время на поиск турбаз, ознакомиться с обширным каталогом баз отдыха и
//                 выбрать ту, которая больше всего вам подходит. Также в каталоге указаны
//                 цены 2022 года. Собранная нами точная информация позволяет вам, потратив
//                 минимум времени и усилий, найти и забронировать нужный номер в нужной базе
//                 отдыха, и насладиться заслуженным отдыхом на красивой природе.
//               </p>
//               <p class="text_middle index__info-text">
//                 В каталоге, кроме основных сведениях о туристических базах, также
//                 указываются отзывы клиентов о каждой базе отдыха. Ознакомившись с ними, вы
//                 узнаете, насколько высоко качество обслуживания на каждой отдельной
//                 турбазе, какое состояние номеров и другие полезные сведения. Зачем тратить
//                 свое время на поиски турбаз и попытки забронировать номер, когда у вас
//                 есть превосходная возможность выбрать из готового каталога наиболее
//                 выгодный вариант по разумной цене? Воспользуйтесь нашим сервисом и
//                 насладитесь долгожданным отдыхом!
//               </p>
//             </div>
//             <button
//               class="index__info-btn not-mobile-hide"
//               @click.prevent="toggleHidden('info')"
//             >
//               Читать полностью
//             </button>
//           </div>
//         </div>
//         <div class="info__group">
//           <h3 class="title_up-middle mb-32">Наши сообщества</h3>
//           <!-- #vk_group -->
//         </div>
//       </section>
//     </div>
</script>
