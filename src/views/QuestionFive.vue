<template>
  <Record-loading v-if="isLoading"/>
  <Question-quiz v-else>
      <template v-slot:question>
        Запись, которую Вы услышите, может шокировать людей с неокрепшей психикой. Вы готовы узнать, что ждет именно Вас?
      </template>
      <template v-slot:questions>
        <button class="button" @click="onClick"> Да </button> 
        <button class="button" @click="onClick">Затрудняюсь ответить </button> 
      </template>
      <template v-slot:number>
        Вопрос 5-5
      </template>
  </Question-quiz>
  
</template>

<script>
import QuestionQuiz from '@/components/QuestionQuiz.vue'
import RecordLoading from '@/components/RecordLoading.vue'

export default {
  name: 'QuestioFive',
  data () {
    return {
      isLoading: false,
    }
  },
  components: { QuestionQuiz, RecordLoading },
  methods: {
    onClick() {
      this.isLoading = true;
       setTimeout(() => {
         this.$router.push("/result");
      }, 9000);
    }
  }
}
</script>