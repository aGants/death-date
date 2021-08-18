<template>
    <section class="question">
    <div class="container">
      <span class="question__title color btext"> 
        Боитесь ли вы умереть? 
      </span>
        <button class="btn">Да</button>
        <button class="btn">Нет</button>
      <span class="question__subtext">
        Вопрос 1-5
      </span>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>
  .question__title {
    margin-bottom: 27px;
    text-transform: uppercase;
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