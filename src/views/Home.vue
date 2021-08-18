<template>
  <Header />
  <Block />
  <Picture />
  <Question />
  <End />

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
import End from '@/components/End.vue'

export default {
  name: 'Home',
  components: {
    Header, Block, Picture, Question, End
  }
}
</script>
