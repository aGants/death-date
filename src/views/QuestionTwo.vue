<template>
  <Question-quiz>
      <template v-slot:header>
        Мы расскажем Вам не только подробности вашей смерти, но также поможем Вам избежать этой ужасной даты и продлить вашу жизнь на многие годы.
      </template>
      <template v-slot:question>
        Когда Вы чувствуете себя наиболее комфортно?
      </template>
      <template v-slot:questions>
        <Button-link :link="'/question/3'">Утро</Button-link>
        <Button-link :link="'/question/3'">День</Button-link> 
        <Button-link :link="'/question/3'">Вечер</Button-link> 
        <Button-link :link="'/question/3'">Ночь</Button-link> 
      </template>
      <template v-slot:number>
        Вопрос 2-5
      </template>
  </Question-quiz>
</template>

<script>
import QuestionQuiz from '@/components/QuestionQuiz.vue'
import ButtonLink from '@/components/ButtonLink.vue'

export default {
  name: 'QuestionTwo',
  components: { QuestionQuiz, ButtonLink }
}
</script>