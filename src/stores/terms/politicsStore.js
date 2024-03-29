import {
  defineStore
} from 'pinia';

export const usePoliticsStore = defineStore('politics', {
  state: () => ({
    politics: [{
        title: "1. ОСНОВНЫЕ ПОНЯТИЯ",
        value: `
          <p class="text_middle">
            Сайт - сайт сервиса онлайн-бронирования NOLLO, расположенный в сети Интернет по адресу: <a class="c-blue" href="/">www.nollo.ru</a>.
            Администрация Сайта - <b>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "НОЛЛО", ИНН 2635253382, ОГРН 1222600005660, Свидетельство от 19.05.2022 года.</b>
            <br>E-mail: <a class="c-blue" href="mailto:info@nollo.ru">info@nollo.ru</a>
            <br>Пользователь - физическое или юридическое лицо, разместившее свою персональную информацию посредством Формы обратной связи на сайте с последующей целью передачи данных Администрации Сайта.
            Форма обратной связи - специальная форма, где Пользователь размещает свою персональную информацию с целью передачи данных Администрации Сайта для регистрации на сервисе.
          </p>
          `,
      },
      {
        title: "2. ОБЩИЕ ПОЛОЖЕНИЯ",
        value: `
          <p class="text_middle">
            2.1. Настоящая Политика конфиденциальности является официальным типовым документом Администрации Сайта и определяет порядок обработки и защиты информации о физических и юридических лицах, использующих Форму обратной связи на Сайте.
          </p>
          <p class="text_middle">
            2.2. Целью настоящей Политики конфиденциальности является обеспечение надлежащей защиты информации о Пользователе, в т.ч. его персональных данных от несанкционированного доступа и разглашения.
          </p>
          <p class="text_middle">
            2.3. Отношения, связанные со сбором, хранением, распространением и защитой информации о пользователях регулируются настоящей Политикой конфиденциальности и действующим законодательством Российской Федерации.
          </p>
          <p class="text_middle">
            2.4. Действующая редакция Политики конфиденциальности, является публичным документом, разработана Администрацией Сайта и  доступна любому Пользователю сети Интернет при переходе по гипертекстовой ссылке "Политика конфиденциальности".
          </p>
          <p class="text_middle">
            2.5. Администрация Сайта вправе вносить изменения в настоящую Политику конфиденциальности.
          </p>
          <p class="text_middle">
            2.6. При внесении изменений в Политику конфиденциальности, Администрация Сайта уведомляет об этом Пользователя путём размещения новой редакции Политики конфиденциальности на Сайте <a class="c-blue" href="/">www.nollo.ru</a>.
          </p>
          <p class="text_middle">
            2.7. При размещении новой редакции Политики конфиденциальности на Сайте, предыдущая редакция хранятся в архиве документации Администрации Сайта.
          </p>
          <p class="text_middle">
            2.8. Используя Форму обратной связи, Пользователь выражает свое согласие с условиями настоящей Политики конфиденциальности.
          </p>
          <p class="text_middle">
            2.9. Администрация Сайта не проверяет достоверность получаемой (собираемой) информации о Пользователе.
          </p>
          `,
      },
      {
        title: "3. УСЛОВИЯ И ЦЕЛИ СБОРА И ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЕЙ",
        value: `
          <p class="text_middle">
            3.1. Персональные данные Пользователя такие как: имя, фамилия, отчество, e-mail, номер телефона и др., передаются Пользователем Администрации Сайта с согласия Пользователя.
          </p>
          <p class="text_middle">
            3.2. Передача персональных данных Пользователем Администрации Сайта, через Форму обратной связи означает согласие Пользователя на передачу его персональных данных.
          </p>
          <p class="text_middle">
            3.3. Администрация Сайта осуществляет обработку информации о Пользователе, в т.ч. его персональных данных, таких как: имя, фамилия, отчество, e-mail, номер телефона и др., а также дополнительной информации о Пользователе, предоставляемой им по своему желанию: организация, город, должность и др. в целях выполнения обязательств перед Пользователем Сайта.
          </p>
          <p class="text_middle">
            3.4. Обработка персональных данных осуществляется на основе принципов:
            <br>а) законности целей и способов обработки персональных данных и добросовестности;
            <br>б) соответствия целей обработки персональных данных целям, заранее определенным и заявленным при сборе персональных данных;
            <br>в) соответствия объёма и характера обрабатываемых персональных данных способам обработки персональных данных и целям обработки персональных данных;
            <br>г) недопустимости объединения созданных для несовместимых между собой целей баз данных, содержащих персональные данные.
          </p>
          <p class="text_middle">
            3.5. Администрация Сайта осуществляет обработку персональных данных Пользователя с его согласия в целях оказания услуг/продажи товаров, предлагаемых на Сайте в соответствии Федеральному закону № 152-ФЗ "О персональных данных" (далее "Закон о персональных данных") и Приказа ФСТЭК России от 18.02.2013 N 21 "Об утверждении Состава и содержания организационных и технических мер по обеспечению безопасности персональных данных при их обработке в информационных системах персональных данных".
          </p>
          `,
      },
      {
        title: "4. ХРАНЕНИЕ И ИСПОЛЬЗОВАНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ",
        value: `
          <p class="text_middle">
            Персональные данные Пользователя хранятся исключительно на электронных носителях и используются строго по назначению, оговоренному в п.3 настоящей Политики конфиденциальности.
          </p>
          `,
      },
      {
        title: "5. ПЕРЕДАЧА ПЕРСОНАЛЬНЫХ ДАННЫХ",
        value: `
          <p class="text_middle">
            5.1. Персональные данные Пользователя не передаются каким-либо третьим лицам, за исключением случаев, прямо предусмотренных настоящей Политикой конфиденциальности <a class="c-blue" href="/politics/">www.nollo.ru/politics/</a>  и Пользовательским соглашением (п. 4.4.3) <a class="c-blue" href="/rules/">www.nollo.ru/rules/</a>.
          </p>
          <p class="text_middle">
            5.2. Предоставление персональных данных Пользователя по запросу государственных органов, органов местного самоуправления осуществляется в порядке, предусмотренном законодательством Российской Федерации.
          </p>
          `,
      },
      {
        title: "6. СРОКИ ХРАНЕНИЯ И УНИЧТОЖЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ",
        value: `
          <p class="text_middle">
            6.1. Персональные данные Пользователя хранятся на электронном носителе сайта бессрочно.
          </p>
          <p class="text_middle">
            6.2. Персональные данные Пользователя уничтожаются при желании самого Пользователя на основании его обращения, либо по инициативе Администратора сайта без объяснения причин путём удаления Администрацией Сайта информации, размещённой Пользователем.
          </p>
          <p class="text_middle">
            6.3. Если Пользователь решил, чтобы какая-либо его персональная информация была удалена из баз данных сервиса Nollo, Пользователь может самостоятельно удалить необходимую Персональную информацию через интерфейс Сайта и/или Сервиса (где это применимо). Инструмент управления данными доступен для авторизованных в сервисе Nollo пользователей в настройках профиля.
          </p>
          `,
      },
      {
        title: "7. ПРАВА И ОБЯЗАННОСТИ ПОЛЬЗОВАТЕЛЕЙ",
        value: `
          <p class="text_middle">
            Пользователи вправе на основании запроса получать от Администрации Сайта информацию, касающуюся обработки его персональных данных.
          </p>
          `,
      },
      {
        title: "8. МЕРЫ ПО ЗАЩИТЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЯХ",
        value: `
          <p class="text_middle">
            Администратор Сайта принимает технические и организационно-правовые меры в целях обеспечения защиты персональных данных Пользователя от неправомерного или случайного доступа к ним, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий.
          </p>
          `,
      },
      {
        title: "9. ИСПОЛЬЗОВАНИЕ ФАЙЛОВ COOKIE",
        value: `
          <p class="text_middle">
            9.1. Файлы cookie- это небольшие фрагменты данных со служебной информацией о посещении сайта, которые сервер отправляет на ваше устройство. Файлы cookie запоминают информацию о ваших предпочтениях, позволяют в более удобном для вас режиме просматривать посещенные сайты в течение определенного времени. Например, благодаря файлам cookie Сервисы предлагают вам просматривать информацию на том языке, которым вы обычно пользуетесь.
          </p>
          <p class="text_middle">
            9.2. Файлы cookie позволяют Пользователю оставаться авторизованным на Сайте сервиса, сохранять поисковые запросы Пользователя, анализировать статистику пользования сервисом, позволяет средствами веб-аналитики производить измерения маркетинговых исследований, направленных на развитие предоставляемых услуг сервиса.
          </p>
          <p class="text_middle">
            9.3. При первом посещении Сайта нашего сервиса будет запрошено согласие на использование файлов cookie. Если после того, как Пользователь одобрил использование файлов cookie, захотел изменить своё решение, он сможет сделать это, удалив файлы cookie, хранящиеся в своём браузере (обычно это можно сделать в настройках браузера, через который пользователь посетил сайт сервиса). После этого может быть снова отображено всплывающее окно, запрашивающее согласие Пользователя, и он сможет сделать иной выбор. Если Пользователь отказывается от использования файлов cookie, то Пользователю следует отказаться от использования Сайта. Если Пользователь одобрил использование файлов cookie на Сайте, мы будем считать, что использование файлов cookie на Сайте было одобрено пользователем и файлы cookie могут быть использованы по нашему усмотрению согласно закону о персональных данных.
          </p>
          `,
      },
      {
        title: "10. ОБРАЩЕНИЯ ПОЛЬЗОВАТЕЛЕЙ",
        value: `
          <p class="text_middle">
            10.1. Пользователь вправе направлять Администрации Сайта свои запросы, в т.ч. относительно использования/удаления его персональных данных, предусмотренные п.3 настоящей Политики конфиденциальности в письменной форме по адресу электронной почты отдела технической поддержки сервиса: <a class="c-blue" href="mailto:support@nollo.ru">support@nollo.ru</a>
          </p>
          <p class="text_middle">
            10.2. Запрос, направляемый Пользователем, должен содержать следующую информацию:
            <br>для физического лица:
            <br>- номер основного документа, удостоверяющего личность Пользователя или его законного представителя;
            <br>- сведения о дате выдачи указанного документа и выдавшем его органе;
            <br>- номер телефона, посредством которого была произведена регистрация на Сайте;
            <br>- электронную почту, если она была указана в личном кабинете Пользователя;
            <br>- текст запроса в свободной форме;
            <br>- подпись Пользователя или его законного представителя.
            <br>для юридического лица:
            <br>- запрос в свободной форме на фирменном бланке;
            <br>- дата регистрации через Форму обратной связи;
            <br>- запрос должен быть подписан уполномоченным лицом с приложением документов, подтверждающих полномочия лица.
          </p>
          <p class="text_middle">
            10.3. Администрация Сайта обязуется рассмотреть и направить ответ на поступивший запрос Пользователя в течение 30 дней с момента поступления обращения.
          </p>
          <p class="text_middle">
            10.4. Вся корреспонденция, полученная Администрацией от Пользователя (обращения в письменной/электронной форме) относится к информации ограниченного доступа и без письменного согласия Пользователя разглашению не подлежит. Персональные данные и иная информация о Пользователе, направившем запрос, не могут быть без специального согласия Пользователя использованы иначе, как для ответа по теме полученного запроса или в случаях, прямо предусмотренных законодательством.
          </p>
          `,
      },
    ]
  }),
})