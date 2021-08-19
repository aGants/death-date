<template>
  <Question-quiz>
      <template v-slot:header>
        Уже совсем скоро Вы узнаете много интересного о своем будущем!
      </template>
      <template v-slot:question>
        Укажите свою дату рождения:
      </template>
      <template v-slot:questions>

        <form @submit.prevent="onClick">
          <select
            v-model="date.day"
            class="questions-select"
            :class="{error: dayError}"
          >
            <option value="" disabled>День</option>
            <option v-for="day in days" :key="day">{{ day }}</option>
          </select>
          <select
            v-model="date.month"
            class="questions-select"
            :class="{error: monthError}"
          >
            <option value="" disabled>Месяц</option>
            <option v-for="month in months" :key="month">{{ month }}</option>
          </select>
          <select
            v-model="date.year"
            class="questions-select"
            :class="{error: yearError}"
          >
            <option value="" disabled>Год</option>
            <option v-for="year in years" :key="year">{{ year }}</option>
          </select>

          <button class="button" onClick> Далее </button> 
      </form>
      
      </template>
      <template v-slot:number>
        Вопрос 3-5
      </template>
  </Question-quiz>
</template>

<script>
import QuestionQuiz from '@/components/QuestionQuiz.vue'

export default {
  name: 'QuestionThree',
  components: { QuestionQuiz, 
  },
  data() {
    return {
      date: {
        day: '',
        month: '',
        year: '',
      },
      dayError: false,
      monthError: false,
      yearError: false,
      Disabled: false
    }
  },
  setup () {
    let days   = Array.from(Array(31), (v, k) => k+1);
    let months = Array.from(Array(12), (v, k) => k+1); 
    let years  = Array.from(Array(101), (v, k) => k+1921).reverse();
    return {
      days, months, years
    }
  },
  methods: {
    onClick() {
      if (this.date.day === '') {
        this.dayError = true;
      } else if (this.date.month === '') {
        this.dayError = false;
        this.monthError = true;
      } else if (this.date.year === '') {
        this.monthError = this.dayError = false;
        this.yearError = true;
      } else {
        let date = this.date;
        this.$store.commit('ADD_AGE', { day: date.day, month: date.month-1, year: date.year })
        this.yearError = this.monthError = this.dayError = false;
        this.$router.push("/question/4");
      }
    }
  }
}
</script>

<style scoped>
  .questions-select {
    display: block;
    width: 180px;
    padding: 11px 0;
    margin-bottom: 20px;
    border: none;
    border-radius: 50px;
    outline: 0;
    font: 400 14px 'Roboto', sans-serif;
    color: var(--bgcolor);
    cursor: pointer;
    transition: .7s ease-out;
    text-decoration: none;
    text-align: center;
    text-align-last: center;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: #CBCBCB url('../assets/arrow.svg') no-repeat left;
    background-position-x: calc(100% - 10px);
  }

  .questions-select:active, .questions-select:focus {
    box-shadow: inset 0px 5px 8px rgb(32 32 36 / 70%);
  }

  @media (min-width: 769px) {
    .questions-select {
      width: 310px;
      padding: 23px 0;
      margin-bottom: 34px;
      font: 400 20px 'Roboto', sans-serif;
    }
  }

.error {
  border: 1px solid var(--error);
}
</style>
