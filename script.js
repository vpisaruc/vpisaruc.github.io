
window.onload = function() {
var dataReload = document.querySelectorAll("[data-reload]");

var language = {
en : {
  fio: "Pisaruc Victor",
  bio: "Team Lead Product Analyst<br>26 years old<br>Moscow<br>Citizenship: Republic of Moldova",
  w_exp: "Work experience",
  w_pl0: `<span>07.2021 - Present</span> <strong>OZON</strong> <br> <strong>Department:</strong> OZON Classified <br> <strong>Position:</strong> Senior product analyst`,
  jd_0: `<p><strong>Duties:</strong></p>
          <ul class="job-description">
            <li>Lead of product analytics team </li>
            <li>Creation a product KPI system</li>
            <li>Search for growth points of a product</li>
            <li>Creation an actionable dashboard system</li>
            <li>Creation a feature prioritization methodology</li>
            <li>Building an analytical DWH architecture</li>
            <li>Сovered the whole product with analytics markup</li>
            <li>Setting up and running A/B tests </li>
            <li>Coaching the product team on the Data Driven approach</li> 
          </ul>`,
  w_pl1: "<span>11.2020 - 07.2021</span> <strong>«DOM.RF Bank»</strong> <br> <strong>Department:</strong> Mortgage business <br> <strong>Position:</strong> Head of Analytics",
  jd_1: "<p><strong>Duties:</strong></p> <ul class=\"job-description\"> <li>Launch of a cross-sell model on a mortgage process</li> <li>Creation of a process of logging work regarding a mortgage application</li> <li>Calculation of financial metrics: CR, CD, EL, EVA, ROA etc.</li> <li>Creation of analytical dashboards</li> <li>Managing a business-analysts team</li> <li>Managing teamwork in Jira, Confluence</li> <li>Participation in budget assessment of a business unit</li> </ul>",
  w_pl2: "<span>08.2020 - 11.2020</span> <strong>«Tinkoff Bank»</strong> <br> <strong>Department:</strong> IT Development division <br> <strong >Position:</strong> Business analyst ",
  jd_2: `<p><strong>Duties:</strong></p>
      <ul class="job-description">
        <li>Improvement of the architecture of the internal CRM system  </li>
        <li>Optimization of user communication channels </li>
        <li>Creation of an auto reporting system for partners offers </li>
        <li>Development of new products based on digital receipts</li>
        <li>Support and refactoring of systems and processes</li>
      </ul>`,
  w_pl3:"<span>02.2020 - 07.2020</span> <strong>АО «Tinkoff Bank»</strong> <br> <strong>Department:</strong> DWH <br> <strong>Position:</strong> Business analyst",
  jd_3:`<p><strong>Duties:</strong></p>
      <ul class="job-description">
        <li>Creation of business specifications</li>
        <li>Data marts creation </li>
        <li>Reports creation and optimization </li>
        <li>Data models optimization</li>
      </ul>`,
  w_pl4:"<span>06.2019 - 08.2019</span> <strong>«Netinfo»</strong>  <br> <strong>Position:</strong> Data Analyst Trainee",
  jd_4: `<p><strong>Duties:</strong></p>
      <ul class="job-description">
        <li>Analysis of trader performance and industry trends</li>
        <li>Reports creation and optimization</li>
      </ul>`,
  ed: `<h3>Education</h3>
  <article>
    <div class='school'>
      <span>2016-2020</span> <strong>Bauman Moscow State Technical University</strong>
    </div>
    <div class="descrition">
      Bachelor, Software engineering
    </div>
  </article>`,
  add_ed: `        
        <h3>Additional education</h3>
      <article class='course'>
        <div class='title'>
          <h4>Product course by Ilya Krasinsky</h4>
        </div>
        <div class="descrition">
          <p>«Product Heroes»</p>
        </div>
      </article> 
      <article class='course'>
          <div class='title'>
            <h4>Stanford University Online Course</h4>
          </div>
          <div class="descrition">
            <p>«Computer vision CS231N»</p>
          </div>
        </article>
    <article class='course'>
          <div class='title'>
            <h4>Online Course</h4>
          </div>
          <div class="descrition">
            <p>«Game Theory»</p>
          </div>
        </article>
    <article class='course'>
          <div class='title'>
            <h4>Online Course</h4>
          </div>
          <div class="descrition">
            <p>«Data Science Advanced»</p>
          </div>
        </article>
    `,
 skills: `<h3>Skills</h3>
    <div>
      <div class='column'>
        <ul class="job-description">
        <li>Building product KPI systems</li>
        <li>Launching and evaluating A/B tests </li>
        <li>Assessing the unit economy and looking for growth areas</li>
        <li>Employee training</li>
        <li>Ability to decompose and delegate tasks </li>
        <li>Strong knowledge of SQL</li>
        <li>Creating ETL processes: Airflow</li>
        <li>Working with relational databases: Vertica, MySQL, MsSQL, Oracle, PostgreSQL, GreenPlum</li>
        <li>Working with big data: Hadoop, Hive, Clickhouse, Spark</li>
        <li>Advanced user of visualization tools: Tableau, SAP</li>
        <li>Working with non-relational databases: Casandra</li>
        <li>Good knowledge of IDEF0-diagrams, UML-diagrams,bpmn-notation</li>
        <li>Programming languages at an advanced level: Python, C/C++, C#</li>
          <li>Working with api methods: Postman, SoapUI, BloomRPC </li>
          <li>Jira, Confluence skills and their internal configuration </li>
          <li>Knowledge of financial metrics </li>
          <li>Machine learning skills </li>
          <li>Knowledge of the main programming paradigms: Imperative, Object Oriented, Functional and Logical </li>
          <li>Strong user of the Git version control tool</li>
          <li>Linux systems administration </li>
          <li>Strong user of MS Office</li>
        </ul>
      </div>
    </div>
  <h4>Foreign languages</h4>
    <ul class="job-description">
  <li>Russian - Native</li>
  <li>English - Advanced C1</li>
        <li>Romanian - Upper Intermediate B2</li>
    </ul>`, 
interests:`<h3>Interests and Other Hobbies</h3>
  <ul class="job-description">
    <li>Cryptocurrency trading: earned $ 20K in 1 year </li>
    <li>Case championships: HQ 15% Oliver Wyman, HQ 25% McKinsey Business Diving </li>
    <li>Travelling: visited 24 countries, lived in two countries </li>
    <li>Sports: snowboarding, basketball, wakesurfing</li>
  </ul>
</section>`,
download: `<div class="block-download">
<a class="download-link" href="pdf/Pisaruc_Victor_CV_en.pdf" target="_blank" download name="resume-download">
  <img class="download-image" src="./img/document.svg">
  <br><p name="resume-text">download cv</p></a>
</div>
</section>`

},
ru : {
  fio:"Писарук Виктор",
  bio:"Ведущий Продуктовый Аналитик<br>24 года<br>Москва<br>Гражданство: Молдова",
  w_exp: "Опыт работы",
  w_pl0: `<span>07.2021 - Н.В.</span> <strong>OZON</strong> <br> <strong>Отдел:</strong> OZON Marketplace <br> <strong>Позиция:</strong> Ведущий продуктовый аналитик`,
  jd_0: `<p><strong>Обязанности:</strong></p>
          <ul class="job-description">
            <li>Управление командой продуктовой аналитики</li>
            <li>Создание системы KPI продукта</li>
            <li>Создание системы actionable дашбордов</li>
            <li>Создание системы приоритизации фичей </li>
            <li>Поиск точек роста продукта</li>
            <li>Построение архитектуры аналитического хранилища</li>
            <li>Взаимодействие с IT командой для покрытия продукта аналитикой</li>
            <li>Постановка и запуск A/B тестов</li>
            <li>Обучение продуктовой команды Data Driven подходу</li>
          </ul>`,
  w_pl1:"<span>11.2020 - 07.2021</span> <strong>АО «Банк ДОМ.РФ»</strong> <br> <strong>Отдел:</strong> Проекты ипотечного бизнеса <br> <strong>Позиция:</strong> Руководитель направления аналитики",
  jd_1: `<p><strong>Обязанности:</strong></p>
          <ul class="job-description">
            <li>Запуск процесса кросс продаж розничных продуктов на ипотечном пути</li>
            <li>Построения процесса логирования работы с ипотечной заявкой</li>
            <li>Расчет финансовых метрик CR, CD, EL, EVA, ROA и др.</li>
            <li>Построение аналитической отчетности </li>
            <li>Управление командой бизнес-аналитиков</li>
            <li>Организация работы команды в Jira, Confluence</li>
            <li>Участие в оценке бюджета подразделения</li>
          </ul>`,
  w_pl2: "<span>08.2020 - 11.2020</span> <strong>АО «Тинькофф Банк»</strong> <br> <strong>Отдел:</strong> Отдел развития <br> <strong >Позиция:</strong> Бизнес-аналитик",
  jd_2: `<p><strong>Обязанности:</strong></p>
      <ul class="job-description">
        <li>Улучшение архитектуры внутренней CRM</li>
        <li>Оптимизация каналов коммуникации с пользователями</li>
        <li>Создание системы авто отчетности для аналитики по партнерским спецпредложениям</li>
        <li>Разработка новых продуктов на основе чеков</li>
        <li>Запуск и оценка А/Б тестов</li>
        <li>Поддержка и рефакторинг текущих систем и процессов</li>
      </ul>`,
  w_pl3:"<span>02.2020 - 07.2020</span> <strong>АО «Тинькофф Банк»</strong> <br> <strong>Отдел:</strong> DWH <br> <strong>Позиция:</strong> Бизнес-аналитик",
  jd_3:`<p><strong>Обязанности:</strong></p>
      <ul class="job-description">
        <li>Описание бизнес-процессов</li>
        <li>Формулировать ТЗ и спецификации разработчикам на основе требований бизнес-пользователя</li>
        <li>Создание и оптимизация отчетов</li>
        <li>Поддержка и создание моделей данных</li>
      </ul>`,
  w_pl4: "<span>06.2019 - 08.2019</span> <strong>ООО «Нетинфо»</strong>  <br> <strong>Позиция:</strong> Стажер Аналитик Данных",
  jd_4: `<p><strong>Обязанности:</strong></p>
      <ul class="job-description">
        <li>Анализ эффективности трейдеров, отраслевых тенденций и позиционирования трейдеров</li>
        <li>Составление отчетности</li>
      </ul>`,
  ed:`<h3>Образование</h3>
  <article>
    <div class='school'>
      <span>2016-2020</span> <strong>Московский Государственный Технический Университет им. Н.Э.Баумана</strong>
    </div>
    <div class="descrition">
      Бакалавр, Программный инженер (Программное обеспечение ЭВМ и информационные технологии ИУ7)
    </div>
  </article>`,
  add_ed: `        
        <h3>Дополнительное образование</h3>
        <article class='course'>
            <div class='title'>
              <h4>Продуктовый курс Ильи Красинского</h4>
            </div>
            <div class="descrition">
              <p>«Product Heroes»</p>
            </div>
          </article>
        <article class='course'>
          <div class='title'>
            <h4>Онлайн курс Standfor University</h4>
          </div>
          <div class="descrition">
            <p>«Машинное зрение CS231N»</p>
          </div>
        </article>
      <article class='course'>
          <div class='title'>
            <h4>Онлайн курс</h4>
          </div>
          <div class="descrition">
            <p>«Теория Игр»</p>
          </div>
        </article>
      <article class='course'>
          <div class='title'>
            <h4>Онлайн курс</h4>
          </div>
          <div class="descrition">
            <p>«Data Science Advanced»</p>
          </div>
        </article>
    `,
skills: `<h3>Профессиональные навыки</h3>
    <div>
      <div class='column'>
        <ul class="job-description">
          <li>Построение систем продуктовых KPI</li>
          <li>Запуск и оценка А/Б тестов</li>
          <li>Оценка юнит-экономики и поиск точек роста</li>
          <li>Обучение сотрудников</li>
          <li>Умение декомпозировать и делегировать задачи</li>
          <li>Уверенное знание SQL</li>
          <li>Создание ETL процессов: Airflow</li>
          <li>Работа с реляционными базами данных: Vertica, MySQL, MsSQL, Oracle, PostgreSQL, GreenPlum</li>
          <li>Работа с большими данными: Hadoop, Hive, Clickhouse, Spark</li>
          <li>Продвинутый пользователь инструментов визуализации: Tableau, SAP </li>
          <li>Знание IDEF0, UML-диаграмм,bpm-нотаций</li>
          <li>Языки программирования на уверенном уровне: Python, C/C++, C#</li>
          <li>Работа с api-методами: Postman, SoapUI, BloomRPC</li>
          <li>Навыки работы в Jira, Confluence и его внутренняя настройка</li>
          <li>Работа с нереляционными базами данных: Casandra</li>
          <li>Знание финансовых метрик</li>
          <li>Навыки работы с машинным обучением</li>
          <li>Знание основных парадигм программирования: Императивного, Объектно Ориентированного, Функционального и Логического</li>
          <li>Уверенное использование системы контроля версий Git</li>
          <li>Работа на уровне администратора Linux систем</li>
          <li>Продвинутый пользователь пакета MS Office</li>
        </ul>
      </div>
    </div>
    <h4>Иностранные языки</h4>
    <ul class="job-description">
    <li>Русский - Native</li>
    <li>Английский - Advanced C1</li>
    <li>Румынский - Upper Intermediate B2</li>
    </ul>`, 
interests:`<h3>Интересы и Другие Увлечения</h3>
  <ul class="job-description">
    <li>Торговля криптовалютой: заработал $20K за 1 год</li>
    <li>Кейс чемпионаты: HQ 15% Oliver Wyman, HQ 25% McKinsey Business Diving </li>
    <li>Путешествия: посетил 24 страны, жил в двух странах</li>
    <li>Спорт: сноуборд, баскетбол, вэйкборд</li>
  </ul>
</section>`,
download: `<div class="block-download">
<a class="download-link" href="pdf/Pisaruc_Victor_CV_en.pdf" target="_blank" download name="resume-download">
  <img class="download-image" src="./img/document.svg">
  <br><p name="resume-text">скачать резюме</p></a>
</div>
</section>`
}
};
if (window.location.hash)
{
  if (window.location.hash === "#en"){
    fio.innerHTML = language.en.fio;
    bio.innerHTML = language.en.bio;
    w_exp.innerHTML = language.en.w_exp;
    w_pl0.innerHTML = language.en.w_pl0;
    jd_0.innerHTML = language.en.jd_0;
    w_pl1.innerHTML = language.en.w_pl1;
    jd_1.innerHTML = language.en.jd_1;
    w_pl2.innerHTML = language.en.w_pl2;
    jd_2.innerHTML = language.en.jd_2;
    w_pl3.innerHTML = language.en.w_pl3;
    jd_3.innerHTML = language.en.jd_3;
    w_pl4.innerHTML = language.en.w_pl4;
    jd_4.innerHTML = language.en.jd_4;
    ed.innerHTML = language.en.ed;
    add_ed.innerHTML = language.en.add_ed;
    skills.innerHTML = language.en.skills;
    interests.innerHTML = language.en.interests;
    download.innerHTML = language.en.download;
  }
  if (window.location.hash === "#ru"){
    fio.innerHTML = language.ru.fio;
    bio.innerHTML = language.ru.bio;
    w_exp.innerHTML = language.ru.w_exp;
    w_pl0.innerHTML = language.ru.w_pl0;
    jd_0.innerHTML = language.ru.jd_0;
    w_pl1.innerHTML = language.ru.w_pl1;
    jd_1.innerHTML = language.ru.jd_1;
    w_pl2.innerHTML = language.ru.w_pl2;
    jd_2.innerHTML = language.ru.jd_2;
    w_pl3.innerHTML = language.ru.w_pl3;
    jd_3.innerHTML = language.ru.jd_3;
    w_pl4.innerHTML = language.ru.w_pl4;
    jd_4.innerHTML = language.ru.jd_4;
    ed.innerHTML = language.ru.ed;
    add_ed.innerHTML = language.ru.add_ed;
    skills.innerHTML = language.ru.skills;
    interests.innerHTML = language.ru.interests;
    download.innerHTML = language.ru.download;
  }
}


dataReload.forEach((x) => {
x.onclick = () => {
  let currentLang = window.location.hash;
  if (x.textContent==="RU" && window.location.hash != "#ru") {
    window.location.hash = "#ru";
    location.reload(true);
  }

  if (x.textContent==="EN" && window.location.hash != "#en") {
    window.location.hash = "#en";
    location.reload(true);
  }
}
})
}