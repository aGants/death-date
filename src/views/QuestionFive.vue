<template>
  <Record-loading v-if="isLoading"/>
  <Question-quiz v-else>
    <template v-slot:dialog>
      <div class="dialog" >
        <p class="dialog__text" v-if="age<=35">
        По вам скучает очень близкий человек, которого больше нет в мире живых.
        </p>
        <p v-else-if="age<=45">
          По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это дедушка или бабушка.
        </p>
        <p v-else>
          По вам скучает очень близкий человек, которого больше нет в мире живых. Возможно это кто-то из Ваших родителей.
        </p>
      </div>
    </template>
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
import { mapState } from 'vuex'
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
  computed: mapState(['age']),
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