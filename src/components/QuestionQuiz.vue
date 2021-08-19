<template>
  <header class="header">
    <div class="container">
    <picture class="header__eye">
        <source media="(min-width:769px)" srcset="@/assets/meye.png">
        <img src="@/assets/eye.png">
    </picture>
      <p class="header__text">
        <slot name="header"></slot>
      </p>
    </div>
  </header>
  <section class="questions">
    <div class="container">
      <p class="questions_text color">
        <slot name="question"></slot>
      </p>
      <div class="questions__block">
        <slot name="questions"></slot>
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="container">
      <picture class="footer__moon">
        <source media="(min-width:769px)" srcset="@/assets/bmoon.png">
        <img src="@/assets/moon.png">
      </picture>
      <p class="footer__number">
        <slot name="number"></slot>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'QuestionQuiz',
}
</script>

<style scoped>
  .container {
    position: relative;
  }
  .header {
    overflow: hidden;
    padding: 21px 0;
    font: 400 14px/20px 'Bad Script';
    color: var(--sub-color);
    border-bottom: 1px solid var(--svg-color);
  }
  .header__text {
    width: 235px;
  }
  .header__eye {
    position: absolute;
    transform: rotate(-9.61deg);
    top: 55%;
    right: -26px;
  }
  .footer__number {
    color: var(--sub-color);
  }
  @media (min-width: 769px) {
    .container {
      overflow: visible;
    }
    .header {
      font: 400 25px/35px 'Bad Script';
    }
    .header__text {
      width: 420px;
    }
    .header__eye {
      height: 77px;
      width: 146px;
      margin: auto;
      top: 60px;
      bottom: 0%;
      right: 0;
      left: 500px;
    }
  } 
</style>