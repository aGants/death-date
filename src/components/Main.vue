<template>
  <header class="header">
    <div class="container">
      <p class="header__subtitle">Лучшие астрологи и экстрасенсы Румынии</p>
      <span class="header__title">Точность прогноза: 97%</span>
      
      <img src="@/assets/woman.png" class="header__img">
      
      <p class="header__text color">Вас беспокоит вопрос о том, 
        <span class="header__uptext">
          когда Вы покинете этот Мир и при каких обстоятельствах?
        </span>
      </p>
      <button class="btn">Да</button>
      <button class="btn">Нет</button>
      <span class="header__downtext">Онлайн предсказание</span>
    </div>
  </header>

  <section class="block">
    <div class="container">
        <p class="block-text">
        <img class="block-text__img" src="@/assets/hands.png">
        Позвольте нам раскрыть эту волнующую тайну и 
          <span class="block-text__bold color">
            с точностью определить дату и время вашей смерти, 
          </span>
            а также предшествующую этому событию причину
        </p>
      </div>
  </section>

  <section class="picture">
    <div class="container">
      <p class="picture__text">
        Многие не верят предсказаниям и мы решили доказать каждому, 
        <span class="color">
          что прогноз может изменить жизнь любого человека!
        </span>
      </p>
    </div>
  </section>

  <section class="question">
    <div class="container">
      <span class="question__title">
      </span>
        <button class="btn">Да</button>
        <button class="btn">Нет</button>
        <span class="question__subtext">

        </span>
    </div>
  </section>

  <section class="end">
    <div class="container">
      <img src="@/assets/rune1.svg" atl="rune">
      <p class="end__text">
        Вы, конечно, умрете. И все, с кем вы знакомы, тоже однажды умрут.
      </p>
      <img src="@/assets/rune2.svg" atl="rune">
    </div>
  </section>

  <footer class="footer">
    <div class="container">
      <p class="footer__text">
        TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI 
        <span>
          DECLARATI CA AVETI 18 ANI IMPLINITI, 
        </span>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Main',
  props: {
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
