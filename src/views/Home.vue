<template>
  <Header-block />
  <Second-block />
  <Picture-block />
  <Question-block />
  <End-block />
  <Footer-block />
</template>

<script>
import HeaderBlock from '@/components/HeaderBlock.vue'
import SecondBlock from '@/components/SecondBlock.vue'
import PictureBlock from '@/components/PictureBlock.vue'
import QuestionBlock from '@/components/QuestionBlock.vue'
import EndBlock from '@/components/EndBlock.vue'
import FooterBlock from '@/components/FooterBlock.vue'

export default {
  name: 'Home',
  components: {
    HeaderBlock, SecondBlock, PictureBlock, QuestionBlock, EndBlock, FooterBlock
  },
}
</script>
