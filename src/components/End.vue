<template>
  <section class="end">
    <div class="container">
      <picture class="end__moon">
        <source media="(min-width:769px)" srcset="@/assets/bmoon.png">
        <img src="@/assets/moon.png">
      </picture>
      <picture class="end__eye">
        <source media="(min-width:769px)" srcset="@/assets/beye.png">
        <img src="@/assets/eye.png">
      </picture>
      <img src="@/assets/rune1.png" atl="rune" class="end__ruine">
      <div class="end__text">
        <p>Вы, конечно, умрете.</p>
        <p> И все, с кем вы знакомы,</p>
        <p> тоже однажды умрут.</p>
      </div>
      <img src="@/assets/rune2.png" atl="rune" class="end__ruine">
    </div>
  </section>
</template>

<script>
export default {
  name: 'End'
}
</script>

<style scoped>
  .container {
    position: relative;
  }
  .end {
    padding: 60px 0 70px;
    overflow: hidden;
  }
  .end__moon {
    position: absolute;
    bottom: -26px;
    left: -16px;
  }
  .end__eye {
    position: absolute;
    transform: rotate(-9.61deg);
    top: -25px;
    right: -26px;
  }
  .end__ruine {
    height: 10px;
  }
  .end__text {
    margin: 35px 0;
    font: 400 20px/28px 'Bad Script';
  }
  @media (min-width: 769px) {
    .container {
      overflow: visible;
    }
    .end {
      padding: 105px 0 152px;
    }
    .end__ruine {
      height: 17.36px;
    }
    .end__text {
      margin: 80px 0;
      font: 400 25px/35px 'Bad Script';
    }
    .end__moon {
      bottom: -102px;
      left: -43px;
    }
    .end__eye {
      top: -83px;
      right: -123px;
    }
  }
</style>