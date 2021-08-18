<template>
  <section class="second">
    <div class="container">
        <p class="second-text btext">
        <img class="second-text__img" src="@/assets/hands.png">
        Позвольте нам раскрыть эту волнующую тайну и 
          <span class="second-text__bold color">
            с точностью определить дату и время вашей смерти, 
          </span>
            а также предшествующую этому событию причину
        </p>
      </div>
  </section>
</template>

<script>

export default {
  name: 'SecondBlock',
}
</script>

<style scoped>
  .second {
    margin: 78px 0 40px;
  }
  .second-text {
    position: relative;
    box-sizing: border-box;
    width: 255px;
    padding: 58px 19px 21px;
    border: 1px solid var(--main-color);
  }
  .second-text__bold {
    font-weight: 500;
  } 
  .second-text__img{
    position: absolute;
    width: 78px;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 83%;
  }

  @media (min-width: 769px) {
    .second {
      margin: 140px 0 70px;
    }
    .second-text {
      width: 442px;
      padding: 128px 32px 84px;
    }
    .second-text__img {
      width: 135px;
    }
  }

</style>
