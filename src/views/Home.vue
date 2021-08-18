<template>
  <Header />
  <Block />
  <Picture />
  <Question />
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
import Picture from '@/components/Picture.vue'
import Question from '@/components/Question.vue'

export default {
  name: 'Home',
  components: {
    Header, Block, Picture, Question
  }
}
</script>
