<template>
  <Header />
  <Block />
  <Picture />
  <Question />
  <End />
  <Footer />
</template>

<script>
import Header from '@/components/Header.vue'
import Block from '@/components/Block.vue'
import Picture from '@/components/Picture.vue'
import Question from '@/components/Question.vue'
import End from '@/components/End.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header, Block, Picture, Question, End, Footer
  },
}
</script>
