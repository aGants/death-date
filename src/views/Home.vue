<template>
  <Header />
  <Block />
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
import Header from '@/components/Header.vue'
import Block from '@/components/Block.vue'

export default {
  name: 'Home',
  components: {
    Header, Block
  }
}
</script>
