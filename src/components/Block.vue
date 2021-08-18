<template>
  <section class="block">
    <div class="container">
        <p class="block-text btext">
        <img class="block-text__img" src="@/assets/hands.png">
        Позвольте нам раскрыть эту волнующую тайну и 
          <span class="block-text__bold color">
            с точностью определить дату и время вашей смерти, 
          </span>
            а также предшествующую этому событию причину
        </p>
      </div>
  </section>
</template>

<script>

export default {
  name: 'Block',
}
</script>

<style scoped>
  .block {
    margin-bottom: 40px;
  }
  .block-text {
    position: relative;
    box-sizing: border-box;
    width: 255px;
    padding: 58px 19px 21px;
    border: 1px solid var(--main-color);
  }
  .block-text__bold {
    display: block;
    font-weight: 500;
  } 
  .block-text__img{
    position: absolute;
    width: 78px;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 83%;
  }

  @media (min-width: 769px) {
    .block {
      margin-bottom: 70px;
    }
    .block-text {
      width: 442px;
      padding: 128px 32px 84px;
    }
    .block-text__img {
      width: 135px;
    }
  }

</style>
