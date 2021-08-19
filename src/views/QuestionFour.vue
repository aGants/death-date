<template>
  <Question-quiz>
      <template v-slot:header>
        Смерть родного человека – одно из тяжелейших испытаний в жизни каждого из нас!
      </template>
      <template v-slot:question>
        Снятся ли Вам умершие люди?
      </template>
      <template v-slot:questions>
        <Button-link :link="'/question/5'">Да</Button-link>
        <Button-link :link="'/question/5'">Нет</Button-link> 
        <Button-link :link="'/question/5'">Иногда</Button-link> 
      </template>
      <template v-slot:number>
        Вопрос 4-5
      </template>
  </Question-quiz>
</template>

<script>
import QuestionQuiz from '@/components/QuestionQuiz.vue'
import ButtonLink from '@/components/ButtonLink.vue'

export default {
  name: 'QuestionFour',
  components: { QuestionQuiz, 
  ButtonLink 
  }
}
</script>