<template>
  <main class="main">
    <div class="container">
      <section class="dialog">
        <p class="dialog-text">
          Спасибо за Ваши ответы!
          <b class="dialog-text_important">
            Мы подготовили для Вас персональную аудио запись с Вашим прогнозом.
          </b>
        </p>
      </section>
      <p class="main-text">
        Bы можете узнать, как повлиять на события, которые ожидают вас в ближайшем будущем. 
      </p>
      <section class="main-block">
        <p class="main-block__text color btext">
          <span class="main-block__text_important">Первое значимое событие может произойти уже {{ date }}</span>,
          вам надо быть готовым, что бы последствия не оказались необратимыми.
        </p>
      </section>
      <p class="main-calltext">
        Нажмите на кнопку ниже прямо сейчас и наберите наш номер телефона. Прослушайте важную информацию!
      </p>
      <button class="button">Позвонить и прослушать</button>
    </div>
    <footer-block />
  </main>
</template>

<script>
import FooterBlock from '@/components/FooterBlock.vue'

export default {
  name: 'Home',
  data() {
    return {
      date: '',
    }
  },
  components: { FooterBlock },
  mounted() {
    const today = new Date();
    let dd = today.getDate()+1;
    let mm = today.getMonth()+1;
    let yy = today.getFullYear();
    this.date = ('0' + dd).slice(-2) + '.' + ('0' + mm).slice(-2) + '.' + yy
  }
}
</script>

<style scoped>
  .main {
    font: 300 14px/16px 'Roboto';
  }
  .dialog {
    margin: 30px 0 18px;
    line-height: 18px;
  }
  .dialog-text_important {
    display: block;
  }

  .main-text {
    width: 220px;
  }
  .main-block {
    width: 230px;
    padding: 12px 15px;
    margin: 22px 0 19px;
    border: 1px solid var(--main-color);
    line-height: 25px;

  }
  .main-block__text_important {
    text-transform: uppercase;
    font-weight: 700;
  }

  .main-calltext {
    display: block;
    width: 230px;
    margin-bottom: 21px;
  }

  .button {
    width: 242px;
    background: linear-gradient(to right,#4CD964, #32B949);
  }

  .button:hover {
    box-shadow: 0 2px 15px 0 #32B949;
  }

  .button:active, .button:focus {
    box-shadow: 0 2px 30px 0 #32B949;
  }
  @media (min-width: 769px) {
    .main {
      font: 300 25px/35px 'Roboto';
    }
    .dialog {
      width: 480px;
      height: 170px;
      margin: 54px 0 30px;
    }
    .main-text {
      width: 420px;
    }
    .main-block {
      box-sizing: border-box;
      width: 470px;
      padding: 60px 50px 40px;
      margin: 42px 0 30px;
    }

    .main-calltext {
      display: block;
      width: 470px;
      margin-bottom: 21px;
    }

    .button {
      width: 400px;
    }  
  }
</style>
