<template>
  <Question-quiz>
      <template v-slot:header>
        Уже совсем скоро Вы узнаете много интересного о своем будущем!
      </template>
      <template v-slot:question>
        Укажите свою дату рождения:
      </template>
      <template v-slot:questions>
        <Button-link :link="'/question/4'">Далее</Button-link> 
      </template>
      <template v-slot:number>
        Вопрос 3-5
      </template>
  </Question-quiz>
</template>

<script>
import QuestionQuiz from '@/components/QuestionQuiz.vue'
import ButtonLink from '@/components/ButtonLink.vue'

export default {
  name: 'QuestionThree',
  components: { QuestionQuiz, 
  ButtonLink 
  }
}
</script>