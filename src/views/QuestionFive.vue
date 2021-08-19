<template>
  <Question-quiz>
      <template v-slot:question>
        Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?
      </template>
      <template v-slot:questions>
        <Button-link :link="'/question/5'">Да</Button-link>
        <Button-link :link="'/question/5'">Затрудняюсь ответить</Button-link> 
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
  name: 'QuestioFive',
  components: { QuestionQuiz, 
  ButtonLink 
  }
}
</script>