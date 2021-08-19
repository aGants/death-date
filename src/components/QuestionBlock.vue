<template>
    <section class="question">
    <div class="container">
      <span class="question__title color btext"> 
        Боитесь ли вы умереть? 
      </span>
       <Button-link :link="'/question/2'">
        Да
      </Button-link>
       <Button-link :link="'/question/2'">
        Нет
      </Button-link>
      <span class="question__subtext">
        Вопрос 1-5
      </span>
    </div>
  </section>
</template>

<script>
import ButtonLink from '@/components/ButtonLink.vue'

export default {
  name: 'QuestionBlock',
  components: { ButtonLink }
}
</script>

<style scoped>
  .question__title {
    margin-bottom: 27px;
    text-transform: uppercase;
    font-weight: 400;
  }
  .question__subtext {
    color: var(--sub-color);
  }

  @media (min-width: 769px) {
    .question__title {
      margin-bottom: 45px;
      text-transform: uppercase;
    }

  }
</style>